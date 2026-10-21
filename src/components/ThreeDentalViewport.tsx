import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  type FocalLength,
  type Aperture,
  type FlashMode,
  type WhiteBalanceMode,
  type SubjectMode,
} from '../types/camera';

interface ThreeDentalViewportProps {
  focalLength: FocalLength;
  aperture?: Aperture;
  dofBlurCaninesPx: number;
  motionBlurPx: number;
  noiseOpacity: number;
  ambientLightContamination: number;
  hasFlashCurtainArtifact: boolean;
  evDiff: number;
  showFocusPeaking: boolean;
  showGrid: boolean;
  subjectMode: SubjectMode;
  flashMode?: FlashMode;
  whiteBalance?: WhiteBalanceMode;
}

export const ThreeDentalViewport: React.FC<ThreeDentalViewportProps> = ({
  focalLength,
  aperture = 22,
  dofBlurCaninesPx,
  motionBlurPx,
  noiseOpacity,
  ambientLightContamination,
  hasFlashCurtainArtifact,
  evDiff,
  showFocusPeaking,
  showGrid,
  subjectMode,
  flashMode = 'twin',
  whiteBalance = 'flash',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const renderTargetRef = useRef<THREE.WebGLRenderTarget | null>(null);
  const postSceneRef = useRef<THREE.Scene | null>(null);
  const postCameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const dofMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const mouthGroupRef = useRef<THREE.Group | null>(null);
  const lightsGroupRef = useRef<THREE.Group | null>(null);
  const orthoGroupRef = useRef<THREE.Group | null>(null);
  const vitaGroupRef = useRef<THREE.Group | null>(null);
  const animFrameIdRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  // Mouse tilt tracking for subtle interactive parallax
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  // Calculate WB Color
  const getWBColor = (wb: WhiteBalanceMode): THREE.Color => {
    switch (wb) {
      case 'flash':
        return new THREE.Color(0xffffff); // 5500K neutral calibrated
      case 'custom':
        return new THREE.Color(0xfcfcff); // 18% gray calibrated
      case 'cloudy':
        return new THREE.Color(0xffe6c4); // 6500K warm daylight
      case 'tungsten':
        return new THREE.Color(0xc6dfff); // 3200K cold blue cast
      default:
        return new THREE.Color(0xffffff);
    }
  };

  // Focal length camera mappings
  const getCameraSpecs = (fl: FocalLength) => {
    switch (fl) {
      case 60:
        return { fov: 38, z: 5.8 };
      case 85:
        return { fov: 27, z: 7.4 };
      case 100:
        return { fov: 23, z: 8.8 }; // Gold standard dental macro 1:1
      case 180:
        return { fov: 14, z: 14.5 };
      default:
        return { fov: 23, z: 8.8 };
    }
  };

  // Aperture blur factor: high at f/2.8, zero at f/22
  const getApertureBlurAmount = (fStop: number): number => {
    switch (fStop) {
      case 2.8:
        return 2.8; // Heavy macro bokeh blur on background and lower/posterior teeth
      case 4:
        return 1.9;
      case 5.6:
        return 1.2;
      case 8:
        return 0.65;
      case 11:
        return 0.28;
      case 16:
        return 0.1;
      case 22:
      case 32:
        return 0.0; // Pinhole sharpness throughout entire depth
      default:
        return 0.0;
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 360;

    // 1. Primary 3D Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06070a); // Deep dark oral cavity
    sceneRef.current = scene;

    // 2. Camera
    const specs = getCameraSpecs(focalLength);
    const camera = new THREE.PerspectiveCamera(specs.fov, width / height, 0.1, 50);
    camera.position.set(0, -0.2, specs.z);
    cameraRef.current = camera;

    // 3. WebGL Renderer with Depth Texture support
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Render Target with Depth Buffer for Depth-of-Field (DoF) post-processing
    const depthTexture = new THREE.DepthTexture(width, height);
    depthTexture.type = THREE.UnsignedShortType;
    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      depthTexture: depthTexture,
    });
    renderTargetRef.current = renderTarget;

    // 5. Fullscreen Quad Depth-of-Field Shader Pipeline
    const dofVert = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    const dofFrag = `
      uniform sampler2D tColor;
      uniform sampler2D tDepth;
      uniform float uFocalDepth;
      uniform float uApertureBlur;
      uniform vec2 uResolution;
      uniform float uNear;
      uniform float uFar;
      varying vec2 vUv;

      float linearizeDepth(float z_b) {
        float z_n = 2.0 * z_b - 1.0;
        return 2.0 * uNear * uFar / (uFar + uNear - z_n * (uFar - uNear));
      }

      void main() {
        float rawDepth = texture2D(tDepth, vUv).r;
        
        // If background (depth near 1.0), it's far oral depth
        float linDepth = rawDepth >= 0.9999 ? uFar * 0.8 : linearizeDepth(rawDepth);
        
        // Distance from focal plane (upper central incisors are at uFocalDepth)
        float dist = abs(linDepth - uFocalDepth);
        
        // Circle of confusion radius in pixels
        float coc = clamp(dist * uApertureBlur, 0.0, 14.0);

        if (coc < 0.25) {
          gl_FragColor = texture2D(tColor, vUv);
          return;
        }

        // 12-tap Poisson disc blur for creamy macro bokeh
        vec2 texel = 1.0 / uResolution;
        vec4 sum = vec4(0.0);
        
        vec2 offsets[12];
        offsets[0] = vec2(-0.32, -0.40);
        offsets[1] = vec2(-0.84, -0.07);
        offsets[2] = vec2(-0.69,  0.45);
        offsets[3] = vec2(-0.20,  0.62);
        offsets[4] = vec2( 0.96, -0.19);
        offsets[5] = vec2( 0.47, -0.48);
        offsets[6] = vec2( 0.51,  0.76);
        offsets[7] = vec2( 0.18, -0.89);
        offsets[8] = vec2( 0.50,  0.06);
        offsets[9] = vec2( 0.89,  0.41);
        offsets[10] = vec2(-0.32, -0.93);
        offsets[11] = vec2(-0.79, -0.59);

        for (int i = 0; i < 12; i++) {
          sum += texture2D(tColor, vUv + offsets[i] * coc * texel);
        }
        
        gl_FragColor = sum * 0.083333; // 1.0 / 12.0
      }
    `;

    const dofMaterial = new THREE.ShaderMaterial({
      vertexShader: dofVert,
      fragmentShader: dofFrag,
      uniforms: {
        tColor: { value: null },
        tDepth: { value: null },
        uFocalDepth: { value: specs.z },
        uApertureBlur: { value: getApertureBlurAmount(aperture) },
        uResolution: { value: new THREE.Vector2(width, height) },
        uNear: { value: 0.1 },
        uFar: { value: 50.0 },
      },
    });
    dofMaterialRef.current = dofMaterial;

    const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const postQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), dofMaterial);
    const postScene = new THREE.Scene();
    postScene.add(postQuad);
    postSceneRef.current = postScene;
    postCameraRef.current = postCamera;

    // 6. Complete Oral Anatomy (Upper & Lower Arch)
    const mouthGroup = new THREE.Group();
    scene.add(mouthGroup);
    mouthGroupRef.current = mouthGroup;

    // Helper: Anatomical Curved Tooth Generator using 2D Shapes and Organic Extrusion
    const createAnatomicalTooth = (
      type: 'central' | 'lateral' | 'canine' | 'premolar' | 'lower_central' | 'lower_lateral' | 'lower_canine',
      width: number,
      height: number,
      thickness: number,
      material: THREE.Material
    ) => {
      const shape = new THREE.Shape();
      const hw = width * 0.5;
      const hh = height * 0.5;

      if (type === 'central') {
        // Upper Central Incisor (11/21): Distinct smooth curved trapezoid with rounded incisal angles
        shape.moveTo(-hw * 0.75, hh * 0.9);
        shape.quadraticCurveTo(0, hh * 1.05, hw * 0.75, hh * 0.9); // Curved cervical line at gum
        shape.quadraticCurveTo(hw * 1.04, -hh * 0.55, hw * 0.96, -hh * 0.85); // Mesial border
        shape.quadraticCurveTo(hw * 0.94, -hh * 1.0, hw * 0.75, -hh * 1.0); // Rounded mesio-incisal angle
        shape.lineTo(-hw * 0.65, -hh * 1.0); // Incisal edge
        shape.quadraticCurveTo(-hw * 1.05, -hh * 0.98, -hw * 0.98, -hh * 0.75); // Disto-incisal soft angle
        shape.quadraticCurveTo(-hw * 1.02, 0.1, -hw * 0.75, hh * 0.9); // Distal border
      } else if (type === 'lateral') {
        // Upper Lateral Incisor (12/22): Graceful, rounded disto-incisal angle
        shape.moveTo(-hw * 0.7, hh * 0.9);
        shape.quadraticCurveTo(0, hh * 1.05, hw * 0.7, hh * 0.9);
        shape.quadraticCurveTo(hw * 1.02, -hh * 0.45, hw * 0.9, -hh * 0.85);
        shape.quadraticCurveTo(hw * 0.85, -hh * 1.0, hw * 0.65, -hh * 1.0);
        shape.lineTo(-hw * 0.5, -hh * 1.0);
        shape.quadraticCurveTo(-hw * 1.05, -hh * 0.9, -hw * 0.9, -hh * 0.6); // Very rounded distal curve
        shape.quadraticCurveTo(-hw * 0.98, 0.15, -hw * 0.7, hh * 0.9);
      } else if (type === 'canine') {
        // Upper Canine (13/23): Distinctive pointed cusp tip and diamond labial silhouette
        shape.moveTo(-hw * 0.65, hh * 0.9);
        shape.quadraticCurveTo(0, hh * 1.05, hw * 0.65, hh * 0.9);
        shape.quadraticCurveTo(hw * 1.05, -hh * 0.25, hw * 0.85, -hh * 0.7);
        shape.quadraticCurveTo(hw * 0.65, -hh * 0.9, 0, -hh * 1.08); // Sharp, prominent cusp apex
        shape.quadraticCurveTo(-hw * 0.65, -hh * 0.9, -hw * 0.85, -hh * 0.7);
        shape.quadraticCurveTo(-hw * 1.05, -hh * 0.25, -hw * 0.65, hh * 0.9);
      } else if (type === 'lower_central' || type === 'lower_lateral') {
        // Lower Incisors (41/31/42/32): Inverted chisel, slender with rounded cervical margin
        shape.moveTo(-hw * 0.8, -hh * 0.9);
        shape.quadraticCurveTo(0, -hh * 1.05, hw * 0.8, -hh * 0.9);
        shape.quadraticCurveTo(hw * 0.98, 0.4, hw * 0.9, 0.88);
        shape.quadraticCurveTo(hw * 0.85, hh * 1.0, hw * 0.65, hh * 1.0);
        shape.lineTo(-hw * 0.65, hh * 1.0); // Incisal edge facing up
        shape.quadraticCurveTo(-hw * 0.85, hh * 1.0, -hw * 0.9, 0.88);
        shape.quadraticCurveTo(-hw * 0.98, 0.4, -hw * 0.8, -hh * 0.9);
      } else if (type === 'lower_canine') {
        // Lower Canine (43/33): Slender cusp pointing upward
        shape.moveTo(-hw * 0.7, -hh * 0.9);
        shape.quadraticCurveTo(0, -hh * 1.05, hw * 0.7, -hh * 0.9);
        shape.quadraticCurveTo(hw * 1.02, 0.2, hw * 0.8, 0.75);
        shape.quadraticCurveTo(hw * 0.5, hh * 0.92, 0, hh * 1.08); // Lower canine cusp apex
        shape.quadraticCurveTo(-hw * 0.5, hh * 0.92, -hw * 0.8, 0.75);
        shape.quadraticCurveTo(-hw * 1.02, 0.2, -hw * 0.7, -hh * 0.9);
      } else {
        // Premolars: Rounded bicuspid profile
        shape.moveTo(-hw * 0.75, hh * 0.85);
        shape.quadraticCurveTo(0, hh * 1.0, hw * 0.75, hh * 0.85);
        shape.quadraticCurveTo(hw * 1.05, -hh * 0.3, hw * 0.85, -hh * 0.8);
        shape.quadraticCurveTo(0, -hh * 1.02, -hw * 0.85, -hh * 0.8);
        shape.quadraticCurveTo(-hw * 1.05, -hh * 0.3, -hw * 0.75, hh * 0.85);
      }

      // Smooth organic bevel settings (eliminates blockiness!)
      const geom = new THREE.ExtrudeGeometry(shape, {
        depth: thickness * 0.5,
        bevelEnabled: true,
        bevelSegments: 8,
        bevelSize: thickness * 0.24,
        bevelThickness: thickness * 0.28,
        bevelOffset: -0.01,
      });

      // Sculpt 3D organic convexity on the vestibular labial surface
      const pos = geom.attributes.position;
      const v = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        if (v.z > 0) {
          const nx = v.x / hw;
          const ny = v.y / hh;
          // Organic dome bulge on the facial face
          const dome = Math.max(0, 1.0 - (nx * nx + ny * ny) * 0.5) * 0.08;
          v.z += dome;

          // Three developmental lobes on incisors
          if (type === 'central' || type === 'lateral') {
            v.z += Math.cos(nx * Math.PI * 1.5) * 0.02;
          } else if (type === 'canine') {
            // Strong vertical canine labial ridge
            v.z += Math.max(0, 1.0 - Math.abs(nx)) * 0.06;
          }
        }
        pos.setXYZ(i, v.x, v.y, v.z);
      }

      geom.computeVertexNormals();
      return new THREE.Mesh(geom, material);
    };

    // Realistic PBR Dental Enamel Material (Maxillary & Mandibular)
    const upperEnamelMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xfbf9f4),
      roughness: 0.13,
      metalness: 0.01,
      clearcoat: 0.95,
      clearcoatRoughness: 0.05,
      transmission: 0.22,
      ior: 1.62, // Hydroxyapatite optical refractive index
      reflectivity: 0.6,
      specularColor: new THREE.Color(0xffffff),
    });

    const canineEnamelMat = upperEnamelMat.clone();
    canineEnamelMat.color = new THREE.Color(0xf6ebc6); // Natural warm dentin gradient

    const lowerEnamelMat = upperEnamelMat.clone();
    lowerEnamelMat.color = new THREE.Color(0xf8f6ee);

    // Gingival Gum Material
    const gumMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xc96d7c), // Natural stippled pink gum
      roughness: 0.44,
      metalness: 0.02,
    });

    // -------------------------------------------------------------
    // UPPER DENTAL ARCH (Maxillary Teeth - Incisors, Canines, Premolars)
    // -------------------------------------------------------------
    const upperGroup = new THREE.Group();
    mouthGroup.add(upperGroup);

    // Upper Teeth Definitions [id, type, x, y, z, rotY, rotZ, w, h, d, mat]
    const upperTeethDefs = [
      { id: '11', type: 'central' as const, x: -0.46, y: 0.38, z: 0.0, rotY: 0.03, rotZ: 0.015, w: 0.92, h: 1.25, d: 0.36, mat: upperEnamelMat },
      { id: '21', type: 'central' as const, x: 0.46, y: 0.38, z: 0.0, rotY: -0.03, rotZ: -0.015, w: 0.92, h: 1.25, d: 0.36, mat: upperEnamelMat },
      { id: '12', type: 'lateral' as const, x: -1.33, y: 0.44, z: -0.22, rotY: 0.18, rotZ: 0.03, w: 0.74, h: 1.08, d: 0.32, mat: upperEnamelMat },
      { id: '22', type: 'lateral' as const, x: 1.33, y: 0.44, z: -0.22, rotY: -0.18, rotZ: -0.03, w: 0.74, h: 1.08, d: 0.32, mat: upperEnamelMat },
      { id: '13', type: 'canine' as const, x: -2.12, y: 0.38, z: -0.68, rotY: 0.42, rotZ: 0.04, w: 0.82, h: 1.28, d: 0.42, mat: canineEnamelMat },
      { id: '23', type: 'canine' as const, x: 2.12, y: 0.38, z: -0.68, rotY: -0.42, rotZ: -0.04, w: 0.82, h: 1.28, d: 0.42, mat: canineEnamelMat },
      { id: '14', type: 'premolar' as const, x: -2.82, y: 0.50, z: -1.38, rotY: 0.65, rotZ: 0.02, w: 0.75, h: 0.96, d: 0.52, mat: canineEnamelMat },
      { id: '24', type: 'premolar' as const, x: 2.82, y: 0.50, z: -1.38, rotY: -0.65, rotZ: -0.02, w: 0.75, h: 0.96, d: 0.52, mat: canineEnamelMat },
      { id: '15', type: 'premolar' as const, x: -3.38, y: 0.56, z: -2.25, rotY: 0.82, rotZ: 0.01, w: 0.72, h: 0.88, d: 0.54, mat: canineEnamelMat },
      { id: '25', type: 'premolar' as const, x: 3.38, y: 0.56, z: -2.25, rotY: -0.82, rotZ: -0.01, w: 0.72, h: 0.88, d: 0.54, mat: canineEnamelMat },
    ];

    upperTeethDefs.forEach((def) => {
      const mesh = createAnatomicalTooth(def.type, def.w, def.h, def.d, def.mat);
      mesh.position.set(def.x, def.y, def.z);
      mesh.rotation.y = def.rotY;
      mesh.rotation.z = def.rotZ;
      mesh.name = `upper-${def.id}`;
      upperGroup.add(mesh);
    });

    // Upper Scalloped Gingiva (Gums)
    const upperGumCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.5, 0.95, -2.4),
      new THREE.Vector3(-2.8, 0.98, -1.4),
      new THREE.Vector3(-2.1, 1.02, -0.7),
      new THREE.Vector3(-1.3, 1.05, -0.25),
      new THREE.Vector3(-0.5, 1.12, 0.02),
      new THREE.Vector3(0.0, 0.92, 0.05), // Labial frenulum notch
      new THREE.Vector3(0.5, 1.12, 0.02),
      new THREE.Vector3(1.3, 1.05, -0.25),
      new THREE.Vector3(2.1, 1.02, -0.7),
      new THREE.Vector3(2.8, 0.98, -1.4),
      new THREE.Vector3(3.5, 0.95, -2.4),
    ]);
    const upperGumMesh = new THREE.Mesh(new THREE.TubeGeometry(upperGumCurve, 40, 0.38, 10, false), gumMaterial);
    upperGumMesh.position.y = 0.16;
    upperGroup.add(upperGumMesh);

    // -------------------------------------------------------------
    // LOWER DENTAL ARCH (Mandibular Teeth - "Parte de baixo da boca")
    // -------------------------------------------------------------
    const lowerGroup = new THREE.Group();
    mouthGroup.add(lowerGroup);

    // Lower Teeth Definitions (41, 31, 42, 32, 43, 33, 44, 34)
    const lowerTeethDefs = [
      { id: '41', type: 'lower_central' as const, x: -0.29, y: -0.85, z: -0.16, rotY: 0.02, rotZ: -0.015, w: 0.58, h: 1.02, d: 0.32, mat: lowerEnamelMat },
      { id: '31', type: 'lower_central' as const, x: 0.29, y: -0.85, z: -0.16, rotY: -0.02, rotZ: 0.015, w: 0.58, h: 1.02, d: 0.32, mat: lowerEnamelMat },
      { id: '42', type: 'lower_lateral' as const, x: -0.88, y: -0.82, z: -0.32, rotY: 0.15, rotZ: -0.02, w: 0.64, h: 1.05, d: 0.32, mat: lowerEnamelMat },
      { id: '32', type: 'lower_lateral' as const, x: 0.88, y: -0.82, z: -0.32, rotY: -0.15, rotZ: 0.02, w: 0.64, h: 1.05, d: 0.32, mat: lowerEnamelMat },
      { id: '43', type: 'lower_canine' as const, x: -1.55, y: -0.78, z: -0.65, rotY: 0.36, rotZ: -0.03, w: 0.74, h: 1.18, d: 0.38, mat: canineEnamelMat },
      { id: '33', type: 'lower_canine' as const, x: 1.55, y: -0.78, z: -0.65, rotY: -0.36, rotZ: 0.03, w: 0.74, h: 1.18, d: 0.38, mat: canineEnamelMat },
      { id: '44', type: 'premolar' as const, x: -2.25, y: -0.72, z: -1.25, rotY: 0.58, rotZ: -0.02, w: 0.70, h: 0.92, d: 0.48, mat: canineEnamelMat },
      { id: '34', type: 'premolar' as const, x: 2.25, y: -0.72, z: -1.25, rotY: -0.58, rotZ: 0.02, w: 0.70, h: 0.92, d: 0.48, mat: canineEnamelMat },
    ];

    lowerTeethDefs.forEach((def) => {
      const mesh = createAnatomicalTooth(def.type, def.w, def.h, def.d, def.mat);
      mesh.position.set(def.x, def.y, def.z);
      mesh.rotation.y = def.rotY;
      mesh.rotation.z = def.rotZ;
      mesh.name = `lower-${def.id}`;
      lowerGroup.add(mesh);
    });

    // Lower Scalloped Gingiva (Gums)
    const lowerGumCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.8, -1.28, -1.4),
      new THREE.Vector3(-2.1, -1.34, -0.7),
      new THREE.Vector3(-1.3, -1.38, -0.28),
      new THREE.Vector3(-0.5, -1.42, -0.12),
      new THREE.Vector3(0.0, -1.30, -0.10), // Lower frenulum
      new THREE.Vector3(0.5, -1.42, -0.12),
      new THREE.Vector3(1.3, -1.38, -0.28),
      new THREE.Vector3(2.1, -1.34, -0.7),
      new THREE.Vector3(2.8, -1.28, -1.4),
    ]);
    const lowerGumMesh = new THREE.Mesh(new THREE.TubeGeometry(lowerGumCurve, 32, 0.34, 10, false), gumMaterial);
    lowerGumMesh.position.y = -0.12;
    lowerGroup.add(lowerGumMesh);

    // Lower Lip Framing Mesh
    const lowerLipCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.2, -1.45, 0.6),
      new THREE.Vector3(-1.8, -1.75, 0.8),
      new THREE.Vector3(0.0, -1.85, 0.85),
      new THREE.Vector3(1.8, -1.75, 0.8),
      new THREE.Vector3(3.2, -1.45, 0.6),
    ]);
    const lipMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xb85062),
      roughness: 0.38,
      metalness: 0.05,
    });
    const lowerLipMesh = new THREE.Mesh(new THREE.TubeGeometry(lowerLipCurve, 24, 0.28, 10, false), lipMaterial);
    mouthGroup.add(lowerLipMesh);

    // -------------------------------------------------------------
    // 7. ORTHODONTIC APPLIANCE (Upper & Lower Brackets + Wires)
    // -------------------------------------------------------------
    const orthoGroup = new THREE.Group();
    mouthGroup.add(orthoGroup);
    orthoGroupRef.current = orthoGroup;

    const bracketMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xedf2f7),
      metalness: 0.95,
      roughness: 0.15,
    });
    const ligatureMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x0284c7), // Clinical dental blue elastic ligature
      roughness: 0.28,
    });

    // Upper brackets
    const upperWirePoints: THREE.Vector3[] = [];
    upperTeethDefs.slice(0, 6).forEach((tooth) => {
      const bracket = new THREE.Group();
      bracket.add(new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.24, 0.1), bracketMat));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 8, 16), ligatureMat);
      ring.position.z = 0.06;
      bracket.add(ring);
      bracket.position.set(tooth.x, tooth.y - 0.02, tooth.z + tooth.d * 0.46);
      bracket.rotation.y = tooth.rotY;
      orthoGroup.add(bracket);
      upperWirePoints.push(new THREE.Vector3(bracket.position.x, bracket.position.y, bracket.position.z + 0.06));
    });

    if (upperWirePoints.length >= 2) {
      upperWirePoints.sort((a, b) => a.x - b.x);
      const wireCurve = new THREE.CatmullRomCurve3(upperWirePoints);
      orthoGroup.add(new THREE.Mesh(new THREE.TubeGeometry(wireCurve, 32, 0.02, 8, false), bracketMat));
    }

    // Lower brackets
    const lowerWirePoints: THREE.Vector3[] = [];
    lowerTeethDefs.slice(0, 6).forEach((tooth) => {
      const bracket = new THREE.Group();
      bracket.add(new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 0.09), bracketMat));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.028, 8, 16), ligatureMat);
      ring.position.z = 0.05;
      bracket.add(ring);
      bracket.position.set(tooth.x, tooth.y + 0.02, tooth.z + tooth.d * 0.44);
      bracket.rotation.y = tooth.rotY;
      orthoGroup.add(bracket);
      lowerWirePoints.push(new THREE.Vector3(bracket.position.x, bracket.position.y, bracket.position.z + 0.05));
    });

    if (lowerWirePoints.length >= 2) {
      lowerWirePoints.sort((a, b) => a.x - b.x);
      const wireCurve = new THREE.CatmullRomCurve3(lowerWirePoints);
      orthoGroup.add(new THREE.Mesh(new THREE.TubeGeometry(wireCurve, 32, 0.018, 8, false), bracketMat));
    }

    // -------------------------------------------------------------
    // 8. VITA SHADE GUIDE SPECIMEN (Edge-to-Edge with Incisors)
    // -------------------------------------------------------------
    const vitaGroup = new THREE.Group();
    mouthGroup.add(vitaGroup);
    vitaGroupRef.current = vitaGroup;

    const vitaTabMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xf5e7cb), // VITA A2 ceramic shade tab
      roughness: 0.16,
      clearcoat: 0.92,
      transmission: 0.16,
      ior: 1.6,
    });
    const vitaTabMesh = createAnatomicalTooth('central', 0.9, 1.2, 0.35, vitaTabMat);
    vitaTabMesh.position.set(1.48, -0.05, 0.25);
    vitaTabMesh.rotation.y = -0.18;
    vitaGroup.add(vitaTabMesh);

    // Chrome handle for VITA tab
    const vitaHandleMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xdbe0e8),
      metalness: 0.92,
      roughness: 0.2,
    });
    const vitaHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.9, 12), vitaHandleMat);
    vitaHandle.position.set(1.48, -1.15, 0.25);
    vitaGroup.add(vitaHandle);

    // -------------------------------------------------------------
    // 9. DYNAMIC 3D LIGHTING RIG (D-Lux Twin, Studio, Ring, Off)
    // -------------------------------------------------------------
    const lightsGroup = new THREE.Group();
    scene.add(lightsGroup);
    lightsGroupRef.current = lightsGroup;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    ambientLight.name = 'ambient';
    lightsGroup.add(ambientLight);

    const flashLeft = new THREE.DirectionalLight(0xffffff, 2.0);
    flashLeft.name = 'flashLeft';
    flashLeft.position.set(-4.5, 1.2, 4.0);
    lightsGroup.add(flashLeft);

    const flashRight = new THREE.DirectionalLight(0xffffff, 2.0);
    flashRight.name = 'flashRight';
    flashRight.position.set(4.5, 1.2, 4.0);
    lightsGroup.add(flashRight);

    const centerFill = new THREE.PointLight(0xffffff, 0.6, 14);
    centerFill.name = 'centerFill';
    centerFill.position.set(0, 0, 4.8);
    lightsGroup.add(centerFill);

    // Mouse tilt tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = nx * 0.12; // Max tilt 7 degrees
      mouseRef.current.targetY = ny * 0.08;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0 && cameraRef.current && rendererRef.current && renderTargetRef.current && dofMaterialRef.current) {
          cameraRef.current.aspect = w / h;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(w, h);
          renderTargetRef.current.setSize(w, h);
          dofMaterialRef.current.uniforms.uResolution.value.set(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // 10. Animation & Render Loop with Depth-of-Field Pass
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      const elapsed = (Date.now() - startTimeRef.current) * 0.001;

      // Parallax smooth interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      if (mouthGroupRef.current) {
        // Natural micro-breathing motion of living oral patient
        const breath = Math.sin(elapsed * 1.3) * 0.01;
        mouthGroupRef.current.rotation.y = mouseRef.current.x;
        mouthGroupRef.current.rotation.x = -mouseRef.current.y + breath;
        mouthGroupRef.current.position.y = breath * 0.4;
      }

      if (
        rendererRef.current &&
        sceneRef.current &&
        cameraRef.current &&
        renderTargetRef.current &&
        postSceneRef.current &&
        postCameraRef.current &&
        dofMaterialRef.current
      ) {
        // Step 1: Render 3D Dental Scene into RenderTarget (capturing Color + Depth)
        rendererRef.current.setRenderTarget(renderTargetRef.current);
        rendererRef.current.render(sceneRef.current, cameraRef.current);

        // Step 2: Render Depth-of-Field (DoF) post-processing pass to canvas screen
        dofMaterialRef.current.uniforms.tColor.value = renderTargetRef.current.texture;
        dofMaterialRef.current.uniforms.tDepth.value = renderTargetRef.current.depthTexture;
        dofMaterialRef.current.uniforms.uFocalDepth.value = cameraRef.current.position.z;

        rendererRef.current.setRenderTarget(null);
        rendererRef.current.render(postSceneRef.current, postCameraRef.current);
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (renderTargetRef.current) renderTargetRef.current.dispose();
      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  // Update dynamic properties when props change
  useEffect(() => {
    // 1. Update Camera FOV & Distance smoothly based on focal length
    if (cameraRef.current) {
      const specs = getCameraSpecs(focalLength);
      cameraRef.current.fov = specs.fov;
      cameraRef.current.position.z = specs.z;
      cameraRef.current.updateProjectionMatrix();
    }

    // 2. Update Depth-of-Field Aperture Blur Factor
    if (dofMaterialRef.current && cameraRef.current) {
      dofMaterialRef.current.uniforms.uApertureBlur.value = getApertureBlurAmount(aperture);
      dofMaterialRef.current.uniforms.uFocalDepth.value = cameraRef.current.position.z;
    }

    // 3. Update Subject Mode visibility
    if (orthoGroupRef.current) {
      orthoGroupRef.current.visible = subjectMode === 'ortho';
    }
    if (vitaGroupRef.current) {
      vitaGroupRef.current.visible = subjectMode === 'vita';
    }

    // 4. Update 3D Lighting & D-Lux Diffuser System
    if (lightsGroupRef.current && rendererRef.current) {
      const wbColor = getWBColor(whiteBalance);
      const flashLeft = lightsGroupRef.current.getObjectByName('flashLeft') as THREE.DirectionalLight | null;
      const flashRight = lightsGroupRef.current.getObjectByName('flashRight') as THREE.DirectionalLight | null;
      const centerFill = lightsGroupRef.current.getObjectByName('centerFill') as THREE.PointLight | null;
      const ambient = lightsGroupRef.current.getObjectByName('ambient') as THREE.AmbientLight | null;

      // Base exposure multiplier from EV diff
      const exposureMult = Math.max(0.15, Math.min(2.5, 1.0 + evDiff * 0.28));
      rendererRef.current.toneMappingExposure = exposureMult;

      if (ambient) {
        ambient.color = wbColor;
        ambient.intensity = flashMode === 'off' ? 0.65 : 0.22;
      }

      if (flashLeft && flashRight && centerFill) {
        flashLeft.color = wbColor;
        flashRight.color = wbColor;
        centerFill.color = wbColor;

        switch (flashMode) {
          case 'twin':
            // Twin Flash + D-Lux MF-12: Bilateral soft key lights at 45°
            flashLeft.intensity = 2.2;
            flashLeft.position.set(-4.5, 1.0, 4.0);
            flashRight.intensity = 2.2;
            flashRight.position.set(4.5, 1.0, 4.0);
            centerFill.intensity = 0.4;
            break;

          case 'studio':
            // Studio Softbox / Bouncers D-Lux: Long vertical specular line angles
            flashLeft.intensity = 1.9;
            flashLeft.position.set(-3.2, 2.8, 4.4);
            flashRight.intensity = 1.9;
            flashRight.position.set(3.2, 2.8, 4.4);
            centerFill.intensity = 0.8;
            break;

          case 'ring':
            // Ring Flash + D-Lux YN-14: Uniform frontal shadowless illumination
            flashLeft.intensity = 1.0;
            flashLeft.position.set(-1.2, 0, 4.2);
            flashRight.intensity = 1.0;
            flashRight.position.set(1.2, 0, 4.2);
            centerFill.intensity = 2.0;
            break;

          case 'off':
            // Sem Flash: Warm yellow clinic ceiling light, deep shadows
            flashLeft.intensity = 0.15;
            flashLeft.color = new THREE.Color(0xffcca0); // 3200K clinic lamp
            flashRight.intensity = 0.15;
            flashRight.color = new THREE.Color(0xffcca0);
            centerFill.intensity = 0.1;
            break;
        }
      }
    }
  }, [focalLength, aperture, flashMode, whiteBalance, subjectMode, evDiff]);

  // Motion blur and exposure contrast post-processing
  const filterString = [
    motionBlurPx > 1 ? `blur(${Math.min(motionBlurPx * 0.8, 8)}px)` : '',
    evDiff !== 0 ? `contrast(${Math.max(0.7, 1 + evDiff * 0.08)})` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="relative w-full h-full min-h-[280px] overflow-hidden flex items-center justify-center bg-[#06070a] select-none">
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing transition-filter duration-300"
        style={{
          filter: filterString || undefined,
        }}
      />

      {/* FLASH CURTAIN DEFECT ARTIFACT (> 1/250s) */}
      {hasFlashCurtainArtifact && (
        <div className="absolute inset-x-0 bottom-0 top-[52%] bg-black/98 z-30 pointer-events-none flex items-center justify-center border-t-4 border-rose-500/80">
          <div className="bg-rose-950/90 text-rose-200 border border-rose-500/50 px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-2 shadow-lg">
            <span>⚠️ Sombra da 2ª Cortina do Obturador (Velocidade &gt; Sincronismo X-Sync)</span>
          </div>
        </div>
      )}

      {/* AMBIENT LIGHT CONTAMINATION TINT (YELLOWISH ROOM LIGHT AT SLOW SHUTTER) */}
      {ambientLightContamination > 0.1 && (
        <div
          className="absolute inset-0 pointer-events-none z-10 mix-blend-color"
          style={{
            backgroundColor: '#f59e0b',
            opacity: Math.min(0.45, ambientLightContamination * 0.5),
          }}
        />
      )}

      {/* DIGITAL SENSOR NOISE / GRAIN (HIGH ISO) */}
      {noiseOpacity > 0.05 && (
        <div
          className="absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,${noiseOpacity * 0.4}) 1px, transparent 1px)`,
            backgroundSize: '4px 4px',
          }}
        />
      )}

      {/* FOCUS PEAKING OVERLAY */}
      {showFocusPeaking && (
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
          <div className="w-28 h-24 border-2 border-emerald-400/80 rounded-lg shadow-[0_0_12px_rgba(34,197,94,0.6)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          </div>
        </div>
      )}

      {/* DENTAL OCCLUSAL & COMPOSITION GRID */}
      {showGrid && (
        <div className="absolute inset-0 pointer-events-none z-10 grid grid-cols-3 grid-rows-3 opacity-30 border border-sky-400/40">
          <div className="border-r border-b border-sky-400/30"></div>
          <div className="border-r border-b border-sky-400/30 relative">
            {/* Dental Midline */}
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-rose-500/80 -translate-x-1/2"></div>
          </div>
          <div className="border-b border-sky-400/30"></div>
          <div className="border-r border-b border-sky-400/30"></div>
          <div className="border-r border-b border-sky-400/30"></div>
          <div className="border-b border-sky-400/30"></div>
          <div className="border-r border-b border-sky-400/30"></div>
          <div className="border-r border-b border-sky-400/30"></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

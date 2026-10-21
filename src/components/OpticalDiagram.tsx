import React from 'react';
import { type CameraSettings, LENS_SPECS } from '../types/camera';
import { Sparkles, ArrowRightLeft, Ruler, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface OpticalDiagramProps {
  settings: CameraSettings;
}

export const OpticalDiagram: React.FC<OpticalDiagramProps> = ({ settings }) => {
  const { focalLength, aperture, flashMode } = settings;
  const lens = LENS_SPECS[focalLength];

  // Camera horizontal position mapped to working distance:
  // 60mm (15cm) -> closer to patient (e.g. x = 260)
  // 85mm (22cm) -> x = 220
  // 100mm (32cm) -> optimal (e.g. x = 160)
  // 180mm (55cm) -> further away (e.g. x = 80)
  const cameraXMap: Record<number, number> = {
    60: 250,
    85: 205,
    100: 155,
    180: 75,
  };

  const cameraX = cameraXMap[focalLength] || 155;

  // Aperture blade opening radius (for visual ray diagram)
  // f/2.8 -> large radius (18px)
  // f/22 -> tiny pinhole (3.5px)
  const apertureRadiusMap: Record<number, number> = {
    2.8: 18,
    4: 15,
    5.6: 12,
    8: 9,
    11: 7,
    16: 5,
    22: 3.5,
    32: 2.2,
  };
  const apertureRadius = apertureRadiusMap[aperture] || 5;

  // Depth of field wedge width on teeth (mm)
  // At f/2.8: ~0.8mm (razor thin line)
  // At f/22: ~8mm (broad green wedge covering all front teeth)
  const dofWidthMap: Record<number, number> = {
    2.8: 6,
    4: 10,
    5.6: 16,
    8: 24,
    11: 34,
    16: 48,
    22: 65,
    32: 80,
  };
  const dofVisualWidth = dofWidthMap[aperture] || 30;

  // Target teeth coordinate
  const patientTeethX = 490;
  const patientTeethY = 135;

  return (
    <div className="flex flex-col bg-[#16181f] rounded-xl border border-[#272a36] p-3 shadow-sm">
      <div className="flex items-center justify-between mb-2.5 border-b border-[#232733] pb-2">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-[#232733] text-amber-400">
            <ArrowRightLeft className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white">Geometria Óptica & Distância de Trabalho</h3>
            <p className="text-[10px] text-zinc-400">Posição ergonômica da câmera em relação à boca do paciente</p>
          </div>
        </div>

        {/* Ergonomic pill badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border bg-zinc-950">
          {focalLength === 100 ? (
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Ergonomia Perfeita (32cm)
            </span>
          ) : focalLength === 60 ? (
            <span className="flex items-center gap-1 text-amber-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              Muito Próximo (15cm)
            </span>
          ) : (
            <span className="flex items-center gap-1 text-sky-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Campo Seguro (55cm)
            </span>
          )}
        </div>
      </div>

      {/* Interactive Optical Schematic SVG */}
      <div className="relative w-full h-[220px] bg-zinc-950 rounded-xl border border-zinc-850 overflow-hidden flex items-center justify-center">
        {/* Soft studio grid background */}
        <div className="absolute inset-0 lcd-grid opacity-30"></div>

        <svg
          viewBox="0 0 600 220"
          className="w-full h-full max-w-[650px] select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Flash Light Cone Gradient */}
            <linearGradient id="flashConeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
            </linearGradient>

            {/* Depth of Field Sharp Zone Gradient */}
            <linearGradient id="dofSharpZoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="20%" stopColor="#10b981" stopOpacity="0.35" />
              <stop offset="80%" stopColor="#10b981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>

            {/* Optical Ray Gradient */}
            <linearGradient id="opticalRayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* 1. DISTANCE RULER & SCALE (Between Camera Lens and Patient) */}
          <g transform="translate(0, 190)">
            {/* Measurement Line */}
            <line
              x1={cameraX + 85}
              y1="0"
              x2={patientTeethX}
              y2="0"
              stroke="#64748b"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              className="transition-all duration-500 ease-out"
            />
            {/* End tick at lens */}
            <line
              x1={cameraX + 85}
              y1="-6"
              x2={cameraX + 85}
              y2="6"
              stroke="#64748b"
              strokeWidth="2"
              className="transition-all duration-500 ease-out"
            />
            {/* End tick at patient mouth */}
            <line x1={patientTeethX} y1="-6" x2={patientTeethX} y2="6" stroke="#64748b" strokeWidth="2" />

            {/* Distance Callout Tag */}
            <rect
              x={(cameraX + 85 + patientTeethX) / 2 - 42}
              y="-12"
              width="84"
              height="20"
              rx="4"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1.2"
              className="transition-all duration-500 ease-out"
            />
            <text
              x={(cameraX + 85 + patientTeethX) / 2}
              y="2"
              textAnchor="middle"
              fill="#38bdf8"
              fontSize="11"
              fontWeight="bold"
              fontFamily="monospace"
              className="transition-all duration-500 ease-out"
            >
              {lens.workingDistanceCm} cm
            </text>
          </g>

          {/* 2. OPTICAL LIGHT RAYS (Between Lens and Tooth) */}
          {flashMode !== 'off' && (
            <g opacity="0.8">
              {/* Top Flash Ray */}
              <polygon
                points={`
                  ${cameraX + 85},${patientTeethY - 35} 
                  ${patientTeethX},${patientTeethY - 20} 
                  ${patientTeethX},${patientTeethY + 20} 
                  ${cameraX + 85},${patientTeethY + 35}
                `}
                fill="url(#flashConeGrad)"
                className="transition-all duration-500 ease-out"
              />
            </g>
          )}

          {/* Central Optical Axis Line */}
          <line
            x1={cameraX}
            y1={patientTeethY}
            x2={patientTeethX}
            y2={patientTeethY}
            stroke="#ef4444"
            strokeWidth="0.8"
            strokeDasharray="5 3"
            opacity="0.6"
            className="transition-all duration-500 ease-out"
          />

          {/* 3. PATIENT & INTRAORAL TARGET (Right side) */}
          <g id="patient-side-view" transform={`translate(${patientTeethX}, 60)`}>
            {/* Silhouette of Lips & Patient Profile */}
            <path
              d="M 50 10 C 25 30, 10 50, 0 75 C 10 85, 20 85, 0 95 C 15 125, 35 140, 50 150"
              stroke="#475569"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Clear Lip Retractor (Afastador Labial) */}
            <path
              d="M 5 62 C -15 62, -15 88, 5 88"
              stroke="#38bdf8"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.75"
            />

            {/* Target Teeth (Incisor side-profile) */}
            <g transform="translate(0, 68)">
              {/* Upper Central Incisor */}
              <path
                d="M 0 0 C 8 2, 10 10, 8 16 L 2 16 C -2 10, -3 2, 0 0 Z"
                fill="#fefcf0"
                stroke="#d4be88"
                strokeWidth="1.2"
              />
              {/* Gingival Zenith */}
              <path d="M 0 0 C 4 -6, 12 -4, 15 2" stroke="#e11d48" strokeWidth="2.5" fill="none" />

              {/* DEPTH OF FIELD VISUAL ZONE ON TEETH */}
              {/* Green shaded band representing sharp zone */}
              <rect
                x={-dofVisualWidth / 2 + 4}
                y="-18"
                width={dofVisualWidth}
                height="48"
                rx="3"
                fill="url(#dofSharpZoneGrad)"
                stroke="#10b981"
                strokeWidth="1.2"
                strokeDasharray="3 2"
                className="transition-all duration-400 ease-out"
              />
              <text
                x="4"
                y="-23"
                textAnchor="middle"
                fill="#10b981"
                fontSize="9"
                fontWeight="bold"
                fontFamily="monospace"
              >
                DOF: {aperture >= 22 ? '~8mm (Total)' : aperture <= 4 ? '<1mm (Raso)' : '~3mm'}
              </text>
            </g>

            <text x="50" y="80" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
              Boca / Paciente
            </text>
          </g>

          {/* 4. DENTIST'S CAMERA RIG (Left side - Smoothly moves based on working distance!) */}
          <g
            id="camera-rig"
            transform={`translate(${cameraX}, 75)`}
            className="transition-transform duration-500 ease-out"
          >
            {/* Camera Body (DSLR / Mirrorless body) */}
            <rect x="0" y="20" width="48" height="70" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <rect x="6" y="10" width="22" height="12" rx="2" fill="#334155" /> {/* Viewfinder prism bump */}
            <circle cx="15" cy="55" r="8" fill="#0f172a" stroke="#64748b" strokeWidth="1" /> {/* Grip dial */}

            {/* Lens Barrel (Macro Lens extending to the right) */}
            {/* Base mount */}
            <rect x="48" y="32" width="12" height="46" rx="2" fill="#334155" stroke="#475569" strokeWidth="1" />
            {/* Main Barrel */}
            <rect x="60" y="35" width="25" height="40" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            {/* Rubber focus ring ridges */}
            <line x1="66" y1="36" x2="66" y2="74" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
            <line x1="72" y1="36" x2="72" y2="74" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />

            {/* Front Lens Element */}
            <path d="M 85 36 C 89 45, 89 65, 85 74 Z" fill="#0284c7" opacity="0.8" />

            {/* APERTURE DIAPHRAGM BLADES (Interactive animated opening!) */}
            <g transform="translate(72, 55)">
              <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#64748b" strokeWidth="1.2" />
              {/* Dynamic Aperture hole */}
              <circle
                cx="0"
                cy="0"
                r={apertureRadius}
                fill="#38bdf8"
                opacity="0.9"
                className="transition-all duration-300 ease-out"
              />
              <text x="0" y="26" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">
                f/{aperture}
              </text>
            </g>

            {/* FLASH MOUNT & STROBES WITH D-LUX DIFFUSERS */}
            {flashMode === 'twin' && (
              <g id="twin-flash-rig">
                {/* Twin Flash Bracket Arms */}
                <path d="M 85 36 L 96 15" stroke="#64748b" strokeWidth="2.5" />
                <path d="M 85 74 L 96 95" stroke="#64748b" strokeWidth="2.5" />

                {/* Top Flash Head + D-Lux Diffuser */}
                <rect x="94" y="8" width="16" height="14" rx="2" fill="#f8fafc" stroke="#334155" strokeWidth="1.2" />
                <ellipse cx="102" cy="15" rx="3" ry="5" fill="#38bdf8" />
                {/* D-Lux Diffuser Bouncer Cap */}
                <rect x="109" y="5" width="8" height="20" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
                <text x="120" y="14" fill="#fbbf24" fontSize="7" fontWeight="bold" fontFamily="monospace">D-LUX MF12</text>

                {/* Bottom Flash Head + D-Lux Diffuser */}
                <rect x="94" y="88" width="16" height="14" rx="2" fill="#f8fafc" stroke="#334155" strokeWidth="1.2" />
                <ellipse cx="102" cy="95" rx="3" ry="5" fill="#38bdf8" />
                <rect x="109" y="85" width="8" height="20" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
                <text x="120" y="94" fill="#fbbf24" fontSize="7" fontWeight="bold" fontFamily="monospace">D-LUX MF12</text>
              </g>
            )}

            {flashMode === 'ring' && (
              <g id="ring-flash-rig">
                {/* Ring Flash Circular Head around lens + D-Lux Ring Diffuser */}
                <ellipse cx="88" cy="55" rx="5" ry="24" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
                <ellipse cx="91" cy="55" rx="3" ry="26" fill="none" stroke="#fbbf24" strokeWidth="1.8" />
                <text x="96" y="58" fill="#fbbf24" fontSize="7" fontWeight="bold" fontFamily="monospace">D-LUX RING</text>
              </g>
            )}

            {flashMode === 'studio' && (
              <g id="studio-flash-rig">
                {/* Studio Softbox Bracket & Heads (Bouncers / Stripboxes) */}
                {/* Upper Softbox */}
                <g transform="translate(85, -20)">
                  <polygon points="0,30 24,0 38,0 20,40" fill="#334155" stroke="#64748b" strokeWidth="1.2" />
                  <rect x="22" y="-2" width="16" height="38" rx="2" fill="#f8fafc" stroke="#a855f7" strokeWidth="1.5" opacity="0.95" />
                  <line x1="30" y1="-2" x2="30" y2="36" stroke="#c084fc" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="44" y="18" fill="#c084fc" fontSize="7" fontWeight="bold" fontFamily="monospace">SOFTBOX</text>
                </g>
                {/* Lower Softbox */}
                <g transform="translate(85, 75)">
                  <polygon points="0,10 20,0 38,40 24,40" fill="#334155" stroke="#64748b" strokeWidth="1.2" />
                  <rect x="22" y="4" width="16" height="38" rx="2" fill="#f8fafc" stroke="#a855f7" strokeWidth="1.5" opacity="0.95" />
                  <line x1="30" y1="4" x2="30" y2="42" stroke="#c084fc" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="44" y="24" fill="#c084fc" fontSize="7" fontWeight="bold" fontFamily="monospace">SOFTBOX</text>
                </g>
              </g>
            )}

            {/* Lens Tag */}
            <text x="24" y="-4" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
              {lens.label}
            </text>
          </g>
        </svg>
      </div>

      {/* Clinical Optical Explanation Box */}
      <div className="mt-2.5 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
        <div className="bg-[#1b1d25] p-2 rounded-lg border border-[#272a36]">
          <span className="font-semibold text-zinc-200 flex items-center gap-1.5 mb-0.5 text-[11px]">
            <Ruler className="w-3 h-3 text-amber-400" />
            Distância de Trabalho ({lens.workingDistanceCm} cm):
          </span>
          <p className="text-zinc-400 text-[11px] leading-relaxed">
            {lens.clinicalAdvantage}
          </p>
        </div>

        <div className="bg-[#1b1d25] p-2 rounded-lg border border-[#272a36]">
          <span className="font-semibold text-zinc-200 flex items-center gap-1.5 mb-0.5 text-[11px]">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            Profundidade de Campo (f/{aperture}):
          </span>
          <p className="text-zinc-400 text-[11px] leading-relaxed">
            {aperture >= 22
              ? 'Abertura f/22 cobre incisivos e caninos com nitidez máxima no plano focal 1:1.'
              : aperture <= 5.6
              ? 'Abertura muito aberta: apenas a face vestibular do incisivo central fica nítida (< 1.5mm).'
              : 'Abertura intermediária ideal para fotos estéticas do sorriso e lábios.'}
          </p>
        </div>
      </div>
    </div>
  );
};

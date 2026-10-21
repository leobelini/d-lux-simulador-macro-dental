import React from 'react';
import { type SubjectMode, type FocalLength } from '../types/camera';

interface DentalSubjectCanvasProps {
  focalLength: FocalLength;
  dofBlurCaninesPx: number;
  motionBlurPx: number;
  noiseOpacity: number;
  ambientLightContamination: number;
  hasFlashCurtainArtifact: boolean;
  evDiff: number;
  showFocusPeaking: boolean;
  showGrid: boolean;
  subjectMode: SubjectMode;
}

export const DentalSubjectCanvas: React.FC<DentalSubjectCanvasProps> = ({
  focalLength,
  dofBlurCaninesPx,
  motionBlurPx,
  noiseOpacity,
  ambientLightContamination,
  hasFlashCurtainArtifact,
  evDiff,
  showFocusPeaking,
  showGrid,
  subjectMode,
}) => {
  // Focal length determines optical framing / crop / perspective scale
  // 60mm: scale 0.88 (wider view, shows more retractor and lips, slightly curved)
  // 85mm: scale 0.95
  // 100mm: scale 1.05 (ideal 1:1 macro framing of upper incisors)
  // 180mm: scale 1.28 (tight close-up on central incisors, compressed)
  const scaleMap: Record<FocalLength, number> = {
    60: 0.88,
    85: 0.96,
    100: 1.08,
    180: 1.32,
  };

  const currentScale = scaleMap[focalLength] || 1;

  // Exposure brightness calculation: -3 (very dark) to +3 (washed out)
  // evDiff = 0 is normal exposure (brightness 1.0)
  const brightness = Math.max(0.1, Math.min(2.2, 1 + evDiff * 0.28));
  const contrast = Math.max(0.7, Math.min(1.4, 1 + evDiff * 0.08));

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#090b10] select-none">
      {/* SVG Canvas with dynamic filters */}
      <svg
        className="w-full h-full max-w-[850px] max-h-[580px] transition-transform duration-500 ease-out"
        style={{
          transform: `scale(${currentScale})`,
          filter: `brightness(${brightness}) contrast(${contrast})`,
        }}
        viewBox="0 0 800 520"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dynamic SVG Motion Blur Filter */}
          <filter id="motionBlurFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={`${motionBlurPx} 0`} />
          </filter>

          {/* Grain / Noise Filter */}
          <filter id="noiseFilter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.5   0 0 0 0 0.5   0 0 0 0 0.5  0 0 0 1 0" />
          </filter>

          {/* Gradients for Enamel Translucency & Realistic Tooth Anatomy */}
          {/* Central Incisor Gradient */}
          <linearGradient id="centralIncisorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7e6b8" /> {/* Cervical warm dentin tint */}
            <stop offset="35%" stopColor="#fefcf0" /> {/* Body enamel */}
            <stop offset="78%" stopColor="#fcfaff" /> {/* Middle third */}
            <stop offset="92%" stopColor="#dbe8f5" /> {/* Opalescent blue incisal halo */}
            <stop offset="100%" stopColor="#f3f5f8" /> {/* Incisal edge border */}
          </linearGradient>

          {/* Lateral Incisor Gradient */}
          <linearGradient id="lateralIncisorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5e1a8" />
            <stop offset="40%" stopColor="#fefaf0" />
            <stop offset="82%" stopColor="#f6f6fc" />
            <stop offset="93%" stopColor="#d5e4f2" />
            <stop offset="100%" stopColor="#edf1f6" />
          </linearGradient>

          {/* Canine Gradient (more saturated yellow/warm dentin) */}
          <linearGradient id="canineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#edd08a" />
            <stop offset="45%" stopColor="#fcebc2" />
            <stop offset="85%" stopColor="#f7f2dd" />
            <stop offset="100%" stopColor="#e8e8ed" />
          </linearGradient>

          {/* Premolar Gradient (receding shadow) */}
          <linearGradient id="premolarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cca965" />
            <stop offset="50%" stopColor="#eedab0" />
            <stop offset="100%" stopColor="#d0d0d8" />
          </linearGradient>

          {/* Gingiva / Gum Gradient */}
          <linearGradient id="gumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9a3449" />
            <stop offset="40%" stopColor="#cb5971" />
            <stop offset="80%" stopColor="#dd788c" />
            <stop offset="100%" stopColor="#e995a5" />
          </linearGradient>

          {/* Lower Lip Gradient */}
          <linearGradient id="lipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3d151e" />
            <stop offset="45%" stopColor="#752e3c" />
            <stop offset="100%" stopColor="#481822" />
          </linearGradient>

          {/* VITA Shade Tab Ceramic Gradient (A2) */}
          <linearGradient id="vitaTabGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f2cca0" />
            <stop offset="35%" stopColor="#fff3d9" />
            <stop offset="85%" stopColor="#f9f9fe" />
            <stop offset="94%" stopColor="#d0e2f2" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Orthodontic Bracket Metallic Shimmer */}
          <linearGradient id="bracketMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="40%" stopColor="#64748b" />
            <stop offset="60%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Archwire Silver */}
          <linearGradient id="archwireMetal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>

        {/* Motion blur wrapping group */}
        <g filter={motionBlurPx > 0.5 ? 'url(#motionBlurFilter)' : undefined}>
          
          {/* Deep Oral Cavity Background (Black contrastor effect) */}
          <rect x="0" y="0" width="800" height="520" fill="#0c0709" />
          <ellipse cx="400" cy="275" rx="350" ry="170" fill="#140b10" />

          {/* 1. LAYER 3: Background Teeth (Premolars) - Affected deeply by Depth of Field */}
          <g
            id="layer-premolars"
            style={{
              filter: dofBlurCaninesPx > 0 ? `blur(${dofBlurCaninesPx * 1.3}px)` : 'none',
              transition: 'filter 0.3s ease',
            }}
          >
            {/* Upper Right 1st Premolar (14) */}
            <path
              d="M 175 220 Q 185 285 200 310 Q 220 300 230 240 Q 210 205 175 220 Z"
              fill="url(#premolarGrad)"
              opacity="0.85"
            />
            {/* Upper Left 1st Premolar (24) */}
            <path
              d="M 625 220 Q 615 285 600 310 Q 580 300 570 240 Q 590 205 625 220 Z"
              fill="url(#premolarGrad)"
              opacity="0.85"
            />
          </g>

          {/* 2. LAYER 2: Middle Depth Teeth (Canines 13 & 23) - Affected by DoF */}
          <g
            id="layer-canines"
            style={{
              filter: dofBlurCaninesPx > 0 ? `blur(${dofBlurCaninesPx}px)` : 'none',
              transition: 'filter 0.3s ease',
            }}
          >
            {/* Upper Right Canine (Tooth 13) */}
            <g id="tooth-13">
              <path
                d="M 220 205 C 225 260, 235 320, 260 338 C 275 325, 290 260, 295 198 C 265 190, 235 192, 220 205 Z"
                fill="url(#canineGrad)"
                stroke="#d4be88"
                strokeWidth="1.2"
              />
              {/* Canine Cusp Highlight */}
              <path
                d="M 245 230 Q 255 295 260 332"
                stroke="#fff8e7"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.75"
              />
              <path
                d="M 252 245 Q 258 290 260 325"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            </g>

            {/* Upper Left Canine (Tooth 23) */}
            <g id="tooth-23">
              <path
                d="M 580 205 C 575 260, 565 320, 540 338 C 525 325, 510 260, 505 198 C 535 190, 565 192, 580 205 Z"
                fill="url(#canineGrad)"
                stroke="#d4be88"
                strokeWidth="1.2"
              />
              {/* Canine Cusp Highlight */}
              <path
                d="M 555 230 Q 545 295 540 332"
                stroke="#fff8e7"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.75"
              />
              <path
                d="M 548 245 Q 542 290 540 325"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            </g>
          </g>

          {/* 3. LAYER 1: Lateral Incisors (12 & 22) - Slight DoF blur at f/2.8 */}
          <g
            id="layer-laterals"
            style={{
              filter: dofBlurCaninesPx > 0 ? `blur(${dofBlurCaninesPx * 0.45}px)` : 'none',
              transition: 'filter 0.3s ease',
            }}
          >
            {/* Upper Right Lateral Incisor (Tooth 12) */}
            <g id="tooth-12">
              <path
                d="M 288 192 C 285 245, 290 310, 300 330 C 315 334, 345 332, 355 322 C 352 265, 348 200, 335 186 C 315 182, 298 185, 288 192 Z"
                fill="url(#lateralIncisorGrad)"
                stroke="#e2d6b5"
                strokeWidth="1.2"
              />
              {/* Incisal Translucency Halo */}
              <path
                d="M 302 322 C 318 327, 342 325, 352 316 C 348 308, 308 312, 302 322 Z"
                fill="#b8d4ed"
                opacity="0.6"
              />
              {/* Specular Flash Reflection (Twin Flash Highlight) */}
              <ellipse cx="318" cy="245" rx="3.5" ry="18" fill="#ffffff" opacity="0.8" />
              <ellipse cx="338" cy="248" rx="2.5" ry="15" fill="#ffffff" opacity="0.6" />
            </g>

            {/* Upper Left Lateral Incisor (Tooth 22) */}
            <g id="tooth-22">
              <path
                d="M 512 192 C 515 245, 510 310, 500 330 C 485 334, 455 332, 445 322 C 448 265, 452 200, 465 186 C 485 182, 502 185, 512 192 Z"
                fill="url(#lateralIncisorGrad)"
                stroke="#e2d6b5"
                strokeWidth="1.2"
              />
              {/* Incisal Translucency Halo */}
              <path
                d="M 498 322 C 482 327, 458 325, 448 316 C 452 308, 492 312, 498 322 Z"
                fill="#b8d4ed"
                opacity="0.6"
              />
              {/* Specular Flash Reflection */}
              <ellipse cx="482" cy="245" rx="3.5" ry="18" fill="#ffffff" opacity="0.8" />
              <ellipse cx="462" cy="248" rx="2.5" ry="15" fill="#ffffff" opacity="0.6" />
            </g>
          </g>

          {/* 4. LAYER 0: Central Incisors (11 & 21) - Primary Focal Plane (Always Sharp) */}
          <g id="layer-centrals">
            {/* Upper Right Central Incisor (Tooth 11) */}
            <g id="tooth-11">
              <path
                d="M 345 182 C 346 230, 342 295, 342 342 C 360 348, 385 348, 397 344 C 397 285, 395 210, 390 178 C 375 174, 355 174, 345 182 Z"
                fill="url(#centralIncisorGrad)"
                stroke="#ddd0b0"
                strokeWidth="1.2"
              />
              {/* Enamel Developmental Grooves (Textura de Periquimáceas) */}
              <path d="M 360 210 Q 361 270 358 310" stroke="#ebdcb9" strokeWidth="1.5" opacity="0.5" />
              <path d="M 380 205 Q 382 272 381 315" stroke="#ebdcb9" strokeWidth="1.5" opacity="0.5" />

              {/* Incisal Halo Opalescence (Azul/Translucidez natural) */}
              <path
                d="M 345 334 C 362 342, 382 342, 395 338 C 394 328, 347 325, 345 334 Z"
                fill="#a3c9ea"
                opacity="0.65"
              />
              {/* Incisal Mamelon Lobes */}
              <ellipse cx="355" cy="326" rx="4" ry="7" fill="#fcf9ec" opacity="0.85" />
              <ellipse cx="370" cy="328" rx="4" ry="8" fill="#fcf9ec" opacity="0.85" />
              <ellipse cx="386" cy="327" rx="4" ry="7" fill="#fcf9ec" opacity="0.85" />

              {/* Specular Twin Flash Highlights */}
              <ellipse cx="358" cy="245" rx="5" ry="32" fill="#ffffff" opacity="0.85" />
              <ellipse cx="380" cy="248" rx="4" ry="30" fill="#ffffff" opacity="0.75" />
            </g>

            {/* Upper Left Central Incisor (Tooth 21) */}
            <g id="tooth-21">
              <path
                d="M 455 182 C 454 230, 458 295, 458 342 C 440 348, 415 348, 403 344 C 403 285, 405 210, 410 178 C 425 174, 445 174, 455 182 Z"
                fill="url(#centralIncisorGrad)"
                stroke="#ddd0b0"
                strokeWidth="1.2"
              />
              {/* Enamel Grooves */}
              <path d="M 440 210 Q 439 270 442 310" stroke="#ebdcb9" strokeWidth="1.5" opacity="0.5" />
              <path d="M 420 205 Q 418 272 419 315" stroke="#ebdcb9" strokeWidth="1.5" opacity="0.5" />

              {/* Incisal Halo */}
              <path
                d="M 455 334 C 438 342, 418 342, 405 338 C 406 328, 453 325, 455 334 Z"
                fill="#a3c9ea"
                opacity="0.65"
              />
              {/* Mamelon Lobes */}
              <ellipse cx="445" cy="326" rx="4" ry="7" fill="#fcf9ec" opacity="0.85" />
              <ellipse cx="430" cy="328" rx="4" ry="8" fill="#fcf9ec" opacity="0.85" />
              <ellipse cx="414" cy="327" rx="4" ry="7" fill="#fcf9ec" opacity="0.85" />

              {/* Specular Flash Highlights */}
              <ellipse cx="442" cy="245" rx="5" ry="32" fill="#ffffff" opacity="0.85" />
              <ellipse cx="420" cy="248" rx="4" ry="30" fill="#ffffff" opacity="0.75" />
            </g>

            {/* Interdental Papillae & Gums (Upper Arch) */}
            <path
              d="M 160 170 
                 C 190 200, 215 215, 225 195 
                 C 250 185, 275 195, 288 185
                 C 305 175, 330 180, 342 172
                 C 365 160, 385 165, 400 174
                 C 415 165, 435 160, 458 172
                 C 470 180, 495 175, 512 185
                 C 525 195, 550 185, 575 195
                 C 585 215, 610 200, 640 170
                 L 660 80 L 140 80 Z"
              fill="url(#gumGrad)"
            />

            {/* Gums Stippling Texture (Casca de Laranja - health indicator) */}
            <g opacity="0.35" fill="#fcdfe4">
              <circle cx="340" cy="155" r="1.2" />
              <circle cx="355" cy="148" r="1.4" />
              <circle cx="370" cy="152" r="1.1" />
              <circle cx="388" cy="158" r="1.5" />
              <circle cx="400" cy="162" r="1.3" />
              <circle cx="412" cy="158" r="1.4" />
              <circle cx="430" cy="152" r="1.2" />
              <circle cx="445" cy="148" r="1.5" />
              <circle cx="460" cy="155" r="1.1" />
            </g>
          </g>

          {/* 5. Lower Lip / Intraoral Boundary */}
          <path
            d="M 120 400 C 230 460, 570 460, 680 400 C 620 430, 180 430, 120 400 Z"
            fill="url(#lipGrad)"
          />

          {/* 6. SUBJECT MODES OVERLAYS */}
          {/* ORTHODONTIC MODE: Metallic brackets & Archwire */}
          {subjectMode === 'ortho' && (
            <g id="ortho-hardware">
              {/* Titanium/Steel Archwire connecting all teeth */}
              <path
                d="M 230 270 Q 400 295 570 270"
                stroke="url(#archwireMetal)"
                strokeWidth="3.2"
                fill="none"
                filter="drop-shadow(0 2px 3px rgba(0,0,0,0.7))"
              />

              {/* Bracket Tooth 13 */}
              <rect x="248" y="258" width="16" height="18" rx="2" fill="url(#bracketMetal)" stroke="#1e293b" strokeWidth="1" />
              {/* Bracket Tooth 12 */}
              <rect x="312" y="256" width="16" height="18" rx="2" fill="url(#bracketMetal)" stroke="#1e293b" strokeWidth="1" />
              {/* Bracket Tooth 11 */}
              <rect x="362" y="260" width="18" height="20" rx="2.5" fill="url(#bracketMetal)" stroke="#1e293b" strokeWidth="1" />
              {/* Bracket Tooth 21 */}
              <rect x="420" y="260" width="18" height="20" rx="2.5" fill="url(#bracketMetal)" stroke="#1e293b" strokeWidth="1" />
              {/* Bracket Tooth 22 */}
              <rect x="472" y="256" width="16" height="18" rx="2" fill="url(#bracketMetal)" stroke="#1e293b" strokeWidth="1" />
              {/* Bracket Tooth 23 */}
              <rect x="536" y="258" width="16" height="18" rx="2" fill="url(#bracketMetal)" stroke="#1e293b" strokeWidth="1" />

              {/* Blue Elastomeric Ligatures (Borrachinhas de ortodontia) */}
              <circle cx="371" cy="270" r="5" fill="none" stroke="#38bdf8" strokeWidth="2.2" opacity="0.9" />
              <circle cx="429" cy="270" r="5" fill="none" stroke="#38bdf8" strokeWidth="2.2" opacity="0.9" />
              <circle cx="320" cy="265" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.9" />
              <circle cx="480" cy="265" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.9" />
            </g>
          )}

          {/* VITA SHADE GUIDE MODE: Shade tab A2 positioned next to Tooth 11 */}
          {subjectMode === 'vita' && (
            <g id="vita-shade-tab" transform="translate(250, 160)">
              {/* Metal stem / handle of the VITA tab */}
              <path d="M 50 200 L 50 320" stroke="#94a3b8" strokeWidth="9" strokeLinecap="round" />
              <path d="M 48 200 L 48 320" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              
              {/* Shade Tab Crown (A2 ceramic sample) */}
              <path
                d="M 28 85 C 28 135, 26 195, 30 205 C 45 208, 65 208, 76 205 C 78 195, 76 135, 76 85 C 65 80, 39 80, 28 85 Z"
                fill="url(#vitaTabGrad)"
                stroke="#cbb387"
                strokeWidth="1.5"
                filter="drop-shadow(4px 6px 8px rgba(0,0,0,0.85))"
              />

              {/* VITA Tab Badge Stamp */}
              <rect x="36" y="235" width="34" height="22" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.2" />
              <text x="53" y="250" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">
                A2
              </text>
            </g>
          )}

        </g>

        {/* Ambient Light Contamination Overlay (Yellowish 3200K clinic ceiling wash) */}
        {ambientLightContamination > 0 && (
          <rect
            x="0"
            y="0"
            width="800"
            height="520"
            fill="#d97706"
            opacity={ambientLightContamination * 0.38}
            style={{ mixBlendMode: 'color' }}
          />
        )}

        {/* Dynamic ISO Noise Texture (Grain overlay) */}
        {noiseOpacity > 0.02 && (
          <rect
            x="0"
            y="0"
            width="800"
            height="520"
            filter="url(#noiseFilter)"
            opacity={noiseOpacity * 0.45}
            style={{ mixBlendMode: 'screen' }}
          />
        )}

        {/* FLASH CURTAIN ARTIFACT (Black Curtain Band when shutter speed > X-Sync) */}
        {hasFlashCurtainArtifact && (
          <g id="shutter-curtain-blackout">
            <rect
              x="0"
              y="280"
              width="800"
              height="240"
              fill="#020305"
              opacity="0.97"
            />
            {/* Curtain edge blur / gradient transition */}
            <rect
              x="0"
              y="255"
              width="800"
              height="25"
              fill="url(#curtainGradient)"
              opacity="0.9"
            />
            <linearGradient id="curtainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#020305" stopOpacity="0" />
              <stop offset="100%" stopColor="#020305" stopOpacity="1" />
            </linearGradient>

            {/* Warning indicator directly on the black band */}
            <g transform="translate(400, 380)">
              <rect x="-190" y="-20" width="380" height="40" rx="6" fill="#ef4444" opacity="0.9" />
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="13"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                ⚠️ Sombra da 2ª Cortina do Obturador (Flash Dessincronizado)
              </text>
            </g>
          </g>
        )}

        {/* FOCUS PEAKING OVERLAY (Neon Green lines on central incisor edges) */}
        {showFocusPeaking && (
          <g id="focus-peaking" opacity="0.92">
            <path
              d="M 345 182 C 346 230, 342 295, 342 342 C 360 348, 385 348, 397 344 C 397 285, 395 210, 390 178"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeDasharray="3 2"
              filter="drop-shadow(0 0 3px #22c55e)"
            />
            <path
              d="M 455 182 C 454 230, 458 295, 458 342 C 440 348, 415 348, 403 344 C 403 285, 405 210, 410 178"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeDasharray="3 2"
              filter="drop-shadow(0 0 3px #22c55e)"
            />
            {/* Center cross hair focus indicator */}
            <circle cx="400" cy="275" r="28" fill="none" stroke="#22c55e" strokeWidth="1.8" />
            <line x1="400" y1="240" x2="400" y2="255" stroke="#22c55e" strokeWidth="2" />
            <line x1="400" y1="295" x2="400" y2="310" stroke="#22c55e" strokeWidth="2" />
            <line x1="365" y1="275" x2="380" y2="275" stroke="#22c55e" strokeWidth="2" />
            <line x1="420" y1="275" x2="435" y2="275" stroke="#22c55e" strokeWidth="2" />
          </g>
        )}

        {/* DENTAL COMPOSITION & OCCLUSAL GRID (Rule of thirds & midline) */}
        {showGrid && (
          <g id="viewfinder-grid" stroke="#38bdf8" strokeWidth="0.8" opacity="0.45" strokeDasharray="6 4">
            {/* Dental Midline (Linha Média Facial entre 11 e 21) */}
            <line x1="400" y1="0" x2="400" y2="520" stroke="#f43f5e" strokeWidth="1.2" />
            {/* Incisal Plane Line (Plano Incisal Horizontal) */}
            <line x1="0" y1="344" x2="800" y2="344" stroke="#38bdf8" strokeWidth="1.2" />
            {/* Rule of Thirds */}
            <line x1="266" y1="0" x2="266" y2="520" />
            <line x1="533" y1="0" x2="533" y2="520" />
            <line x1="0" y1="173" x2="800" y2="173" />
            <line x1="0" y1="346" x2="800" y2="346" />
          </g>
        )}
      </svg>
    </div>
  );
};

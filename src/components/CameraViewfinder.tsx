import React, { useState } from 'react';
import {
  type CameraSettings,
  type SubjectMode,
  LENS_SPECS,
  WB_SPECS,
  shutterSpeedToSeconds,
} from '../types/camera';
import { type PhotoDiagnostics } from '../utils/clinicalPhysics';
import { DentalSubjectCanvas } from './DentalSubjectCanvas';
import { Histogram } from './Histogram';
import { sounds } from '../utils/soundEffects';
import {
  Grid,
  Zap,
  Volume2,
  VolumeX,
  Crosshair,
  Camera as CameraIcon,
} from 'lucide-react';

interface CameraViewfinderProps {
  settings: CameraSettings;
  diagnostics: PhotoDiagnostics;
  onUpdateSetting: <K extends keyof CameraSettings>(key: K, value: CameraSettings[K]) => void;
  onTakePhoto: () => void;
}

export const CameraViewfinder: React.FC<CameraViewfinderProps> = ({
  settings,
  diagnostics,
  onUpdateSetting,
  onTakePhoto,
}) => {
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [showFocusPeaking, setShowFocusPeaking] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isShutterActive, setIsShutterActive] = useState<boolean>(false);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.enabled = next;
  };

  const handleTrigger = () => {
    setIsShutterActive(true);
    sounds.playShutter(shutterSpeedToSeconds(settings.shutterSpeed));
    onTakePhoto();
    setTimeout(() => {
      setIsShutterActive(false);
    }, 240);
  };

  // EV exposure bar calculation (-3 to +3)
  const evPositionPercent = Math.max(0, Math.min(100, ((diagnostics.evDiff + 3) / 6) * 100));

  return (
    <div className="relative flex flex-col w-full bg-[#101217] rounded-xl border border-[#272a36] shadow-sm overflow-hidden">
      {/* Viewfinder Top Bezel: Authentic Camera LCD Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#161820] border-b border-[#242733] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-[#232733] text-emerald-400 font-bold text-[10px] tracking-wider">
            LIVE 1:1
          </span>
          <span className="px-1.5 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30 font-bold text-[9px] tracking-wider">
            THREE.JS 3D
          </span>
          <span className="text-zinc-400 text-[11px] hidden sm:inline">MACRO INTRAORAL</span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span className="text-zinc-300 font-semibold text-[11px]">
            {LENS_SPECS[settings.focalLength].workingDistanceCm} cm dist.
          </span>
        </div>

        {/* Viewfinder Overlay Controls */}
        <div className="flex items-center gap-1.5">
          {/* Subject Mode Switcher */}
          <div className="flex items-center bg-[#101217] p-0.5 rounded-md border border-[#262934] text-[10px]">
            <button
              onClick={() => onUpdateSetting('subjectMode', 'natural')}
              className={`px-2 py-0.5 rounded transition-colors ${
                settings.subjectMode === 'natural'
                  ? 'bg-zinc-200 text-black font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Estética
            </button>
            <button
              onClick={() => onUpdateSetting('subjectMode', 'ortho')}
              className={`px-2 py-0.5 rounded transition-colors ${
                settings.subjectMode === 'ortho'
                  ? 'bg-zinc-200 text-black font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Ortodontia
            </button>
            <button
              onClick={() => onUpdateSetting('subjectMode', 'vita')}
              className={`px-2 py-0.5 rounded transition-colors ${
                settings.subjectMode === 'vita'
                  ? 'bg-zinc-200 text-black font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              VITA
            </button>
          </div>

          {/* Grid Toggle */}
          <button
            onClick={() => setShowGrid(!showGrid)}
            title="Grade Oclusal & Linha Média"
            className={`p-1 rounded border transition-colors ${
              showGrid
                ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                : 'bg-[#181a22] text-zinc-500 border-[#272b37] hover:text-zinc-300'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
          </button>

          {/* Focus Peaking Toggle */}
          <button
            onClick={() => setShowFocusPeaking(!showFocusPeaking)}
            title="Focus Peaking (Realce de Foco)"
            className={`p-1 rounded border transition-colors ${
              showFocusPeaking
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-[#181a22] text-zinc-500 border-[#272b37] hover:text-zinc-300'
            }`}
          >
            <Crosshair className="w-3.5 h-3.5" />
          </button>

          {/* Audio Click Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Silenciar Sons' : 'Ativar Sons Mecânicos'}
            className="p-1 rounded border border-[#272b37] bg-[#181a22] text-zinc-400 hover:text-zinc-200"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Viewfinder Display / LCD Screen */}
      <div className="relative w-full aspect-[16/10] min-h-[280px] max-h-[360px] bg-black overflow-hidden group select-none">
        {/* Shutter Click Flash Animation */}
        {isShutterActive && (
          <div className="absolute inset-0 z-50 bg-white shutter-flash pointer-events-none" />
        )}

        {/* Dental Subject Canvas */}
        <DentalSubjectCanvas
          focalLength={settings.focalLength}
          aperture={settings.aperture}
          dofBlurCaninesPx={diagnostics.dofBlurCaninesPx}
          motionBlurPx={diagnostics.blurAmountPx}
          noiseOpacity={diagnostics.noiseOpacity}
          ambientLightContamination={diagnostics.ambientLightContamination}
          hasFlashCurtainArtifact={diagnostics.hasFlashCurtainArtifact}
          evDiff={diagnostics.evDiff}
          showFocusPeaking={showFocusPeaking}
          showGrid={showGrid}
          subjectMode={settings.subjectMode}
          flashMode={settings.flashMode}
          whiteBalance={settings.whiteBalance}
        />

        {/* Viewfinder HUD Overlays: Top Edge */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between pointer-events-none z-20">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-200">
            <span className="px-1.5 py-0.5 rounded bg-black/70 border border-white/10 font-bold">
              RAW
            </span>
            <span className="px-1.5 py-0.5 rounded bg-black/70 border border-white/10 text-emerald-400">
              AF-S
            </span>
            <span className="px-1.5 py-0.5 rounded bg-black/70 border border-white/10 text-amber-300 font-bold">
              WB {WB_SPECS[settings.whiteBalance].kelvin}
            </span>
          </div>

          {/* Histogram */}
          <div className="pointer-events-auto">
            <Histogram
              evDiff={diagnostics.evDiff}
              ambientContamination={diagnostics.ambientLightContamination}
              whiteBalance={settings.whiteBalance}
            />
          </div>
        </div>

        {/* Center Live Focus Brackets */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-24 h-20 border border-white/20 rounded flex items-center justify-center">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-emerald-400"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-emerald-400"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400"></div>
            <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
            <span className="absolute -bottom-4 text-[8px] font-mono tracking-wider bg-black/70 px-1 rounded text-emerald-400">
              11 / 21
            </span>
          </div>
        </div>

        {/* Viewfinder HUD Overlays: Bottom Data Strip (OLED Monitor Style) */}
        <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1 pointer-events-none z-20">
          {/* Exposure Meter Pointer */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center bg-black/80 px-3 py-0.5 rounded-full border border-white/10">
              <div className="relative w-36 h-1.5">
                <div
                  className="absolute -top-1 w-2 h-2 -ml-1 border-solid border-t-transparent border-r-transparent border-b-amber-400 border-l-transparent transition-all duration-200"
                  style={{
                    left: `${evPositionPercent}%`,
                    borderWidth: '0 3px 5px 3px',
                  }}
                />
              </div>
              <div className="flex items-center justify-between w-36 text-[8px] font-mono text-zinc-400">
                <span>-3</span>
                <span>-2</span>
                <span>-1</span>
                <span className="text-white font-bold">0</span>
                <span>+1</span>
                <span>+2</span>
                <span>+3</span>
              </div>
            </div>
          </div>

          {/* Primary Viewfinder Data Strip */}
          <div className="flex items-center justify-between bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 font-mono text-xs">
            <div className="flex flex-col">
              <span className="text-[9px] text-zinc-500 uppercase">Obturador</span>
              <span className={`font-bold ${diagnostics.hasFlashCurtainArtifact ? 'text-rose-400' : 'text-amber-300'}`}>
                {settings.shutterSpeed}s
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[9px] text-zinc-500 uppercase">Abertura</span>
              <span className="font-bold text-emerald-400">
                f/{settings.aperture}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[9px] text-zinc-500 uppercase">ISO</span>
              <span className={`font-bold ${settings.iso > 800 ? 'text-rose-400' : 'text-zinc-100'}`}>
                {settings.iso}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[9px] text-zinc-500 uppercase">Lente</span>
              <span className="font-bold text-zinc-200">
                {settings.focalLength}mm
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[9px] text-zinc-500 uppercase">Difusor / Flash</span>
              <div className="flex items-center gap-1 font-semibold text-amber-300 text-[11px]">
                <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>
                  {settings.flashMode === 'twin' && 'Twin D-Lux'}
                  {settings.flashMode === 'studio' && 'Estúdio D-Lux'}
                  {settings.flashMode === 'ring' && 'Ring D-Lux'}
                  {settings.flashMode === 'off' && 'Sem Flash'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Viewfinder Action Footer: Trigger Button */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#14161d] border-t border-[#242733]">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-400 text-[11px]">Status:</span>
          <span
            className={`font-semibold text-xs ${
              diagnostics.exposureStatus === 'good'
                ? 'text-emerald-400'
                : diagnostics.exposureStatus === 'under'
                ? 'text-sky-400'
                : 'text-rose-400'
            }`}
          >
            {diagnostics.exposureDescription}
          </span>
          {diagnostics.blurAmountPx > 2 && (
            <span className="text-rose-400 font-mono text-[10px] bg-rose-950/40 px-2 py-0.5 rounded border border-rose-800/40">
              Tremor Detectado
            </span>
          )}
        </div>

        {/* Shutter Button */}
        <button
          onClick={handleTrigger}
          className="flex items-center gap-2 px-4 py-1.5 bg-zinc-100 hover:bg-white text-black font-bold text-xs rounded-md shadow-sm active:scale-95 transition-all cursor-pointer"
        >
          <CameraIcon className="w-3.5 h-3.5" />
          <span>Disparar Foto</span>
        </button>
      </div>
    </div>
  );
};

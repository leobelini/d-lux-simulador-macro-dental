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
  BarChart2,
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
  const [showHistogram, setShowHistogram] = useState<boolean>(true);
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
      <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 bg-[#161820] border-b border-[#242733] text-xs font-mono gap-1">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="px-1.5 py-0.5 rounded bg-[#232733] text-emerald-400 font-bold text-[9px] sm:text-[10px] tracking-wider">
            LIVE 1:1
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30 font-bold text-[9px] tracking-wider">
            3D
          </span>
          <span className="text-zinc-400 text-[11px] hidden md:inline">MACRO INTRAORAL</span>
          <span className="text-zinc-600 hidden md:inline">|</span>
          <span className="text-zinc-300 font-semibold text-[10px] sm:text-[11px]">
            {LENS_SPECS[settings.focalLength].workingDistanceCm}cm
          </span>
        </div>

        {/* Viewfinder Overlay Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Subject Mode Switcher */}
          <div className="flex items-center bg-[#101217] p-0.5 rounded-md border border-[#262934] text-[10px]">
            <button
              onClick={() => onUpdateSetting('subjectMode', 'natural')}
              className={`px-1.5 sm:px-2 py-0.5 rounded transition-colors cursor-pointer ${
                settings.subjectMode === 'natural'
                  ? 'bg-zinc-200 text-black font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Estética
            </button>
            <button
              onClick={() => onUpdateSetting('subjectMode', 'ortho')}
              className={`px-1.5 sm:px-2 py-0.5 rounded transition-colors cursor-pointer ${
                settings.subjectMode === 'ortho'
                  ? 'bg-zinc-200 text-black font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <span className="sm:hidden">Orto</span>
              <span className="hidden sm:inline">Ortodontia</span>
            </button>
            <button
              onClick={() => onUpdateSetting('subjectMode', 'vita')}
              className={`px-1.5 sm:px-2 py-0.5 rounded transition-colors cursor-pointer ${
                settings.subjectMode === 'vita'
                  ? 'bg-zinc-200 text-black font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              VITA
            </button>
          </div>

          {/* Histogram Toggle */}
          <button
            onClick={() => setShowHistogram(!showHistogram)}
            title={showHistogram ? 'Ocultar Histograma' : 'Mostrar Histograma'}
            className={`p-1.5 sm:p-1 rounded border transition-colors cursor-pointer ${
              showHistogram
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                : 'bg-[#181a22] text-zinc-500 border-[#272b37] hover:text-zinc-300'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
          </button>

          {/* Grid Toggle */}
          <button
            onClick={() => setShowGrid(!showGrid)}
            title="Grade Oclusal & Linha Média"
            className={`p-1.5 sm:p-1 rounded border transition-colors cursor-pointer ${
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
            className={`p-1.5 sm:p-1 rounded border transition-colors cursor-pointer ${
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
            className="p-1.5 sm:p-1 rounded border border-[#272b37] bg-[#181a22] text-zinc-400 hover:text-zinc-200 cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Viewfinder Display / LCD Screen */}
      <div className="relative w-full aspect-[16/10] min-h-[230px] sm:min-h-[280px] max-h-[380px] bg-black overflow-hidden group select-none">
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

          {/* Histogram (Toggleable) */}
          {showHistogram && (
            <div className="pointer-events-auto animate-fade-in">
              <Histogram
                evDiff={diagnostics.evDiff}
                ambientContamination={diagnostics.ambientLightContamination}
                whiteBalance={settings.whiteBalance}
              />
            </div>
          )}
        </div>

        {/* Center Live Focus Brackets */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-20 sm:w-24 h-16 sm:h-20 border border-white/20 rounded flex items-center justify-center">
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
        <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 right-1.5 sm:right-2 flex flex-col gap-1 pointer-events-none z-20">
          {/* Exposure Meter Pointer */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center bg-black/80 px-2.5 sm:px-3 py-0.5 rounded-full border border-white/10">
              <div className="relative w-28 sm:w-36 h-1.5">
                <div
                  className="absolute -top-1 w-2 h-2 -ml-1 border-solid border-t-transparent border-r-transparent border-b-amber-400 border-l-transparent transition-all duration-200"
                  style={{
                    left: `${evPositionPercent}%`,
                    borderWidth: '0 3px 5px 3px',
                  }}
                />
              </div>
              <div className="flex items-center justify-between w-28 sm:w-36 text-[7px] sm:text-[8px] font-mono text-zinc-400">
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
          <div className="flex items-center justify-between bg-black/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 font-mono text-[11px] sm:text-xs">
            <div className="flex flex-col">
              <span className="text-[7px] sm:text-[9px] text-zinc-500 uppercase">Obturador</span>
              <span className={`font-bold text-[10px] sm:text-xs ${diagnostics.hasFlashCurtainArtifact ? 'text-rose-400' : 'text-amber-300'}`}>
                {settings.shutterSpeed}s
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[7px] sm:text-[9px] text-zinc-500 uppercase">Abertura</span>
              <span className="font-bold text-[10px] sm:text-xs text-emerald-400">
                f/{settings.aperture}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[7px] sm:text-[9px] text-zinc-500 uppercase">ISO</span>
              <span className={`font-bold text-[10px] sm:text-xs ${settings.iso > 800 ? 'text-rose-400' : 'text-zinc-100'}`}>
                {settings.iso}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[7px] sm:text-[9px] text-zinc-500 uppercase">Lente</span>
              <span className="font-bold text-[10px] sm:text-xs text-zinc-200">
                {settings.focalLength}mm
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[7px] sm:text-[9px] text-zinc-500 uppercase">Flash</span>
              <div className="flex items-center gap-0.5 sm:gap-1 font-semibold text-amber-300 text-[10px] sm:text-[11px]">
                <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400 shrink-0" />
                <span>
                  {settings.flashMode === 'twin' && 'Twin'}
                  {settings.flashMode === 'studio' && 'Estúdio'}
                  {settings.flashMode === 'ring' && 'Ring'}
                  {settings.flashMode === 'off' && 'Sem Flash'}
                </span>
                <span className="hidden md:inline">
                  {settings.flashMode === 'twin' && ' D-Lux'}
                  {settings.flashMode === 'studio' && ' D-Lux'}
                  {settings.flashMode === 'ring' && ' D-Lux'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Viewfinder Action Footer: Trigger Button */}
      <div className="flex items-center justify-between px-2.5 sm:px-3.5 py-2 bg-[#14161d] border-t border-[#242733] gap-2">
        <div className="flex items-center gap-1.5 text-xs truncate">
          <span className="text-zinc-400 text-[10px] sm:text-[11px] shrink-0">Status:</span>
          <span
            className={`font-semibold text-[11px] sm:text-xs truncate ${
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
            <span className="text-rose-400 font-mono text-[9px] sm:text-[10px] bg-rose-950/40 px-1.5 py-0.5 rounded border border-rose-800/40 shrink-0">
              Tremor
            </span>
          )}
        </div>

        {/* Shutter Button */}
        <button
          onClick={handleTrigger}
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-zinc-100 hover:bg-white text-black font-bold text-xs rounded-md shadow-sm active:scale-95 transition-all cursor-pointer shrink-0"
        >
          <CameraIcon className="w-3.5 h-3.5" />
          <span>Disparar Foto</span>
        </button>
      </div>
    </div>
  );
};

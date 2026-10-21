import React, { useState } from 'react';
import {
  type CameraSettings,
  type FocalLength,
  type ShutterSpeed,
  type ISO,
  type Aperture,
  type SubjectMode,
  LENS_SPECS,
  WB_SPECS,
  shutterSpeedToSeconds
} from '../types/camera';
import { type PhotoDiagnostics } from '../utils/clinicalPhysics';
import { DentalSubjectCanvas } from './DentalSubjectCanvas';
import { Histogram } from './Histogram';
import { sounds } from '../utils/soundEffects';
import {
  Camera,
  Grid,
  Zap,
  Volume2,
  VolumeX,
  Crosshair,
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
    <div className="relative flex flex-col w-full bg-[#12161f] rounded-2xl border-2 border-zinc-800 shadow-2xl overflow-hidden">
      {/* Camera Top Bar / Bezel Styling */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-b border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE VIEW
          </div>
          <span className="text-zinc-400">1:1 MACRO DENTAL</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300 font-semibold">{LENS_SPECS[settings.focalLength].name}</span>
        </div>

        {/* Viewfinder Overlay Controls */}
        <div className="flex items-center gap-2">
          {/* Subject Mode Switcher */}
          <div className="flex items-center bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 text-[11px]">
            <button
              onClick={() => onUpdateSetting('subjectMode', 'natural')}
              className={`px-2 py-1 rounded transition-colors ${
                settings.subjectMode === 'natural'
                  ? 'bg-emerald-600 text-white font-medium shadow'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Estética
            </button>
            <button
              onClick={() => onUpdateSetting('subjectMode', 'ortho')}
              className={`px-2 py-1 rounded transition-colors ${
                settings.subjectMode === 'ortho'
                  ? 'bg-sky-600 text-white font-medium shadow'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Ortodontia
            </button>
            <button
              onClick={() => onUpdateSetting('subjectMode', 'vita')}
              className={`px-2 py-1 rounded transition-colors ${
                settings.subjectMode === 'vita'
                  ? 'bg-amber-600 text-white font-medium shadow'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Cor (VITA)
            </button>
          </div>

          {/* Grid Toggle */}
          <button
            onClick={() => setShowGrid(!showGrid)}
            title="Grade Oclusal & Linha Média"
            className={`p-1.5 rounded-lg border transition-colors ${
              showGrid
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
          </button>

          {/* Focus Peaking Toggle */}
          <button
            onClick={() => setShowFocusPeaking(!showFocusPeaking)}
            title="Focus Peaking (Realce de Foco)"
            className={`p-1.5 rounded-lg border transition-colors ${
              showFocusPeaking
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300'
            }`}
          >
            <Crosshair className="w-3.5 h-3.5" />
          </button>

          {/* Audio Click Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Silenciar Sons' : 'Ativar Sons Mecânicos'}
            className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-200"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Viewfinder Display / LCD Screen */}
      <div className="relative w-full aspect-[16/10] min-h-[340px] max-h-[500px] bg-black overflow-hidden group">
        {/* Shutter Click White Flash Animation */}
        {isShutterActive && (
          <div className="absolute inset-0 z-50 bg-white shutter-flash pointer-events-none" />
        )}

        {/* Dental Subject Canvas */}
        <DentalSubjectCanvas
          focalLength={settings.focalLength}
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

        {/* Viewfinder HUD Overlays (Top Edge) */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none z-20">
          {/* Top Left: Camera State Indicators */}
          <div className="flex flex-col gap-1.5 font-mono text-[11px] text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-900/80 border border-white/20 text-white font-bold">
                RAW
              </span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-900/80 border border-white/20 text-emerald-300">
                AF-S [PONTO]
              </span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-900/80 border border-white/20 text-amber-300 font-bold">
                WB: {WB_SPECS[settings.whiteBalance].kelvin}
              </span>
            </div>

            <div className="text-[10px] text-zinc-400">
              Distância de Trabalho: <span className="text-white font-bold">{LENS_SPECS[settings.focalLength].workingDistanceCm} cm</span>
            </div>
          </div>

          {/* Top Right: Live Dynamic Histogram */}
          <div className="pointer-events-auto">
            <Histogram
              evDiff={diagnostics.evDiff}
              ambientContamination={diagnostics.ambientLightContamination}
              whiteBalance={settings.whiteBalance}
            />
          </div>
        </div>

        {/* Center Live Focus Brackets (Dental Focus Target) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-28 h-24 border border-white/30 rounded flex items-center justify-center animate-pulse-subtle">
            {/* Corner marks */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-emerald-400"></div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-emerald-400"></div>
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-emerald-400"></div>
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-400"></div>
            
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80"></div>
            
            <span className="absolute -bottom-5 text-[9px] font-mono tracking-wider bg-black/60 px-1.5 rounded text-emerald-400">
              INCS. 11/21
            </span>
          </div>
        </div>

        {/* Viewfinder HUD Overlays (Bottom Edge): Exposure parameters & EV Meter */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2 pointer-events-none z-20">
          {/* Exposure Meter Bar (EV Indicator) */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15">
              {/* Arrow pointer indicator */}
              <div className="relative w-48 h-2">
                <div
                  className="absolute -top-1 w-2 h-2 -ml-1 border-solid border-t-transparent border-r-transparent border-b-emerald-400 border-l-transparent transition-all duration-300"
                  style={{
                    left: `${evPositionPercent}%`,
                    borderWidth: '0 4px 6px 4px',
                  }}
                />
              </div>

              {/* Tick marks and labels */}
              <div className="flex items-center justify-between w-48 text-[9px] font-mono text-zinc-400">
                <span className={diagnostics.evDiff < -2 ? 'text-blue-400 font-bold' : ''}>-3</span>
                <span>-2</span>
                <span>-1</span>
                <span className="text-white font-bold">0</span>
                <span>+1</span>
                <span>+2</span>
                <span className={diagnostics.evDiff > 2 ? 'text-rose-400 font-bold' : ''}>+3</span>
              </div>
            </div>
          </div>

          {/* Primary Viewfinder Data Strip (OLED Style) */}
          <div className="flex items-center justify-between bg-black/85 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 font-mono text-zinc-100">
            {/* Shutter Speed */}
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Obturador</span>
              <span className={`text-xl font-bold tracking-tight ${diagnostics.hasFlashCurtainArtifact ? 'text-rose-400' : 'text-amber-400'}`}>
                {settings.shutterSpeed}
              </span>
            </div>

            {/* Aperture (f-stop) */}
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Abertura</span>
              <span className={`text-xl font-bold tracking-tight ${settings.aperture < 5.6 ? 'text-sky-400' : 'text-emerald-400'}`}>
                F{settings.aperture}
              </span>
            </div>

            {/* ISO */}
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider">ISO</span>
              <span className={`text-xl font-bold tracking-tight ${settings.iso > 800 ? 'text-rose-400' : 'text-white'}`}>
                {settings.iso}
              </span>
            </div>

            {/* Focal Length */}
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Lente</span>
              <span className="text-xl font-bold text-cyan-400 tracking-tight">
                {settings.focalLength}mm
              </span>
            </div>

            {/* White Balance */}
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Balanço WB</span>
              <span className="text-xl font-bold text-amber-300 tracking-tight">
                {WB_SPECS[settings.whiteBalance].kelvin}
              </span>
            </div>

            {/* Flash Status */}
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Flash Dental</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-200">
                <Zap className={`w-4 h-4 ${settings.flashMode === 'off' ? 'text-zinc-600' : 'text-amber-400 fill-amber-400'}`} />
                <span>
                  {settings.flashMode === 'twin' && 'Twin Flash'}
                  {settings.flashMode === 'studio' && 'Flash Estúdio'}
                  {settings.flashMode === 'ring' && 'Ring Flash'}
                  {settings.flashMode === 'off' && 'Desligado'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Camera Action Bar: Trigger Button & Diagnostics Summary */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950 border-t border-zinc-800">
        <div className="flex items-center gap-3">
          {/* Exposure status indicator pill */}
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 ${
              diagnostics.exposureStatus === 'good'
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40'
                : diagnostics.exposureStatus === 'under'
                ? 'bg-blue-950/60 text-blue-300 border-blue-500/40'
                : 'bg-rose-950/60 text-rose-300 border-rose-500/40'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                diagnostics.exposureStatus === 'good'
                  ? 'bg-emerald-400'
                  : diagnostics.exposureStatus === 'under'
                  ? 'bg-blue-400'
                  : 'bg-rose-400'
              }`}
            ></span>
            {diagnostics.exposureDescription}
          </div>

          {diagnostics.blurAmountPx > 2 && (
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-rose-400 font-mono bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/30">
              ⚠️ Alerta: Imagem Tremida
            </span>
          )}
        </div>

        {/* Tactile Big Shutter Release Button */}
        <button
          onClick={handleTrigger}
          className="relative group flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-b from-zinc-100 to-zinc-300 hover:from-white hover:to-zinc-200 text-zinc-950 font-bold rounded-full shadow-lg active:scale-95 transition-all cursor-pointer border-2 border-white/60"
        >
          <div className="w-4 h-4 rounded-full border-2 border-zinc-900 group-hover:scale-110 transition-transform"></div>
          <span>DISPARAR FOTO</span>
        </button>
      </div>
    </div>
  );
};

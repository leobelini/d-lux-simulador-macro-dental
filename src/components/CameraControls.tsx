import React from 'react';
import {
  type CameraSettings,
  type FocalLength,
  type ShutterSpeed,
  type ISO,
  type Aperture,
  type FlashMode,
  LENS_SPECS,
} from '../types/camera';
import { sounds } from '../utils/soundEffects';
import {
  Camera,
  Gauge,
  Sun,
  Aperture as ApertureIcon,
  Zap,
} from 'lucide-react';

interface CameraControlsProps {
  settings: CameraSettings;
  onUpdateSetting: <K extends keyof CameraSettings>(key: K, value: CameraSettings[K]) => void;
}

const FOCAL_LENGTHS: FocalLength[] = [60, 85, 100, 180];
const SHUTTER_SPEEDS: ShutterSpeed[] = ['1/30', '1/60', '1/125', '1/160', '1/200', '1/250', '1/500', '1/1000'];
const ISO_VALUES: ISO[] = [100, 200, 400, 800, 1600, 3200, 6400];
const APERTURES: Aperture[] = [2.8, 4, 5.6, 8, 11, 16, 22, 32];

export const CameraControls: React.FC<CameraControlsProps> = ({
  settings,
  onUpdateSetting,
}) => {
  const handleSelect = <K extends keyof CameraSettings>(key: K, val: CameraSettings[K]) => {
    sounds.playDial();
    onUpdateSetting(key, val);
  };

  return (
    <div className="flex flex-col gap-5 bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 shadow-xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Camera className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-white tracking-wide">
            Parâmetros da Câmera Macro
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-400">Modo Manual [M]</span>
      </div>

      {/* 1. LENS FOCAL LENGTH (DISTÂNCIA FOCAL DA LENTE) */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1.5 text-xs font-bold text-zinc-200 uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-cyan-400" />
            1. Distância Focal da Lente Macro
          </label>
          <span className="text-xs font-mono font-bold text-cyan-400">
            {LENS_SPECS[settings.focalLength].name}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {FOCAL_LENGTHS.map((fl) => {
            const isSelected = settings.focalLength === fl;
            const isGold = fl === 100;
            return (
              <button
                key={fl}
                onClick={() => handleSelect('focalLength', fl)}
                className={`relative flex flex-col items-center justify-center py-2.5 px-2 rounded-xl border font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400'
                    : 'bg-zinc-950/70 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {isGold && (
                  <span className="absolute -top-2 px-1.5 py-0.2 rounded-full text-[8px] font-bold bg-amber-500 text-black uppercase tracking-tight shadow">
                    Padrão Ouro
                  </span>
                )}
                <span className="text-sm font-bold">{fl}mm</span>
                <span className="text-[10px] text-zinc-500 font-sans mt-0.5">
                  {LENS_SPECS[fl].workingDistanceCm} cm dist.
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-zinc-400 italic">
          💡 A lente 100mm é a preferida na odontologia por manter ~32cm de distância sem deformar o sorriso.
        </p>
      </div>

      {/* 2. SHUTTER SPEED (VELOCIDADE DO OBTURADOR) */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1.5 text-xs font-bold text-zinc-200 uppercase tracking-wider">
            <Gauge className="w-3.5 h-3.5 text-amber-400" />
            2. Velocidade do Obturador (Tempo de Exposição)
          </label>
          <span className="text-xs font-mono font-bold text-amber-400">
            {settings.shutterSpeed} seg
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
          {SHUTTER_SPEEDS.map((speed) => {
            const isSelected = settings.shutterSpeed === speed;
            const isSync = speed === '1/160' || speed === '1/200';
            const isTooFast = speed === '1/500' || speed === '1/1000';
            const isTooSlow = speed === '1/30';

            return (
              <button
                key={speed}
                onClick={() => handleSelect('shutterSpeed', speed)}
                className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl border font-mono text-xs transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/20 text-amber-200 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)] ring-1 ring-amber-400 font-bold'
                    : 'bg-zinc-950/70 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {isSync && (
                  <span className="absolute -top-1.5 px-1 py-0 rounded text-[7px] font-bold bg-emerald-500 text-black">
                    SYNC
                  </span>
                )}
                {isTooFast && (
                  <span className="absolute -top-1.5 px-1 py-0 rounded text-[7px] font-bold bg-rose-500 text-white">
                    FALHA
                  </span>
                )}
                <span>{speed}</span>
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-zinc-400 italic">
          ⚡ 1/160s a 1/200s é a velocidade de sincronismo ideal com flash. Acima de 1/250s surge a cortina preta!
        </p>
      </div>

      {/* 3. ISO (SENSIBILIDADE DO SENSOR) */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1.5 text-xs font-bold text-zinc-200 uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5 text-yellow-400" />
            3. Sensibilidade ISO (Ruído & Granulação)
          </label>
          <span className="text-xs font-mono font-bold text-yellow-400">
            ISO {settings.iso}
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
          {ISO_VALUES.map((isoVal) => {
            const isSelected = settings.iso === isoVal;
            const isIdeal = isoVal === 100;
            const isHighNoise = isoVal >= 1600;

            return (
              <button
                key={isoVal}
                onClick={() => handleSelect('iso', isoVal)}
                className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl border font-mono text-xs transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-yellow-500/20 text-yellow-200 border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.25)] ring-1 ring-yellow-400 font-bold'
                    : 'bg-zinc-950/70 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {isIdeal && (
                  <span className="absolute -top-1.5 px-1 py-0 rounded text-[7px] font-bold bg-emerald-500 text-black">
                    IDEAL
                  </span>
                )}
                {isHighNoise && (
                  <span className="absolute -top-1.5 px-1 py-0 rounded text-[7px] font-bold bg-rose-500/80 text-white">
                    RUÍDO
                  </span>
                )}
                <span>{isoVal}</span>
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-zinc-400 italic">
          🔬 Em odontologia estética sempre usamos ISO 100 para visualizar periquimáceas e escala de cor sem ruído.
        </p>
      </div>

      {/* 4. APERTURE (ABERTURA F-STOP / PROFUNDIDADE DE CAMPO) */}
      <div className="flex flex-col gap-2 pt-1 border-t border-zinc-800/80">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1.5 text-xs font-bold text-zinc-200 uppercase tracking-wider">
            <ApertureIcon className="w-3.5 h-3.5 text-emerald-400" />
            4. Abertura do Diafragma (Profundidade de Campo)
          </label>
          <span className="text-xs font-mono font-bold text-emerald-400">
            f/{settings.aperture}
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
          {APERTURES.map((fStop) => {
            const isSelected = settings.aperture === fStop;
            const isDentalSweetSpot = fStop === 22;

            return (
              <button
                key={fStop}
                onClick={() => handleSelect('aperture', fStop)}
                className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl border font-mono text-xs transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400 font-bold'
                    : 'bg-zinc-950/70 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {isDentalSweetSpot && (
                  <span className="absolute -top-1.5 px-1 py-0 rounded text-[7px] font-bold bg-emerald-500 text-black">
                    FOCO TOTAL
                  </span>
                )}
                <span>f/{fStop}</span>
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-zinc-400 italic">
          🎯 Em macro 1:1, f/22 garante que caninos e molares fiquem nítidos. Com f/2.8, a profundidade é &lt; 1mm.
        </p>
      </div>

      {/* 5. FLASH ILUMINAÇÃO (TWIN / RING / AMBIENTE) */}
      <div className="flex flex-col gap-2 pt-1 border-t border-zinc-800/80">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1.5 text-xs font-bold text-zinc-200 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            5. Iluminação / Flash Odontológico
          </label>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {/* Twin Flash */}
          <button
            onClick={() => handleSelect('flashMode', 'twin')}
            className={`flex flex-col items-center py-2.5 px-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
              settings.flashMode === 'twin'
                ? 'bg-amber-500/20 text-amber-200 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)] ring-1 ring-amber-400'
                : 'bg-zinc-950/70 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <span className="font-bold">Twin Flash</span>
            <span className="text-[10px] text-zinc-400">Estética & Textura 3D</span>
          </button>

          {/* Flash de Estúdio */}
          <button
            onClick={() => handleSelect('flashMode', 'studio')}
            className={`flex flex-col items-center py-2.5 px-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
              settings.flashMode === 'studio'
                ? 'bg-purple-500/20 text-purple-200 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)] ring-1 ring-purple-400'
                : 'bg-zinc-950/70 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <span className="font-bold">Flash de Estúdio</span>
            <span className="text-[10px] text-zinc-400">Softbox & Luz Difusa</span>
          </button>

          {/* Ring Flash */}
          <button
            onClick={() => handleSelect('flashMode', 'ring')}
            className={`flex flex-col items-center py-2.5 px-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
              settings.flashMode === 'ring'
                ? 'bg-sky-500/20 text-sky-200 border-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.25)] ring-1 ring-sky-400'
                : 'bg-zinc-950/70 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <span className="font-bold">Ring Flash</span>
            <span className="text-[10px] text-zinc-400">Ortodontia & Oclusal</span>
          </button>

          {/* Off / Clinic Room Light */}
          <button
            onClick={() => handleSelect('flashMode', 'off')}
            className={`flex flex-col items-center py-2.5 px-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
              settings.flashMode === 'off'
                ? 'bg-rose-500/20 text-rose-200 border-rose-400 shadow'
                : 'bg-zinc-950/70 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <span className="font-bold">Sem Flash</span>
            <span className="text-[10px] text-zinc-400">Luz Consultório</span>
          </button>
        </div>
        <p className="text-[11px] text-zinc-400 italic">
          💡 Flash de estúdio com softbox produz luz difusa de alto padrão, desenhando as arestas anatômicas com elegância.
        </p>
      </div>
    </div>
  );
};

import React from 'react';
import {
  type CameraSettings,
  type FocalLength,
  type ShutterSpeed,
  type ISO,
  type Aperture,
  type FlashMode,
  type WhiteBalanceMode,
  LENS_SPECS,
  WB_SPECS,
} from '../types/camera';
import { sounds } from '../utils/soundEffects';
import {
  Camera,
  Gauge,
  Sun,
  Aperture as ApertureIcon,
  Zap,
  Palette,
  Sliders,
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
    <div className="bg-[#16181f] border border-[#272a36] rounded-xl p-3 sm:p-3.5 flex flex-col gap-2.5 sm:gap-3 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#232733]">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-amber-400" />
          <h2 className="text-xs font-bold text-zinc-100 uppercase tracking-wider">
            Painel de Controle Óptico (Ajuste Manual)
          </h2>
        </div>
        <span className="text-[11px] font-mono text-zinc-400">Modo [M]</span>
      </div>

      {/* 1. LENTE MACRO */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-zinc-400" />
            Lente Macro
          </span>
          <span className="font-mono text-amber-300 font-bold text-xs">
            {settings.focalLength}mm ({LENS_SPECS[settings.focalLength].workingDistanceCm} cm dist.)
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 font-mono text-xs">
          {FOCAL_LENGTHS.map((fl) => {
            const isSelected = settings.focalLength === fl;
            const isGold = fl === 100;
            return (
              <button
                key={fl}
                onClick={() => handleSelect('focalLength', fl)}
                className={`flex items-center justify-center gap-1 py-2 sm:py-1.5 px-2 rounded-md border transition-all active:scale-95 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-sm'
                    : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
                }`}
              >
                <span>{fl}mm</span>
                {isGold && !isSelected && <span className="text-amber-400 text-[10px]">★</span>}
              </button>
            );
          })}
        </div>
        <p className="text-[10px] text-zinc-400">
          {settings.focalLength === 100
            ? '★ 100mm: Padrão Ouro mundial com distância ergonômica (~32cm) sem distorcer o sorriso.'
            : settings.focalLength === 60
            ? '⚠️ 60mm: Muito próximo (15cm) do paciente; projeta sombra da câmera e distorce dentes.'
            : settings.focalLength === 85
            ? '85mm: Ótimo para proporção facial e fotografia do sorriso/lábios.'
            : '180mm: Tele-macro com distância estéril (55cm) para cirurgias periodontais.'}
        </p>
      </div>

      {/* 2. ABERTURA (DIAFRAGMA) */}
      <div className="flex flex-col gap-1.5 pt-2 border-t border-[#232733]">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
            <ApertureIcon className="w-3.5 h-3.5 text-zinc-400" />
            Abertura (Profundidade de Campo)
          </span>
          <span className="font-mono text-emerald-400 font-bold text-xs">
            f/{settings.aperture}
          </span>
        </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-1 font-mono text-xs">
            {APERTURES.map((fStop) => {
              const isSelected = settings.aperture === fStop;
              const isGold = fStop === 22;
              return (
                <button
                  key={fStop}
                  onClick={() => handleSelect('aperture', fStop)}
                  className={`py-2 sm:py-1.5 px-0.5 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-400 text-black border-emerald-300 font-bold shadow-sm'
                      : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
                  }`}
                >
                  f/{fStop}
                </button>
              );
            })}
          </div>
          <p className="text-[10px] text-zinc-400">
            {settings.aperture >= 22
              ? '★ f/22: Nitidez máxima cobrindo incisivos, caninos e molares simultaneamente.'
              : settings.aperture <= 4
              ? '⚠️ f/2.8 a f/4: Profundidade < 1mm; caninos e dentes vizinhos ficam totalmente borrados.'
              : 'f/8 a f/16: Profundidade moderada, recomendada para retrato do sorriso.'}
          </p>
        </div>

      {/* 3. VELOCIDADE DO OBTURADOR */}
      <div className="flex flex-col gap-1.5 pt-2 border-t border-[#232733]">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-zinc-400" />
            Velocidade do Obturador
          </span>
          <span className="font-mono text-amber-300 font-bold text-xs">
            {settings.shutterSpeed}s
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-1 font-mono text-xs">
          {SHUTTER_SPEEDS.map((speed) => {
            const isSelected = settings.shutterSpeed === speed;
            const isSync = speed === '1/160' || speed === '1/200';
            const isCutoff = speed === '1/500' || speed === '1/1000';
            return (
              <button
                key={speed}
                onClick={() => handleSelect('shutterSpeed', speed)}
                className={`py-2 sm:py-1.5 px-0.5 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
                  isSelected
                    ? isCutoff
                      ? 'bg-rose-500 text-white border-rose-400 font-bold'
                      : 'bg-zinc-100 text-black border-white font-bold shadow-sm'
                    : isCutoff
                    ? 'bg-[#20181b] text-rose-300/80 border-rose-900/40 hover:bg-rose-950/40'
                    : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
                }`}
              >
                {speed}
              </button>
            );
          })}
        </div>
        <p className="text-[10px] text-zinc-400">
          {settings.shutterSpeed === '1/160' || settings.shutterSpeed === '1/200'
            ? '★ 1/160s - 1/200s: Sincronismo oficial de flash; congela micro-tremores e bloqueia luz de consultório.'
            : settings.shutterSpeed === '1/500' || settings.shutterSpeed === '1/1000'
            ? '⚠️ Acima de 1/250s: Ultrapassa o sincronismo X-Sync e corta a foto com a faixa preta da cortina.'
            : '1/30s - 1/60s: Lento demais sem flash; causa borrão de movimento e contamina com luz amarela.'}
        </p>
      </div>

      {/* 4. SENSIBILIDADE ISO */}
      <div className="flex flex-col gap-1.5 pt-2 border-t border-[#232733]">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
            <Sun className="w-3.5 h-3.5 text-zinc-400" />
            Sensibilidade ISO
          </span>
          <span className="font-mono text-zinc-100 font-bold text-xs">
            ISO {settings.iso}
          </span>
        </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 sm:gap-1 font-mono text-xs">
            {ISO_VALUES.map((isoVal) => {
              const isSelected = settings.iso === isoVal;
              const isHighNoise = isoVal >= 3200;
              return (
                <button
                  key={isoVal}
                  onClick={() => handleSelect('iso', isoVal)}
                  className={`py-2 sm:py-1.5 px-0.5 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
                    isSelected
                      ? isHighNoise
                        ? 'bg-rose-500 text-white border-rose-400 font-bold'
                        : 'bg-zinc-100 text-black border-white font-bold shadow-sm'
                      : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
                  }`}
                >
                  {isoVal}
                </button>
              );
            })}
          </div>
          <p className="text-[10px] text-zinc-400">
            {settings.iso === 100
              ? '★ ISO 100: Ausência de ruído digital e máxima fidelidade de cor para análise de resinas e periquimáceas.'
              : settings.iso >= 1600
              ? '⚠️ ISO alto causa granulação severa que destrói detalhes da textura de esmalte e registro clínico.'
              : 'ISO 200 a 800: Ruído aceitável, mas prefira sempre aumentar a potência do flash em vez do ISO.'}
          </p>
        </div>

      {/* 5. ILUMINAÇÃO & DIFUSORES D-LUX */}
      <div className="flex flex-col gap-1.5 pt-2 border-t border-[#232733]">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Iluminação & Difusor D-Lux
          </span>
          <span className="font-mono text-amber-300 font-bold text-xs">
            {settings.flashMode === 'twin' && 'Twin D-Lux MF-12'}
            {settings.flashMode === 'studio' && 'Estúdio D-Lux'}
            {settings.flashMode === 'ring' && 'Ring D-Lux YN-14'}
            {settings.flashMode === 'off' && 'Sem Flash'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs">
          <button
            onClick={() => handleSelect('flashMode', 'twin')}
            className={`py-2 sm:py-1.5 px-2 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
              settings.flashMode === 'twin'
                ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-sm'
                : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
            }`}
          >
            Twin + D-Lux MF-12
          </button>
          <button
            onClick={() => handleSelect('flashMode', 'studio')}
            className={`py-2 sm:py-1.5 px-2 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
              settings.flashMode === 'studio'
                ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-sm'
                : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
            }`}
          >
            Estúdio / Bouncers
          </button>
          <button
            onClick={() => handleSelect('flashMode', 'ring')}
            className={`py-2 sm:py-1.5 px-2 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
              settings.flashMode === 'ring'
                ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-sm'
                : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
            }`}
          >
            Ring + D-Lux YN-14
          </button>
          <button
            onClick={() => handleSelect('flashMode', 'off')}
            className={`py-2 sm:py-1.5 px-2 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
              settings.flashMode === 'off'
                ? 'bg-rose-500 text-white border-rose-400 font-bold'
                : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
            }`}
          >
            Sem Flash (Ambiente)
          </button>
        </div>
        <p className="text-[10px] text-zinc-400">
          Difusores D-Lux suavizam a luz estroboscópica pontual, gerando reflexos lineares e destacando a tridimensionalidade vestibular.
        </p>
      </div>

      {/* 6. BALANÇO DE BRANCO (WB) */}
      <div className="flex flex-col gap-1.5 pt-2 border-t border-[#232733]">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-zinc-400" />
            Balanço de Branco (WB)
          </span>
          <span className="font-mono text-zinc-100 font-bold text-xs">
            {WB_SPECS[settings.whiteBalance].label} ({WB_SPECS[settings.whiteBalance].kelvin})
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs">
          <button
            onClick={() => handleSelect('whiteBalance', 'flash')}
            className={`py-2 sm:py-1.5 px-2 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
              settings.whiteBalance === 'flash'
                ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-sm'
                : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
            }`}
          >
            Flash 5500K ★
          </button>
          <button
            onClick={() => handleSelect('whiteBalance', 'custom')}
            className={`py-2 sm:py-1.5 px-2 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
              settings.whiteBalance === 'custom'
                ? 'bg-zinc-100 text-black border-white font-bold shadow-sm'
                : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
            }`}
          >
            Cinza 18%
          </button>
          <button
            onClick={() => handleSelect('whiteBalance', 'cloudy')}
            className={`py-2 sm:py-1.5 px-2 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
              settings.whiteBalance === 'cloudy'
                ? 'bg-zinc-100 text-black border-white font-bold shadow-sm'
                : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
            }`}
          >
            Nublado 6500K
          </button>
          <button
            onClick={() => handleSelect('whiteBalance', 'tungsten')}
            className={`py-2 sm:py-1.5 px-2 rounded-md border text-center transition-all active:scale-95 cursor-pointer ${
              settings.whiteBalance === 'tungsten'
                ? 'bg-blue-500 text-white border-blue-400 font-bold'
                : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
            }`}
          >
            Tungstênio 3200K
          </button>
        </div>
        <p className="text-[10px] text-zinc-400">
          5500K é a temperatura oficial odontológica para correta estratificação de cerâmicas e resinas na escala VITA.
        </p>
      </div>
    </div>
  );
};

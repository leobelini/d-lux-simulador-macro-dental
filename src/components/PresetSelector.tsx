import React from 'react';
import { type Preset, type CameraSettings } from '../types/camera';
import { CLINICAL_PRESETS } from '../data/presets';
import { sounds } from '../utils/soundEffects';
import { Check, Sparkles, AlertCircle } from 'lucide-react';

interface PresetSelectorProps {
  currentSettings: CameraSettings;
  onSelectPreset: (settings: CameraSettings) => void;
}

export const PresetSelector: React.FC<PresetSelectorProps> = ({
  currentSettings,
  onSelectPreset,
}) => {
  const handleApply = (preset: Preset) => {
    sounds.playBeep();
    onSelectPreset(preset.settings);
  };

  const isPresetActive = (preset: Preset) => {
    const p = preset.settings;
    const c = currentSettings;
    return (
      p.focalLength === c.focalLength &&
      p.shutterSpeed === c.shutterSpeed &&
      p.iso === c.iso &&
      p.aperture === c.aperture &&
      p.flashMode === c.flashMode &&
      p.subjectMode === c.subjectMode &&
      p.whiteBalance === c.whiteBalance
    );
  };

  const activePreset = CLINICAL_PRESETS.find(isPresetActive);
  const clinicalProtocols = CLINICAL_PRESETS.filter((p) => p.tag !== 'Erro Comum');
  const clinicalErrors = CLINICAL_PRESETS.filter((p) => p.tag === 'Erro Comum');

  return (
    <div className="bg-[#16181f] border border-[#272a36] rounded-xl px-3 py-2 flex flex-col gap-1.5 shadow-sm">
      {/* Horizontal Strip of Presets */}
      <div className="flex items-center justify-between gap-3 flex-wrap xl:flex-nowrap">
        {/* Left: Recommended Protocols */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-zinc-400 mr-1 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Protocolos:</span>
          </div>

          {clinicalProtocols.map((preset) => {
            const isActive = isPresetActive(preset);
            const isGold = preset.id === 'gold-standard';

            return (
              <button
                key={preset.id}
                onClick={() => handleApply(preset)}
                title={`${preset.name}: ${preset.description}`}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-sm'
                    : isGold
                    ? 'bg-[#1e222d] text-zinc-200 border-amber-500/40 hover:border-amber-400 hover:text-white'
                    : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
                }`}
              >
                {isActive && <Check className="w-3 h-3 stroke-[3]" />}
                <span>{preset.name.split(':')[0].replace('Padrão Ouro', 'Padrão Ouro 1:1')}</span>
              </button>
            );
          })}
        </div>

        {/* Divider on large screens */}
        <div className="hidden xl:block h-4 w-px bg-zinc-700/60 shrink-0"></div>

        {/* Right: Common Mistakes / Errors */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-zinc-400 mr-1 shrink-0">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>Erros Típicos:</span>
          </div>

          {clinicalErrors.map((preset) => {
            const isActive = isPresetActive(preset);

            return (
              <button
                key={preset.id}
                onClick={() => handleApply(preset)}
                title={`${preset.name}: ${preset.description}`}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-rose-500 text-white border-rose-400 font-bold shadow-sm'
                    : 'bg-[#1c1820] text-rose-200/80 border-rose-900/40 hover:bg-rose-950/40 hover:text-rose-100 hover:border-rose-700/60'
                }`}
              >
                {isActive && <Check className="w-3 h-3 stroke-[3]" />}
                <span>
                  {preset.name
                    .replace('⚠️ Erro Comum: ', '')
                    .replace('Faixa Preta do Obturador', 'Cortina (1/1000s)')
                    .replace('Tremor & Luz de Teto Amarela', 'Tremor (1/30s)')
                    .replace('Foco Raso Demais (f/2.8)', 'Foco Raso (f/2.8)')
                    .replace('WB Incorreto (Tungstênio Frio)', 'WB Incorreto (3200K)')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1-Line Description Context Bar */}
      <div className="flex items-center justify-between text-[11px] text-zinc-400 border-t border-[#232733] pt-1">
        <div className="truncate flex items-center gap-1.5">
          {activePreset ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
              <span className="font-semibold text-zinc-200">{activePreset.name}:</span>
              <span className="text-zinc-400 truncate">{activePreset.description}</span>
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></span>
              <span className="text-zinc-400">
                Ajuste Manual Personalizado — altere os parâmetros abaixo para simular os efeitos em tempo real.
              </span>
            </>
          )}
        </div>

        {activePreset && (
          <span className="hidden md:inline-block font-mono text-[10px] text-amber-300/90 shrink-0 pl-2">
            {activePreset.settings.focalLength}mm • f/{activePreset.settings.aperture} • {activePreset.settings.shutterSpeed}s • ISO {activePreset.settings.iso}
          </span>
        )}
      </div>
    </div>
  );
};

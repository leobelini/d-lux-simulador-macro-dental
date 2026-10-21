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
    <div className="bg-[#16181f] border border-[#272a36] rounded-xl p-2.5 sm:p-3 flex flex-col gap-2 shadow-sm">
      {/* 1. Protocolos Clínicos (100% visíveis, sem scroll) */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Protocolos Clínicos Recomendados</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
          {clinicalProtocols.map((preset) => {
            const isActive = isPresetActive(preset);
            const isGold = preset.id === 'gold-standard';

            return (
              <button
                key={preset.id}
                onClick={() => handleApply(preset)}
                title={`${preset.name}: ${preset.description}`}
                className={`flex items-center justify-center gap-1.5 py-2 sm:py-1.5 px-2 rounded-lg text-xs font-medium transition-all active:scale-95 cursor-pointer border text-center ${
                  isActive
                    ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-md ring-1 ring-amber-300'
                    : isGold
                    ? 'bg-[#1e222d] text-amber-200 border-amber-500/40 hover:border-amber-400 hover:text-white'
                    : 'bg-[#1b1d25] text-zinc-300 border-[#2a2e3c] hover:bg-[#232733] hover:text-white'
                }`}
              >
                {isActive ? (
                  <Check className="w-3.5 h-3.5 stroke-[3] shrink-0" />
                ) : isGold ? (
                  <span className="text-amber-400 font-bold text-[11px] shrink-0">★</span>
                ) : null}
                <span className="truncate">
                  {preset.name
                    .replace('Padrão Ouro: Estética Anterior (1:1)', 'Padrão Ouro 1:1')
                    .replace('Fotografia de Sorriso & Terço Inferior', 'Sorriso & Lábios')
                    .replace('Cirurgia Periodontal & Implante', 'Cirurgia (180mm)')
                    .replace('Ortodontia & Registro de Braquetes', 'Ortodontia (Ring)')
                    .replace('Tomada de Cor (Escala VITA)', 'Escala VITA')
                    .replace('Estúdio: Softbox & Protocolo Artístico', 'Estúdio Softbox')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Erros Comuns para Aprender & Testar (100% visíveis, sem scroll) */}
      <div className="flex flex-col gap-1.5 pt-2 border-t border-[#232733]">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-300">
          <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
          <span>Simulação de Erros Típicos (Aprenda na Prática)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {clinicalErrors.map((preset) => {
            const isActive = isPresetActive(preset);

            return (
              <button
                key={preset.id}
                onClick={() => handleApply(preset)}
                title={`${preset.name}: ${preset.description}`}
                className={`flex items-center justify-center gap-1.5 py-2 sm:py-1.5 px-2 rounded-lg text-xs font-medium transition-all active:scale-95 cursor-pointer border text-center ${
                  isActive
                    ? 'bg-rose-500 text-white border-rose-400 font-bold shadow-md ring-1 ring-rose-400'
                    : 'bg-[#1c1820] text-rose-200/80 border-rose-900/40 hover:bg-rose-950/40 hover:text-rose-100 hover:border-rose-700/60'
                }`}
              >
                {isActive && <Check className="w-3.5 h-3.5 stroke-[3] shrink-0" />}
                <span className="truncate">
                  {preset.name
                    .replace('⚠️ Erro Comum: Faixa Preta do Obturador', 'Cortina (1/1000s)')
                    .replace('⚠️ Erro Comum: Tremor & Luz de Teto Amarela', 'Tremor (1/30s)')
                    .replace('⚠️ Erro Comum: Foco Raso Demais (f/2.8)', 'Foco Raso (f/2.8)')
                    .replace('⚠️ Erro Comum: WB Incorreto (Tungstênio Frio)', 'WB Frio (3200K)')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Descrição do Caso Selecionado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-zinc-400 border-t border-[#232733] pt-1.5 gap-1.5">
        <div className="flex items-start sm:items-center gap-1.5">
          {activePreset ? (
            <>
              <span className={`w-2 h-2 rounded-full shrink-0 mt-1 sm:mt-0 ${activePreset.tag === 'Erro Comum' ? 'bg-rose-400' : 'bg-amber-400'}`}></span>
              <span className="font-semibold text-zinc-200 shrink-0">{activePreset.name.split(':')[0]}:</span>
              <span className="text-zinc-400 leading-tight">{activePreset.description}</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-zinc-500 shrink-0 mt-1 sm:mt-0"></span>
              <span className="text-zinc-400 leading-tight">
                Ajuste Manual Personalizado — altere qualquer controle óptico abaixo para simular os efeitos em tempo real.
              </span>
            </>
          )}
        </div>

        {activePreset && (
          <span className="font-mono text-[10px] text-amber-300/90 shrink-0 self-start sm:self-auto bg-black/40 px-2 py-0.5 rounded border border-white/5">
            {activePreset.settings.focalLength}mm • f/{activePreset.settings.aperture} • {activePreset.settings.shutterSpeed}s • ISO {activePreset.settings.iso}
          </span>
        )}
      </div>
    </div>
  );
};

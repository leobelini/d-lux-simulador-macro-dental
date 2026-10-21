import React from 'react';
import { type Preset, type CameraSettings } from '../types/camera';
import { CLINICAL_PRESETS } from '../data/presets';
import { sounds } from '../utils/soundEffects';
import { Bookmark, Check } from 'lucide-react';

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

  // Verifica se todos os parâmetros da câmera batem exatamente com as configurações do preset
  const isPresetActive = (preset: Preset) => {
    const p = preset.settings;
    const c = currentSettings;
    return (
      p.focalLength === c.focalLength &&
      p.shutterSpeed === c.shutterSpeed &&
      p.iso === c.iso &&
      p.aperture === c.aperture &&
      p.flashMode === c.flashMode &&
      p.subjectMode === c.subjectMode
    );
  };

  const activePreset = CLINICAL_PRESETS.find(isPresetActive);

  return (
    <div className="flex flex-col gap-3 bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 shadow-xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
            <Bookmark className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">
              Cenários Clínicos & Erros Comuns
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              {activePreset ? (
                <span className="text-cyan-400 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Cenário Ativo: <strong className="text-white">{activePreset.name}</strong>
                </span>
              ) : (
                <span className="text-zinc-500">
                  Configuração Manual (ajuste livre dos parâmetros)
                </span>
              )}
            </p>
          </div>
        </div>
        <span className="text-[11px] text-zinc-400 hidden sm:inline-block">1-Clique para Simular</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {CLINICAL_PRESETS.map((preset) => {
          const isError = preset.tag === 'Erro Comum';
          const isGold = preset.id === 'gold-standard';
          const isActive = isPresetActive(preset);

          return (
            <button
              key={preset.id}
              onClick={() => handleApply(preset)}
              className={`relative flex flex-col justify-between text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer group ${
                isActive
                  ? 'bg-cyan-950/40 border-cyan-400 ring-2 ring-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-[1.01]'
                  : isGold
                  ? 'bg-emerald-950/20 border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/40'
                  : isError
                  ? 'bg-rose-950/20 border-rose-500/30 hover:border-rose-400 hover:bg-rose-950/40'
                  : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded-full border ${preset.badgeColor}`}
                  >
                    {preset.tag}
                  </span>

                  {isActive ? (
                    <span className="flex items-center gap-1 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-cyan-400 text-black shadow">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                      Ativo
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-400 whitespace-nowrap">
                      {preset.settings.focalLength}mm • f/{preset.settings.aperture}
                    </span>
                  )}
                </div>

                <h4
                  className={`text-xs font-bold transition-colors mb-1.5 leading-snug ${
                    isActive ? 'text-cyan-300 font-extrabold' : 'text-zinc-100 group-hover:text-cyan-300'
                  }`}
                >
                  {preset.name}
                </h4>

                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  {preset.description}
                </p>
              </div>

              <div
                className={`mt-3 pt-2 border-t flex items-center justify-between text-[10px] font-mono transition-colors ${
                  isActive
                    ? 'border-cyan-500/30 text-cyan-300 font-bold'
                    : 'border-white/5 text-zinc-500 group-hover:text-cyan-400'
                }`}
              >
                <span>{preset.settings.shutterSpeed}s • ISO {preset.settings.iso}</span>
                <span className="text-[9px] font-sans font-semibold">
                  {isActive ? '✓ Em Uso' : 'Aplicar →'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

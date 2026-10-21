import React from 'react';

interface HistogramProps {
  evDiff: number; // -3 to +3
  ambientContamination: number;
}

export const Histogram: React.FC<HistogramProps> = ({ evDiff, ambientContamination }) => {
  // Center of histogram shifts based on EV difference
  // EV = 0 -> center ~ 50%
  // EV = -3 -> center ~ 15%
  // EV = +3 -> center ~ 85%
  const normalizedShift = Math.max(-1, Math.min(1, evDiff / 3));
  const peakX = 50 + normalizedShift * 35; // 15 to 85

  // Generate dynamic bezier paths for Luminance, Red (gingiva), and Green/Blue (enamel)
  const lumaPath = `
    M 0 45 
    L 10 44
    C ${peakX * 0.5} 40, ${peakX - 15} 12, ${peakX} 8 
    C ${peakX + 15} 12, ${peakX + 25} 35, 95 44 
    L 100 45 Z
  `;

  // Red curve (gums and warm dentin) shifts slightly right if warm ambient light
  const redPeak = peakX + ambientContamination * 10;
  const redPath = `
    M 0 45 
    C ${redPeak * 0.4} 42, ${redPeak - 12} 18, ${redPeak} 14 
    C ${redPeak + 14} 18, ${redPeak + 20} 38, 100 45 Z
  `;

  return (
    <div className="flex flex-col gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-2.5 w-44">
      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
        <span className="flex items-center gap-1 font-semibold text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          HISTOGRAMA
        </span>
        <span className={evDiff > 1.2 ? 'text-rose-400 font-bold' : evDiff < -1.2 ? 'text-amber-400 font-bold' : 'text-emerald-400'}>
          {evDiff > 0 ? `+${evDiff.toFixed(1)}` : evDiff.toFixed(1)} EV
        </span>
      </div>

      <div className="relative w-full h-11 bg-zinc-950/80 rounded border border-white/5 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 flex justify-between px-2 pointer-events-none opacity-20">
          <div className="w-px h-full bg-white"></div>
          <div className="w-px h-full bg-white"></div>
          <div className="w-px h-full bg-white"></div>
        </div>

        <svg viewBox="0 0 100 45" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          {/* Red Channel (gums) */}
          <path d={redPath} fill="#f43f5e" opacity="0.4" />
          
          {/* Luminance Curve */}
          <path d={lumaPath} fill="#ffffff" opacity="0.55" />
          
          {/* Highlights clipping line indicator if blown out */}
          {evDiff > 1.5 && (
            <line x1="99" y1="0" x2="99" y2="45" stroke="#ef4444" strokeWidth="2.5" />
          )}

          {/* Shadow clipping line indicator if underexposed */}
          {evDiff < -1.5 && (
            <line x1="1" y1="0" x2="1" y2="45" stroke="#3b82f6" strokeWidth="2.5" />
          )}
        </svg>

        {/* Warning Badge if clipping */}
        {evDiff > 1.5 && (
          <span className="absolute right-1 top-0.5 text-[8px] font-mono bg-rose-600/90 text-white px-1 rounded">
            ESTOURO
          </span>
        )}
        {evDiff < -1.5 && (
          <span className="absolute left-1 top-0.5 text-[8px] font-mono bg-blue-600/90 text-white px-1 rounded">
            SUBEXPOSTO
          </span>
        )}
      </div>

      <div className="flex justify-between text-[9px] font-mono text-zinc-500">
        <span>0 (Sombras)</span>
        <span>128 (Médios)</span>
        <span>255 (Altas)</span>
      </div>
    </div>
  );
};

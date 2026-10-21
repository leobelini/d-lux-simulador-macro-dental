import React from 'react';
import { type PhotoDiagnostics } from '../utils/clinicalPhysics';
import { CheckCircle2, AlertTriangle, AlertOctagon, Info } from 'lucide-react';

interface ClinicalFeedbackProps {
  diagnostics: PhotoDiagnostics;
}

export const ClinicalFeedback: React.FC<ClinicalFeedbackProps> = ({ diagnostics }) => {
  const { clinicalScore, clinicalTitle, clinicalFeedback, clinicalBadges, exposureStatus } = diagnostics;

  const scoreBadgeStyle =
    clinicalScore >= 80
      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
      : clinicalScore >= 50
      ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
      : 'bg-rose-500/15 text-rose-300 border-rose-500/30';

  const scoreDotColor =
    clinicalScore >= 80 ? 'bg-emerald-400' : clinicalScore >= 50 ? 'bg-amber-400' : 'bg-rose-400';

  return (
    <div className="bg-[#16181f] border border-[#272a36] rounded-xl p-3 flex flex-col gap-2 shadow-sm">
      {/* Top Line: Score + Status + Title */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          {/* Numerical Score Box */}
          <div className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md border font-mono text-xs font-bold shrink-0 ${scoreBadgeStyle}`}>
            <span className={`w-2 h-2 rounded-full ${scoreDotColor}`}></span>
            <span>{clinicalScore}/100</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold opacity-80">
              {clinicalScore >= 80 ? 'Padrão' : clinicalScore >= 50 ? 'Atenção' : 'Falha'}
            </span>
          </div>

          {/* Title */}
          <h4 className="text-[11px] sm:text-xs font-bold text-zinc-100 truncate">
            {clinicalTitle}
          </h4>
        </div>

        {/* EV / Exposure Pill */}
        <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 shrink-0">
          <span className="text-zinc-500">Exp: </span>
          <span
            className={`font-semibold ${
              exposureStatus === 'good'
                ? 'text-emerald-400'
                : exposureStatus === 'under'
                ? 'text-sky-400'
                : 'text-rose-400'
            }`}
          >
            {diagnostics.exposureDescription}
          </span>
        </div>
      </div>

      {/* Bullets: 2 Key Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-300">
        {clinicalFeedback.slice(0, 2).map((item, idx) => (
          <div key={idx} className="flex items-start gap-1.5 leading-snug">
            <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
            <span className="text-[11px] text-zinc-300">{item}</span>
          </div>
        ))}
      </div>

      {/* Badges Strip */}
      {clinicalBadges.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-[#232733]">
          {clinicalBadges.map((badge, idx) => {
            let style = 'bg-[#1e222d] text-zinc-300 border-[#2a2e3c]';
            if (badge.type === 'success') style = 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40';
            if (badge.type === 'warning') style = 'bg-amber-950/40 text-amber-300 border-amber-800/40';
            if (badge.type === 'danger') style = 'bg-rose-950/40 text-rose-300 border-rose-800/40';
            if (badge.type === 'info') style = 'bg-sky-950/40 text-sky-300 border-sky-800/40';

            return (
              <span
                key={idx}
                className={`text-[10px] font-mono px-2 py-0.5 rounded border ${style} flex items-center gap-1`}
              >
                {badge.type === 'success' && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />}
                {badge.type === 'warning' && <AlertTriangle className="w-2.5 h-2.5 text-amber-400 shrink-0" />}
                {badge.type === 'danger' && <AlertOctagon className="w-2.5 h-2.5 text-rose-400 shrink-0" />}
                {badge.type === 'info' && <Info className="w-2.5 h-2.5 text-sky-400 shrink-0" />}
                <span>{badge.text}</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

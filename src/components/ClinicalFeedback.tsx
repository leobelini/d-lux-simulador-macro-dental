import React from 'react';
import { type PhotoDiagnostics } from '../utils/clinicalPhysics';
import { AlertTriangle, AlertOctagon, CheckCircle2, Award } from 'lucide-react';

interface ClinicalFeedbackProps {
  diagnostics: PhotoDiagnostics;
}

export const ClinicalFeedback: React.FC<ClinicalFeedbackProps> = ({ diagnostics }) => {
  const { clinicalScore, clinicalTitle, clinicalFeedback, clinicalBadges } = diagnostics;

  const scoreColor =
    clinicalScore >= 80
      ? 'text-emerald-400'
      : clinicalScore >= 50
      ? 'text-amber-400'
      : 'text-rose-400';

  const strokeDash = (clinicalScore / 100) * 176;

  return (
    <div className="flex flex-col gap-4 bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 shadow-xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
            <Award className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white">
            Avaliação Clínica Odontológica
          </h3>
        </div>
        <span className="text-xs font-mono text-zinc-400">Diagnóstico da Imagem</span>
      </div>

      {/* Score Header */}
      <div className="flex items-center gap-4 bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-850">
        {/* Radial gauge */}
        <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
          <svg className="w-14 h-14 -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="#27272a"
              strokeWidth="4"
              fill="transparent"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke={clinicalScore >= 80 ? '#10b981' : clinicalScore >= 50 ? '#f59e0b' : '#ef4444'}
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="176"
              strokeDashoffset={176 - strokeDash}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          </svg>
          <span className={`absolute text-sm font-mono font-bold ${scoreColor}`}>
            {clinicalScore}
          </span>
        </div>

        <div className="flex flex-col">
          <h4 className="text-sm font-bold text-zinc-100">{clinicalTitle}</h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            {clinicalScore >= 80
              ? 'Imagem com padrão ouro científico e precisão para confecção protética e estratificação de resinas.'
              : clinicalScore >= 50
              ? 'Configuração com pequenas limitações ópticas ou anatômicas.'
              : 'Configuração com artefatos severos que comprometem a documentação legal e diagnóstica.'}
          </p>
        </div>
      </div>

      {/* Badges strip */}
      <div className="flex flex-wrap gap-1.5">
        {clinicalBadges.map((badge, idx) => {
          let style = 'bg-zinc-800 text-zinc-300 border-zinc-700';
          if (badge.type === 'success') style = 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
          if (badge.type === 'warning') style = 'bg-amber-500/15 text-amber-300 border-amber-500/30';
          if (badge.type === 'danger') style = 'bg-rose-500/15 text-rose-300 border-rose-500/30';
          if (badge.type === 'info') style = 'bg-sky-500/15 text-sky-300 border-sky-500/30';

          return (
            <span
              key={idx}
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${style} flex items-center gap-1`}
            >
              {badge.type === 'success' && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              {badge.type === 'warning' && <AlertTriangle className="w-3 h-3 text-amber-400" />}
              {badge.type === 'danger' && <AlertOctagon className="w-3 h-3 text-rose-400" />}
              {badge.text}
            </span>
          );
        })}
      </div>

      {/* Bullet Insights */}
      <div className="flex flex-col gap-2">
        {clinicalFeedback.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
            <span className="text-cyan-400 mt-0.5 font-bold">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

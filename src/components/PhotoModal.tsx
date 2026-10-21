import React, { useEffect } from 'react';
import { type CameraSettings, LENS_SPECS, WB_SPECS } from '../types/camera';
import { type PhotoDiagnostics } from '../utils/clinicalPhysics';
import { DentalSubjectCanvas } from './DentalSubjectCanvas';
import confetti from 'canvas-confetti';
import { X, Award, ExternalLink } from 'lucide-react';
import { DLUX_LOGO_BASE64 } from '../assets/dluxLogo';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: CameraSettings;
  diagnostics: PhotoDiagnostics;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  settings,
  diagnostics,
}) => {
  useEffect(() => {
    if (isOpen && diagnostics.clinicalScore >= 85) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#10b981', '#38bdf8', '#fbbf24'],
        });
      } catch (e) {
        // ignore if not supported
      }
    }
  }, [isOpen, diagnostics.clinicalScore]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative flex flex-col w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh]">
        {/* Header with D-Lux Branding */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/95">
          <div className="flex items-center gap-3">
            <img src={DLUX_LOGO_BASE64} alt="D-Lux Diffuser" className="h-7 w-auto object-contain" />
            <div className="border-l border-zinc-800 pl-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                D-Lux Dental Studio <span className="text-zinc-500 font-normal">|</span> Registro Fotográfico
              </h3>
              <p className="text-xs text-amber-400/90 font-mono">Aplicação Proprietária D-Lux Diffuser • IMG_DLUX_0042.RAW</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body: Photo Preview + EXIF Sidebar */}
        <div className="flex flex-col md:flex-row overflow-y-auto">
          {/* Captured Canvas */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] p-2 border-b md:border-b-0 md:border-r border-zinc-800">
            <DentalSubjectCanvas
              focalLength={settings.focalLength}
              dofBlurCaninesPx={diagnostics.dofBlurCaninesPx}
              motionBlurPx={diagnostics.blurAmountPx}
              noiseOpacity={diagnostics.noiseOpacity}
              ambientLightContamination={diagnostics.ambientLightContamination}
              hasFlashCurtainArtifact={diagnostics.hasFlashCurtainArtifact}
              evDiff={diagnostics.evDiff}
              showFocusPeaking={false}
              showGrid={false}
              subjectMode={settings.subjectMode}
              flashMode={settings.flashMode}
              whiteBalance={settings.whiteBalance}
            />

            {/* Score Stamp Badge */}
            <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl font-mono text-xs flex items-center gap-2">
              <span className="text-zinc-400">SCORE:</span>
              <span
                className={`font-bold ${
                  diagnostics.clinicalScore >= 80
                    ? 'text-emerald-400'
                    : diagnostics.clinicalScore >= 50
                    ? 'text-amber-400'
                    : 'text-rose-400'
                }`}
              >
                {diagnostics.clinicalScore}/100
              </span>
            </div>
          </div>

          {/* EXIF Data Panel */}
          <div className="w-full md:w-80 p-5 flex flex-col gap-4 bg-zinc-900/50">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Metadados EXIF
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[10px]">LENTE</span>
                  <span className="text-cyan-300 font-bold">{settings.focalLength}mm</span>
                </div>
                <div className="bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[10px]">OBTURADOR</span>
                  <span className="text-amber-300 font-bold">{settings.shutterSpeed}s</span>
                </div>
                <div className="bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[10px]">ABERTURA</span>
                  <span className="text-emerald-300 font-bold">f/{settings.aperture}</span>
                </div>
                <div className="bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[10px]">ISO</span>
                  <span className="text-yellow-300 font-bold">{settings.iso}</span>
                </div>
                <div className="col-span-2 bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[10px]">BALANÇO DE BRANCO (WB)</span>
                  <span className="text-amber-300 font-bold">{WB_SPECS[settings.whiteBalance].label}</span>
                </div>
                <div className="col-span-2 bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[10px]">ILUMINAÇÃO & DIFUSOR</span>
                  <span className="text-white font-bold">
                    {settings.flashMode === 'twin' && 'Twin Flash + Difusor D-Lux MF-12'}
                    {settings.flashMode === 'studio' && 'Estúdio + Bouncers / Softbox D-Lux'}
                    {settings.flashMode === 'ring' && 'Ring Flash + Difusor D-Lux YN-14'}
                    {settings.flashMode === 'off' && 'Sem Flash (Luz Ambiente Clínica)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Verdict */}
            <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-850">
              <span className="text-xs font-bold text-white block mb-1">
                {diagnostics.clinicalTitle}
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {diagnostics.clinicalFeedback[0] || 'Foto registrada com sucesso.'}
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800">
              <a
                href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-medium transition-colors"
              >
                <span>Conhecer Difusores D-Lux</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={onClose}
                className="w-full py-2 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors"
              >
                Voltar à Câmera
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

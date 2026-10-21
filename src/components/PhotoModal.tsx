import React from 'react';
import { type CameraSettings, LENS_SPECS, WB_SPECS } from '../types/camera';
import { type PhotoDiagnostics } from '../utils/clinicalPhysics';
import { DentalSubjectCanvas } from './DentalSubjectCanvas';
import { X, ExternalLink } from 'lucide-react';
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="relative flex flex-col w-full max-w-4xl bg-[#12141a] border border-[#272a36] rounded-xl shadow-2xl overflow-hidden max-h-[95vh] sm:max-h-[92vh]">
        {/* Header with D-Lux Branding */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#232733] bg-[#161820]">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img src={DLUX_LOGO_BASE64} alt="D-Lux Diffuser" className="h-6 sm:h-7 w-auto object-contain shrink-0" />
            <div className="border-l border-zinc-800 pl-2 sm:pl-3 truncate">
              <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                <span>D-Lux Dental Studio</span>
                <span className="text-zinc-500 font-normal hidden sm:inline">|</span>
                <span className="text-zinc-400 font-normal hidden sm:inline">Registro Fotográfico</span>
              </h3>
              <p className="text-[10px] sm:text-xs text-amber-400/90 font-mono truncate">IMG_DLUX_0042.RAW • Calibração Clínica</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body: Photo Preview + EXIF Sidebar */}
        <div className="flex flex-col md:flex-row overflow-y-auto">
          {/* Captured Canvas */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[220px] sm:min-h-[300px] p-2 border-b md:border-b-0 md:border-r border-zinc-800">
            <DentalSubjectCanvas
              focalLength={settings.focalLength}
              aperture={settings.aperture}
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
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/75 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl font-mono text-[11px] sm:text-xs flex items-center gap-1.5 sm:gap-2">
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
          <div className="w-full md:w-80 p-3.5 sm:p-5 flex flex-col gap-3 sm:gap-4 bg-zinc-900/50">
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Metadados EXIF
              </h4>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono">
                <div className="bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">LENTE</span>
                  <span className="text-cyan-300 font-bold">{settings.focalLength}mm</span>
                </div>
                <div className="bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">OBTURADOR</span>
                  <span className="text-amber-300 font-bold">{settings.shutterSpeed}s</span>
                </div>
                <div className="bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">ABERTURA</span>
                  <span className="text-emerald-300 font-bold">f/{settings.aperture}</span>
                </div>
                <div className="bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">ISO</span>
                  <span className="text-yellow-300 font-bold">{settings.iso}</span>
                </div>
                <div className="col-span-2 bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">BALANÇO DE BRANCO (WB)</span>
                  <span className="text-amber-300 font-bold">{WB_SPECS[settings.whiteBalance].label}</span>
                </div>
                <div className="col-span-2 bg-zinc-950/80 p-2 rounded-lg border border-zinc-850">
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">ILUMINAÇÃO & DIFUSOR</span>
                  <span className="text-white font-bold text-[11px] sm:text-xs">
                    {settings.flashMode === 'twin' && 'Twin Flash + Difusor D-Lux MF-12'}
                    {settings.flashMode === 'studio' && 'Estúdio + Bouncers / Softbox D-Lux'}
                    {settings.flashMode === 'ring' && 'Ring Flash + Difusor D-Lux YN-14'}
                    {settings.flashMode === 'off' && 'Sem Flash (Luz Ambiente Clínica)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Verdict */}
            <div className="bg-zinc-950/80 p-2.5 sm:p-3 rounded-xl border border-zinc-850">
              <span className="text-xs font-bold text-white block mb-1">
                {diagnostics.clinicalTitle}
              </span>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                {diagnostics.clinicalFeedback[0] || 'Foto registrada com sucesso.'}
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800">
              <a
                href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-medium transition-colors"
              >
                <span>Conhecer Difusores D-Lux</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 active:scale-98 text-white font-semibold text-xs transition-all cursor-pointer"
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

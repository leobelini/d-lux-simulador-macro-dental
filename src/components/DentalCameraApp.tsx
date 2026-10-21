import React, { useState } from 'react';
import { type CameraSettings } from '../types/camera';
import { evaluateDentalPhoto } from '../utils/clinicalPhysics';
import { CameraViewfinder } from './CameraViewfinder';
import { OpticalDiagram } from './OpticalDiagram';
import { CameraControls } from './CameraControls';
import { PresetSelector } from './PresetSelector';
import { ClinicalFeedback } from './ClinicalFeedback';
import { PhotoModal } from './PhotoModal';
import { ExternalLink } from 'lucide-react';
import { DLUX_LOGO_BASE64 } from '../assets/dluxLogo';

export const DentalCameraApp: React.FC = () => {
  // Default to dental photography gold standard: 100mm Macro, 1/160s, ISO 100, f/22, Twin Flash
  const [settings, setSettings] = useState<CameraSettings>({
    focalLength: 100,
    shutterSpeed: '1/160',
    iso: 100,
    aperture: 22,
    flashMode: 'twin',
    subjectMode: 'natural',
    whiteBalance: 'flash',
  });

  const [activeTab, setActiveTab] = useState<'viewfinder' | 'diagram'>('viewfinder');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);

  const diagnostics = evaluateDentalPhoto(settings);

  const updateSetting = <K extends keyof CameraSettings>(key: K, value: CameraSettings[K]) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSelectPreset = (newSettings: CameraSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="min-h-screen bg-[#0e1015] text-zinc-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* Top Header: Authentic Studio Equipment Console Bar */}
      <header className="border-b border-[#252834] bg-[#14161e] sticky top-0 z-40 px-3 lg:px-6 py-2">
        <div className="max-w-[1520px] mx-auto flex items-center justify-between gap-3">
          {/* Brand & App Title */}
          <div className="flex items-center gap-3">
            <a
              href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-90 transition-opacity"
              title="Acessar Loja Oficial D-Lux Diffuser"
            >
              <img
                src={DLUX_LOGO_BASE64}
                alt="D-Lux Diffuser"
                className="h-8 w-auto object-contain"
              />
            </a>

            <div className="border-l border-[#272a38] pl-2.5">
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold text-white tracking-tight">
                  Simulador Macro Odontológico
                </h1>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase">
                  D-Lux Studio
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 hidden md:block">
                Console óptico de calibração para fotografia odontológica e difusores
              </p>
            </div>
          </div>

          {/* Right Header: View Mode Switcher + Store Link */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#101217] p-0.5 rounded-lg border border-[#272a38] text-xs font-medium">
              <button
                onClick={() => setActiveTab('viewfinder')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'viewfinder'
                    ? 'bg-zinc-200 text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Visor da Câmera
              </button>
              <button
                onClick={() => setActiveTab('diagram')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'diagram'
                    ? 'bg-zinc-200 text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Distância Clínica
              </button>
            </div>

            {/* Store Link */}
            <a
              href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#20232e] hover:bg-[#282c3a] text-amber-300 border border-amber-400/30 text-xs font-semibold transition-colors"
            >
              <span>Loja D-Lux</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Studio Workstation: Compact Single-View Workspace */}
      <main className="flex-1 max-w-[1520px] w-full mx-auto p-2.5 sm:p-4 flex flex-col gap-2.5">
        {/* Horizontal Scenario Strip (100% visible on top) */}
        <PresetSelector currentSettings={settings} onSelectPreset={handleSelectPreset} />

        {/* 2-Column Balanced Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
          {/* Left Side: Visual Simulation + Immediate Clinical Evaluation (Stacked together) */}
          <div className="lg:col-span-7 flex flex-col gap-2.5">
            {/* Main Visual Display */}
            {activeTab === 'viewfinder' ? (
              <CameraViewfinder
                settings={settings}
                diagnostics={diagnostics}
                onUpdateSetting={updateSetting}
                onTakePhoto={() => setIsPhotoModalOpen(true)}
              />
            ) : (
              <OpticalDiagram settings={settings} />
            )}

            {/* Immediate Diagnosis & Score: Right under the photo, zero scrolling! */}
            <ClinicalFeedback diagnostics={diagnostics} />
          </div>

          {/* Right Side: Camera Control Rack (Everything in view) */}
          <div className="lg:col-span-5">
            <CameraControls
              settings={settings}
              onUpdateSetting={updateSetting}
            />
          </div>
        </div>

        {/* Compact Footer */}
        <footer className="mt-auto pt-2 border-t border-[#232733] text-[11px] text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-semibold">© 2026 D-Lux Diffuser.</span>
            <span>Aplicação proprietária para calibração óptica odontológica.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-zinc-400">
              Padrão Ouro Recomendado: 100mm Macro + Difusor Twin D-Lux (MF-12)
            </span>
            <a
              href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
            >
              <span>dluxdiffuser.lojavirtualnuvem.com.br</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </footer>
      </main>

      {/* RAW Photo Capture Modal */}
      <PhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        settings={settings}
        diagnostics={diagnostics}
      />
    </div>
  );
};

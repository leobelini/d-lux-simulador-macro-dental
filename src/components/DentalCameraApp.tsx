import React, { useState } from 'react';
import { type CameraSettings } from '../types/camera';
import { evaluateDentalPhoto } from '../utils/clinicalPhysics';
import { CameraViewfinder } from './CameraViewfinder';
import { OpticalDiagram } from './OpticalDiagram';
import { CameraControls } from './CameraControls';
import { PresetSelector } from './PresetSelector';
import { ClinicalFeedback } from './ClinicalFeedback';
import { PhotoModal } from './PhotoModal';
import { Camera, ExternalLink } from 'lucide-react';
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

  const [activeTab, setActiveTab] = useState<'viewfinder' | 'diagram' | 'both'>('both');
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
    <div className="min-h-screen bg-[#090c13] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* Top Navigation Bar with D-Lux Official Brand */}
      <header className="border-b border-zinc-800 bg-[#0d111a]/95 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* D-Lux Official Logo */}
            <a
              href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center transition-transform hover:scale-105"
              title="Acessar D-Lux Diffuser Oficial"
            >
              <img
                src={DLUX_LOGO_BASE64}
                alt="D-Lux Diffuser Logo"
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(245,158,11,0.25)]"
              />
            </a>

            <div className="border-l border-zinc-800 pl-3">
              <div className="flex items-center gap-2">
                <h1 className="text-base font-extrabold text-white tracking-tight">
                  Simulador Macro Odontológico
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 rounded-full tracking-wider uppercase">
                  D-LUX PROPRIETARY
                </span>
              </div>
              <p className="text-xs text-zinc-400 hidden sm:block">
                Software proprietário D-Lux para calibração óptica e fotografia odontológica com difusores
              </p>
            </div>
          </div>

          {/* Right Header: Store link & Tab mode */}
          <div className="flex items-center gap-3">
            <a
              href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Loja D-Lux</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          {/* View Mode Toggle (Desktop & Mobile) */}
          <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs font-medium">
            <button
              onClick={() => setActiveTab('viewfinder')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'viewfinder'
                  ? 'bg-cyan-600 text-white shadow font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Visor Câmera
            </button>
            <button
              onClick={() => setActiveTab('diagram')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'diagram'
                  ? 'bg-cyan-600 text-white shadow font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Distância Clínica
            </button>
            <button
              onClick={() => setActiveTab('both')}
              className={`hidden md:block px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'both'
                  ? 'bg-cyan-600 text-white shadow font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Visão Completa
            </button>
          </div>
        </div>
        </div>
      </header>

      {/* Main Single-Screen Interactive Dashboard */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 flex flex-col gap-6">
        {/* Quick Clinical Presets Strip (One-Click Scenarios) */}
        <PresetSelector currentSettings={settings} onSelectPreset={handleSelectPreset} />

        {/* Core Interactive Section: Split View Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Visual Simulators (Viewfinder and/or Optical Clinic Diagram) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Camera Viewfinder */}
            {(activeTab === 'viewfinder' || activeTab === 'both') && (
              <CameraViewfinder
                settings={settings}
                diagnostics={diagnostics}
                onUpdateSetting={updateSetting}
                onTakePhoto={() => setIsPhotoModalOpen(true)}
              />
            )}

            {/* Optical Clinic Diagram */}
            {(activeTab === 'diagram' || activeTab === 'both') && (
              <OpticalDiagram settings={settings} />
            )}
          </div>

          {/* Right Column: Physical Controls & Intelligent Feedback */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* The 3 Core Required Controls + Aperture & Flash */}
            <CameraControls
              settings={settings}
              onUpdateSetting={updateSetting}
            />

            {/* Intelligent Clinical Photo Diagnosis */}
            <ClinicalFeedback diagnostics={diagnostics} />
          </div>
        </div>

        {/* Official D-Lux Proprietary Footer & Copyright */}
        <footer className="mt-auto pt-6 border-t border-zinc-800 text-xs text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <a
              href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 opacity-80 transition-opacity"
            >
              <img src={DLUX_LOGO_BASE64} alt="D-Lux Diffuser" className="h-7 w-auto object-contain" />
            </a>
            <div>
              <p className="text-zinc-200 font-bold">
                © 2026 D-Lux Diffuser. Todos os direitos reservados.
              </p>
              <p className="text-[11px] text-zinc-400">
                Aplicação proprietária desenvolvida para calibração, treinamento e fotografia macro odontológica.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Recomendado: <strong>100mm Macro + Difusor Twin D-Lux (Godox MF-12)</strong></span>
            </div>
            <a
              href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-4 flex items-center gap-1"
            >
              <span>dluxdiffuser.lojavirtualnuvem.com.br</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </footer>
      </main>

      {/* Captured Photo Fullscreen / EXIF Modal */}
      <PhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        settings={settings}
        diagnostics={diagnostics}
      />
    </div>
  );
};

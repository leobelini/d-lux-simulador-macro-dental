import React, { useState } from 'react';
import { type CameraSettings } from '../types/camera';
import { evaluateDentalPhoto } from '../utils/clinicalPhysics';
import { CameraViewfinder } from './CameraViewfinder';
import { OpticalDiagram } from './OpticalDiagram';
import { CameraControls } from './CameraControls';
import { PresetSelector } from './PresetSelector';
import { ClinicalFeedback } from './ClinicalFeedback';
import { PhotoModal } from './PhotoModal';
import { ExternalLink, Camera as CameraIcon, ShoppingBag } from 'lucide-react';
import { DLUX_LOGO_BASE64 } from '../assets/dluxLogo';
import { sounds } from '../utils/soundEffects';
import { shutterSpeedToSeconds } from '../types/camera';

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

  const handleTriggerPhoto = () => {
    sounds.playShutter(shutterSpeedToSeconds(settings.shutterSpeed));
    setIsPhotoModalOpen(true);
  };

  const scoreDotColor =
    diagnostics.clinicalScore >= 80
      ? 'bg-emerald-400'
      : diagnostics.clinicalScore >= 50
      ? 'bg-amber-400'
      : 'bg-rose-400';

  return (
    <div className="min-h-screen bg-[#0e1015] text-zinc-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* Top Header: Authentic Studio Equipment Console Bar */}
      <header className="border-b border-[#252834] bg-[#14161e] sticky top-0 z-40 px-2.5 sm:px-4 lg:px-6 py-1.5 sm:py-2">
        <div className="max-w-[1520px] mx-auto flex items-center justify-between gap-2 sm:gap-3">
          {/* Brand & App Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <a
              href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-90 transition-opacity shrink-0"
              title="Acessar Loja Oficial D-Lux Diffuser"
            >
              <img
                src={DLUX_LOGO_BASE64}
                alt="D-Lux Diffuser"
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </a>

            <div className="border-l border-[#272a38] pl-2 sm:pl-2.5 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h1 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                  <span className="sm:hidden">Simulador Macro</span>
                  <span className="hidden sm:inline">Simulador Macro Odontológico</span>
                </h1>
                <span className="hidden xs:inline-block px-1.5 py-0.2 rounded text-[8px] sm:text-[9px] font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase shrink-0">
                  D-Lux
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 hidden md:block">
                Console óptico de calibração para fotografia odontológica e difusores
              </p>
            </div>
          </div>

          {/* Right Header: View Mode Switcher + Store Link */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#101217] p-0.5 rounded-lg border border-[#272a38] text-xs font-medium">
              <button
                onClick={() => setActiveTab('viewfinder')}
                className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors cursor-pointer text-[11px] sm:text-xs ${
                  activeTab === 'viewfinder'
                    ? 'bg-zinc-200 text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="sm:hidden">Visor</span>
                <span className="hidden sm:inline">Visor da Câmera</span>
              </button>
              <button
                onClick={() => setActiveTab('diagram')}
                className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors cursor-pointer text-[11px] sm:text-xs ${
                  activeTab === 'diagram'
                    ? 'bg-zinc-200 text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="sm:hidden">Esquema</span>
                <span className="hidden sm:inline">Distância Clínica</span>
              </button>
            </div>

            {/* Store Link: Responsive (icon on mobile, full pill on desktop) */}
            <a
              href="https://dluxdiffuser.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-[#20232e] hover:bg-[#282c3a] text-amber-300 border border-amber-400/30 text-xs font-semibold transition-colors shrink-0"
              title="Acessar Loja Oficial D-Lux Diffuser"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:hidden text-amber-300" />
              <span className="hidden sm:inline">Loja D-Lux</span>
              <ExternalLink className="hidden sm:inline w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Studio Workstation: Compact Single-View Workspace */}
      <main className="flex-1 max-w-[1520px] w-full mx-auto p-2 sm:p-3 lg:p-4 flex flex-col gap-2 sm:gap-2.5 pb-20 lg:pb-4">
        {/* Horizontal Scenario Strip (Smooth touch scroll on mobile) */}
        <PresetSelector currentSettings={settings} onSelectPreset={handleSelectPreset} />

        {/* 2-Column Balanced Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-3 items-start">
          {/* Left Side: Visual Simulation + Immediate Clinical Evaluation (Stacked together) */}
          <div className="lg:col-span-7 flex flex-col gap-2 sm:gap-2.5">
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

            {/* Immediate Diagnosis & Score: Right under the photo */}
            <ClinicalFeedback diagnostics={diagnostics} />
          </div>

          {/* Right Side: Camera Control Rack (With mobile category pills) */}
          <div className="lg:col-span-5">
            <CameraControls
              settings={settings}
              onUpdateSetting={updateSetting}
            />
          </div>
        </div>

        {/* Compact Footer */}
        <footer className="mt-auto pt-3 border-t border-[#232733] text-[11px] text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
            <span className="text-zinc-300 font-semibold">© 2026 D-Lux Diffuser.</span>
            <span>Aplicação proprietária para calibração óptica odontológica.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-zinc-400">
              Padrão Ouro: 100mm Macro + Difusor Twin D-Lux (MF-12)
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

      {/* Mobile Floating Action Bar (Sticky at bottom on phones, hidden on desktop) */}
      <aside
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#12141c]/95 backdrop-blur-md border-t border-[#252834] px-3.5 py-2 flex items-center justify-between shadow-2xl"
        style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      >
        {/* Left: Quick Live Status Pill */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#1b1e28] border border-[#2a2e3e] font-mono text-xs">
            <span className={`w-2 h-2 rounded-full ${scoreDotColor}`}></span>
            <span className="font-bold text-white">{diagnostics.clinicalScore}/100</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400 truncate max-w-[130px] font-medium">
              {diagnostics.exposureDescription}
            </span>
            <span className="text-[9px] text-zinc-500 font-mono">
              f/{settings.aperture} • {settings.shutterSpeed}s • ISO {settings.iso}
            </span>
          </div>
        </div>

        {/* Right: Tactile Shutter Button */}
        <button
          onClick={handleTriggerPhoto}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 active:scale-95 text-black font-bold text-xs rounded-lg shadow-md transition-all cursor-pointer"
        >
          <CameraIcon className="w-4 h-4 fill-black/20" />
          <span>Disparar Foto</span>
        </button>
      </aside>

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

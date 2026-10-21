import React, { useState } from 'react';
import { type CameraSettings } from '../types/camera';
import { evaluateDentalPhoto } from '../utils/clinicalPhysics';
import { CameraViewfinder } from './CameraViewfinder';
import { OpticalDiagram } from './OpticalDiagram';
import { CameraControls } from './CameraControls';
import { PresetSelector } from './PresetSelector';
import { ClinicalFeedback } from './ClinicalFeedback';
import { PhotoModal } from './PhotoModal';
import { Camera } from 'lucide-react';

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
    <div className="min-h-screen bg-[#090c13] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Navigation Bar */}
      <header className="border-b border-zinc-800 bg-[#0d111a]/90 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-white tracking-tight">
                  Simulador de Fotografia Macro Odontológica
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
                  ODONTO PRO
                </span>
              </div>
              <p className="text-xs text-zinc-400 hidden sm:block">
                Aprenda na prática a relação entre Lente, Obturador, ISO e Abertura na fotografia de dentes e sorriso
              </p>
            </div>
          </div>

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

        {/* Educational Reference Footer for Dental Photography */}
        <div className="mt-auto pt-6 border-t border-zinc-805 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>
              Configuração Padrão Ouro: <strong className="text-zinc-300">100mm Macro • 1/160s • ISO 100 • f/22 • Twin Flash</strong>
            </span>
          </div>
          <div className="text-zinc-400 font-mono text-[11px]">
            Simulador Didático Interativo com Astro + React
          </div>
        </div>
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

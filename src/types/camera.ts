export type FocalLength = 60 | 85 | 100 | 180;

export type ShutterSpeed = '1/30' | '1/60' | '1/125' | '1/160' | '1/200' | '1/250' | '1/500' | '1/1000';

export type ISO = 100 | 200 | 400 | 800 | 1600 | 3200 | 6400;

export type Aperture = 2.8 | 4 | 5.6 | 8 | 11 | 16 | 22 | 32;

export type FlashMode = 'twin' | 'ring' | 'studio' | 'off';

export type SubjectMode = 'natural' | 'ortho' | 'vita';

export interface CameraSettings {
  focalLength: FocalLength;
  shutterSpeed: ShutterSpeed;
  iso: ISO;
  aperture: Aperture;
  flashMode: FlashMode;
  subjectMode: SubjectMode;
}

export interface Preset {
  id: string;
  name: string;
  tag: 'Padrão Clínico' | 'Retrato' | 'Cirúrgico' | 'Erro Comum';
  description: string;
  settings: CameraSettings;
  badgeColor: string;
}

// Convert shutter speed string into numeric seconds
export function shutterSpeedToSeconds(speed: ShutterSpeed): number {
  const parts = speed.split('/');
  if (parts.length === 2) {
    return 1 / parseFloat(parts[1]);
  }
  return parseFloat(speed);
}

// Optical & working distance metadata for macro lenses
export const LENS_SPECS: Record<FocalLength, {
  name: string;
  label: string;
  workingDistanceCm: number;
  magnification: string;
  perspective: string;
  clinicalAdvantage: string;
  fieldOfView: number; // degrees approx
}> = {
  60: {
    name: '60mm f/2.8 Macro',
    label: '60mm',
    workingDistanceCm: 15,
    magnification: '1:1',
    perspective: 'Ligeira distorção convexa nos dentes anteriores pelo ângulo aberto próximo.',
    clinicalAdvantage: 'Muito próximo à boca do paciente. Risco de encostar no afastador labial e assustar o paciente.',
    fieldOfView: 39,
  },
  85: {
    name: '85mm f/2.8 Macro',
    label: '85mm',
    workingDistanceCm: 22,
    magnification: '1:1.5',
    perspective: 'Excelente para fotografia de face e sorriso completo (1:2).',
    clinicalAdvantage: 'Boa distância para fotografia de sorriso e lábios em repouso.',
    fieldOfView: 28,
  },
  100: {
    name: '100mm f/2.8L Macro',
    label: '100mm (Padrão Ouro)',
    workingDistanceCm: 32,
    magnification: '1:1',
    perspective: 'Zero distorção. Proporções anatômicas reais dos incisivos e caninos.',
    clinicalAdvantage: 'Distância perfeita (~32cm). Espaço ideal para posicionar flashes Twin e espelhos oclusais sem colidir.',
    fieldOfView: 24,
  },
  180: {
    name: '180mm f/3.5 Tele-Macro',
    label: '180mm (Cirúrgico)',
    workingDistanceCm: 55,
    magnification: '1:1',
    perspective: 'Alta compressão de planos e fundo totalmente isolado.',
    clinicalAdvantage: 'Excelente para cirurgias periodontais e implantes: dentista fica a 55cm sem contaminar o campo cirúrgico.',
    fieldOfView: 13,
  },
};

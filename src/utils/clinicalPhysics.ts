import { type CameraSettings, shutterSpeedToSeconds, LENS_SPECS } from '../types/camera';

export interface PhotoDiagnostics {
  evDiff: number; // -3 (very dark) to +3 (blown out)
  exposureDescription: string;
  exposureStatus: 'under' | 'good' | 'over';
  blurAmountPx: number; // Motion blur
  dofBlurCaninesPx: number; // Depth of field blur for teeth behind focal plane
  noiseOpacity: number; // 0 to 1
  hasFlashCurtainArtifact: boolean; // Shutter speed > x-sync
  ambientLightContamination: number; // 0 to 1 (yellowish room light)
  clinicalScore: number; // 0 - 100
  clinicalTitle: string;
  clinicalFeedback: string[];
  clinicalBadges: { text: string; type: 'success' | 'warning' | 'danger' | 'info' }[];
}

export function evaluateDentalPhoto(settings: CameraSettings): PhotoDiagnostics {
  const { focalLength, shutterSpeed, iso, aperture, flashMode, whiteBalance } = settings;
  const shutterSec = shutterSpeedToSeconds(shutterSpeed);
  const lens = LENS_SPECS[focalLength];

  // 1. Flash Sync Limitation (X-Sync is typically 1/200s or 1/250s)
  const hasFlashCurtainArtifact = shutterSec < 1 / 220 && flashMode !== 'off';

  // 2. Motion blur calculation
  // At macro magnification (1:1), motion is magnified 10x!
  let blurAmountPx = 0;
  if (flashMode === 'off') {
    // Relying on continuous ambient light: shutter speed causes massive motion blur
    if (shutterSec > 1 / 100) {
      blurAmountPx = (shutterSec / (1 / 30)) * 14;
    }
  } else {
    // Flash freezes action (flash duration ~ 1/1200s), but ambient ghosting can occur if shutter is very slow
    if (shutterSec > 1 / 40) {
      blurAmountPx = 3.5; // slight ghosting from ambient light
    } else if (shutterSec > 1 / 80) {
      blurAmountPx = 1.0;
    } else {
      blurAmountPx = 0; // frozen
    }
  }

  // 3. Depth of Field (DoF) calculation
  // In macro photography at 1:1, DoF is inversely proportional to aperture
  // f/2.8 has razor-thin DoF (~0.8mm), f/22 has deep DoF (~7-8mm)
  // We calculate blur for posterior structures (canines/premolars/gums)
  let dofBlurCaninesPx = 0;
  if (aperture <= 2.8) {
    dofBlurCaninesPx = 16;
  } else if (aperture <= 4) {
    dofBlurCaninesPx = 11;
  } else if (aperture <= 5.6) {
    dofBlurCaninesPx = 7.5;
  } else if (aperture <= 8) {
    dofBlurCaninesPx = 4.5;
  } else if (aperture <= 11) {
    dofBlurCaninesPx = 2.5;
  } else if (aperture <= 16) {
    dofBlurCaninesPx = 1.0;
  } else if (aperture <= 22) {
    dofBlurCaninesPx = 0; // perfectly sharp full arch
  } else {
    // f/32 - deep DoF but slight diffraction softening overall
    dofBlurCaninesPx = 0.4;
  }

  // 4. ISO Noise (Grain)
  // ISO 100 has zero noise; ISO 6400 has heavy luminance and chromatic noise
  let noiseOpacity = 0;
  if (iso === 100) noiseOpacity = 0;
  else if (iso === 200) noiseOpacity = 0.04;
  else if (iso === 400) noiseOpacity = 0.12;
  else if (iso === 800) noiseOpacity = 0.25;
  else if (iso === 1600) noiseOpacity = 0.45;
  else if (iso === 3200) noiseOpacity = 0.7;
  else noiseOpacity = 0.92;

  // 5. Exposure Value & Light Contamination
  // Dental standard: f/22, 1/160s, ISO 100 with Twin Flash = EV 0 (Perfeito)
  let exposureScore = 0;

  if (flashMode === 'off') {
    // Ambient clinical light: extremely dim at f/22!
    // A dental clinic room light is roughly EV 6-7.
    // At f/22, 1/160s, ISO 100, the picture will be almost pitch black (-3.5 EV)!
    const baseEv = Math.log2((aperture * aperture) / shutterSec) - Math.log2(iso / 100);
    // Clinic ambient is EV 7.5
    const diff = 7.5 - baseEv;
    exposureScore = Math.max(-3, Math.min(3, diff));
  } else {
    // Flash provides calibrated pulse!
    // Target aperture for flash standard power is f/22 at ISO 100.
    // If aperture is opened to f/2.8, flash dumps 64x too much light = blown out!
    let flashEv = 0;
    // Aperture difference from standard f/22:
    // f/2.8 (+6 stops), f/4 (+5), f/5.6 (+4), f/8 (+3), f/11 (+2), f/16 (+1), f/22 (0), f/32 (-1)
    const apertureStops = {
      2.8: 6,
      4: 5,
      5.6: 4,
      8: 3,
      11: 2,
      16: 1,
      22: 0,
      32: -1,
    }[aperture];

    const isoStops = Math.log2(iso / 100); // ISO 100 = 0, ISO 200 = 1, ISO 400 = 2, etc.

    flashEv = apertureStops + isoStops;

    if (hasFlashCurtainArtifact) {
      flashEv -= 1.5; // light blocked by curtain
    }

    exposureScore = Math.max(-3, Math.min(3, flashEv));
  }

  // Ambient light contamination (yellowish tungsten/fluorescent 3500K clinic ceiling light)
  // Happens when shutter speed is slow (< 1/100s) or flash is off
  let ambientLightContamination = 0;
  if (flashMode === 'off') {
    ambientLightContamination = 0.85;
  } else if (shutterSec > 1 / 40) {
    ambientLightContamination = 0.6;
  } else if (shutterSec > 1 / 80) {
    ambientLightContamination = 0.25;
  } else {
    ambientLightContamination = 0.0; // Flash cancels 100% ambient light
  }

  // 6. Clinical evaluation & feedback
  const feedback: string[] = [];
  const badges: { text: string; type: 'success' | 'warning' | 'danger' | 'info' }[] = [];
  let score = 100;

  // Evaluate Lens Focal Length
  if (focalLength === 100) {
    badges.push({ text: 'Distância Focal Ouro (100mm)', type: 'success' });
    feedback.push('A lente 100mm Macro proporciona a distância de trabalho ergonômica ideal (~32cm), sem deformação anatômica dos incisivos.');
  } else if (focalLength === 60) {
    score -= 10;
    badges.push({ text: '60mm: Distância Muito Curta', type: 'warning' });
    feedback.push('Lente 60mm obriga o dentista a fotografar a 15cm da boca. Risco de assustar o paciente, bater no espelho oclusal e distorcer a linha média.');
  } else if (focalLength === 180) {
    score -= 5;
    badges.push({ text: '180mm: Macro Teleobjetiva', type: 'info' });
    feedback.push('Distância de 55cm excelente para cirurgia/periodontia, mas lente é pesada e exige muita estabilização manual.');
  } else if (focalLength === 85) {
    badges.push({ text: '85mm: Ideal para Retrato/Face', type: 'info' });
    feedback.push('Ótima distância para fotografias de sorriso completo (1:2) e terço inferior da face.');
  }

  // Evaluate Shutter Speed
  if (hasFlashCurtainArtifact) {
    score -= 40;
    badges.push({ text: 'Erro de Sincronismo do Flash', type: 'danger' });
    feedback.push('ALERTA: Velocidade muito alta (' + shutterSpeed + 's)! A cortina do obturador fechou antes do flash terminar, gerando faixa preta na foto.');
  } else if (shutterSec > 1 / 60) {
    score -= 25;
    badges.push({ text: 'Velocidade Lenta (Tremor)', type: 'danger' });
    feedback.push('Velocidade lenta (' + shutterSpeed + 's) causa foto tremida pelo tremor natural das mãos e respiração do paciente, além de captar luz amarelada do consultório.');
  } else if (shutterSec >= 1 / 200 && shutterSec <= 1 / 125) {
    badges.push({ text: 'Velocidade de Sincronismo Perfeita (' + shutterSpeed + ')', type: 'success' });
    feedback.push('Velocidade ideal (' + shutterSpeed + 's): congela movimentos e anula completamente a luz espúria do consultório.');
  }

  // Evaluate ISO
  if (iso === 100) {
    badges.push({ text: 'ISO 100: Máxima Fidelidade de Cor', type: 'success' });
    feedback.push('ISO 100 garante ruído zero, permitindo mapeamento de mamelos, opalescência e halo incisal para estratificação de resinas.');
  } else if (iso <= 400) {
    score -= 8;
    badges.push({ text: 'ISO Moderado', type: 'info' });
    feedback.push('Leve textura digital aceitável, mas ISO 100 é preferível para documentação estética.');
  } else {
    score -= 30;
    badges.push({ text: 'ISO Elevado: Ruído Destrutivo', type: 'danger' });
    feedback.push('ISO muito alto (' + iso + ') gera granulação pesada. Impossibilita diagnóstico refinado de trincas de esmalte e seleção de cor VITA.');
  }

  // Evaluate Aperture
  if (aperture >= 22 && aperture <= 25) {
    badges.push({ text: 'f/22: Profundidade Total de Arco', type: 'success' });
    feedback.push('Abertura f/22 garante foco cravado desde os incisivos centrais até os caninos e papilas gengivais na escala 1:1.');
  } else if (aperture <= 4) {
    score -= 35;
    badges.push({ text: 'Abertura Muito Aberta (f/' + aperture + ')', type: 'danger' });
    feedback.push('Abertura excessivamente aberta em macro resulta em profundidade de campo milimétrica (< 1mm). Apenas a ponta do dente fica nítida!');
  } else if (aperture <= 8) {
    score -= 15;
    badges.push({ text: 'f/' + aperture + ': Foco Raso', type: 'warning' });
    feedback.push('f/' + aperture + ' é bom para retrato de rosto, mas insuficiente para foto intraoral de arco completo (caninos desfocados).');
  } else if (aperture === 32) {
    score -= 5;
    badges.push({ text: 'f/32: Leve Difração Óptica', type: 'info' });
    feedback.push('f/32 dá máxima profundidade, mas a difração óptica da lente reduz sutilmente o micro-contraste do esmalte.');
  }

  // Evaluate Flash
  if (flashMode === 'off') {
    score = Math.min(score, 30);
    badges.push({ text: 'Sem Flash Estroboscópico', type: 'danger' });
    feedback.push('Fotografia macro intraoral sem flash depende da luz ambiente do consultório, que contamina as cores dentárias com tons amarelados (3000K).');
  } else if (flashMode === 'twin') {
    badges.push({ text: 'Flash Twin (Estética & Textura)', type: 'success' });
    feedback.push('Flash Twin lateral cria micro-sombras ideais para destacar as periquimáceas e linhas de desenvolvimento vestibular do esmalte.');
  } else if (flashMode === 'studio') {
    badges.push({ text: 'Flash de Estúdio (Softbox)', type: 'success' });
    feedback.push('Flash de Estúdio com Softbox/Stripbox: Luz suave e difusa com reflexos alongados nas arestas de transição dos dentes. Padrão nobre para fotografia de protocolo estético e cursos odontológicos.');
  } else if (flashMode === 'ring') {
    badges.push({ text: 'Flash Ring (Luz Circular Plana)', type: 'info' });
    feedback.push('Flash Circular ilumina fundo de boca e molares sem sombras, ideal para ortodontia e oclusal, embora "achate" um pouco a textura vestibular.');
  }

  // Evaluate White Balance (WB)
  if (whiteBalance === 'flash') {
    badges.push({ text: 'WB Flash (5500K Neutro)', type: 'success' });
    feedback.push('Balanço de Branco em 5500K (Flash): Temperatura neutra ideal, garantindo fidelidade de cor para seleção de resinas e cerâmicas.');
  } else if (whiteBalance === 'custom') {
    badges.push({ text: 'WB Cartão Cinza 18%', type: 'success' });
    feedback.push('Calibração personalizada com cartão cinza 18%: Precisão laboratorial máxima para tomada de cor e envio ao protético.');
  } else if (whiteBalance === 'cloudy') {
    score -= 20;
    badges.push({ text: 'WB Nublado: Tom Amarelado', type: 'warning' });
    feedback.push('ALERTA WB (6500K): Imagem excessivamente quente/amarelada. Risco de induzir o dentista a escolher uma resina mais escura que o dente real.');
  } else if (whiteBalance === 'tungsten') {
    score -= 25;
    badges.push({ text: 'WB Tungstênio: Tom Frio/Azulado', type: 'danger' });
    feedback.push('ALERTA WB (3200K): A câmera aplica filtro azul, deixando os dentes acinzentados e destruindo a leitura da opalescência incisal.');
  }

  score = Math.max(10, Math.min(100, score));

  let clinicalTitle = 'Excelente Configuração Clínica';
  if (score < 40) clinicalTitle = 'Foto Inadequada para Documentação';
  else if (score < 75) clinicalTitle = 'Configuração com Restrições Clínicas';

  let exposureStatus: 'under' | 'good' | 'over' = 'good';
  let exposureDescription = 'Exposição correta (luz equilibrada)';
  if (exposureScore < -1) {
    exposureStatus = 'under';
    exposureDescription = 'Subexposta (escura, perda de detalhes nas sombras)';
  } else if (exposureScore > 1.2) {
    exposureStatus = 'over';
    exposureDescription = 'Superexposta (estourada, reflexos brancos no esmalte)';
  }

  return {
    evDiff: exposureScore,
    exposureDescription,
    exposureStatus,
    blurAmountPx,
    dofBlurCaninesPx,
    noiseOpacity,
    hasFlashCurtainArtifact,
    ambientLightContamination,
    clinicalScore: score,
    clinicalTitle,
    clinicalFeedback: feedback,
    clinicalBadges: badges,
  };
}

import React from 'react';
import {
  type SubjectMode,
  type FocalLength,
  type Aperture,
  type FlashMode,
  type WhiteBalanceMode,
} from '../types/camera';
import { ThreeDentalViewport } from './ThreeDentalViewport';

export interface DentalSubjectCanvasProps {
  focalLength: FocalLength;
  aperture?: Aperture;
  dofBlurCaninesPx: number;
  motionBlurPx: number;
  noiseOpacity: number;
  ambientLightContamination: number;
  hasFlashCurtainArtifact: boolean;
  evDiff: number;
  showFocusPeaking: boolean;
  showGrid: boolean;
  subjectMode: SubjectMode;
  flashMode?: FlashMode;
  whiteBalance?: WhiteBalanceMode;
}

export const DentalSubjectCanvas: React.FC<DentalSubjectCanvasProps> = (props) => {
  return <ThreeDentalViewport {...props} />;
};

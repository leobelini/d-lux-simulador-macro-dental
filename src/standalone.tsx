import React from 'react';
import { createRoot } from 'react-dom/client';
import { DentalCameraApp } from './components/DentalCameraApp';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<DentalCameraApp />);
}

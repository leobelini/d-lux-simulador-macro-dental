// Web Audio API sound generator for camera shutter, dial clicks, and beeps
class SoundManager {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Realistic mechanical shutter click
  playShutter(shutterSpeedSec: number = 1 / 160) {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1st curtain click
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const filter1 = ctx.createBiquadFilter();

    // Noise buffer for mechanical snap
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
    }

    const noise1 = ctx.createBufferSource();
    noise1.buffer = buffer;

    filter1.type = 'bandpass';
    filter1.frequency.setValueAtTime(1200, now);
    filter1.Q.setValueAtTime(3, now);

    gain1.gain.setValueAtTime(0.7, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    noise1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(ctx.destination);

    noise1.start(now);
    noise1.stop(now + 0.05);

    // 2nd curtain click (after exposure duration, clamped to reasonable sound duration)
    const delay = Math.min(Math.max(shutterSpeedSec, 0.06), 0.35);
    const secondClickTime = now + delay;

    const noise2 = ctx.createBufferSource();
    noise2.buffer = buffer;
    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.5, secondClickTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, secondClickTime + 0.04);

    noise2.connect(filter1);
    filter1.connect(gain2);
    gain2.connect(ctx.destination);

    noise2.start(secondClickTime);
    noise2.stop(secondClickTime + 0.05);
  }

  // Dial ratchet click
  playDial() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.015);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.015);
  }

  // Focus lock beep (double high beep)
  playBeep() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1760, now); // A6
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.setValueAtTime(0.15, now + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);

    // Second beep
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1760, now + 0.1);
    gain2.gain.setValueAtTime(0.15, now + 0.1);
    gain2.gain.setValueAtTime(0.15, now + 0.16);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.17);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.start(now + 0.1);
    osc2.stop(now + 0.17);
  }
}

export const sounds = new SoundManager();

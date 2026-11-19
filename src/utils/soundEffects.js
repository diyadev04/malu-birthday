// =============================================================================
// Web Audio API Synthesizer for Dreamy Music Box & Sound Effects
// =============================================================================
// Zero external audio files required — crystal clear, reliable, never blocks!

class DreamyAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.musicTimer = null;
    this.melodyIndex = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft music box bell note
  playBellNote(freq, time = 0, duration = 1.2, volume = 0.12) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + time);

    // Warm overtone for celesta / music box timbre
    const overtone = this.ctx.createOscillator();
    const overGain = this.ctx.createGain();
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(freq * 2, this.ctx.currentTime + time);

    gain.gain.setValueAtTime(0, this.ctx.currentTime + time);
    gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + time + duration);

    overGain.gain.setValueAtTime(0, this.ctx.currentTime + time);
    overGain.gain.linearRampToValueAtTime(volume * 0.35, this.ctx.currentTime + time + 0.01);
    overGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + time + duration * 0.6);

    osc.connect(gain);
    overtone.connect(overGain);
    gain.connect(this.ctx.destination);
    overGain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime + time);
    overtone.start(this.ctx.currentTime + time);

    osc.stop(this.ctx.currentTime + time + duration);
    overtone.stop(this.ctx.currentTime + time + duration);
  }

  // Dreamy celestial background melody (Lullaby / Music Box loop)
  toggleMusic(onStateChange) {
    this.init();
    if (this.isPlayingMusic) {
      this.stopMusic();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.startMusic();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  startMusic() {
    this.init();
    this.isPlayingMusic = true;

    // Frequencies for a sweet pentatonic music box (C Major / A Minor celestial lullaby)
    // C5=523, D5=587, E5=659, G5=784, A5=880, C6=1046, E6=1318, G6=1568
    const melody = [
      { note: 659.25, dur: 0.4 }, // E5
      { note: 783.99, dur: 0.4 }, // G5
      { note: 880.00, dur: 0.6 }, // A5
      { note: 659.25, dur: 0.4 }, // E5
      { note: 1046.50, dur: 0.8 }, // C6
      { note: 880.00, dur: 0.4 }, // A5
      { note: 783.99, dur: 0.8 }, // G5

      { note: 587.33, dur: 0.4 }, // D5
      { note: 659.25, dur: 0.4 }, // E5
      { note: 783.99, dur: 0.6 }, // G5
      { note: 880.00, dur: 0.4 }, // A5
      { note: 659.25, dur: 0.8 }, // E5
      { note: 523.25, dur: 0.8 }, // C5
      { note: 587.33, dur: 0.8 }, // D5

      { note: 783.99, dur: 0.4 }, // G5
      { note: 880.00, dur: 0.4 }, // A5
      { note: 1046.50, dur: 0.6 }, // C6
      { note: 1318.51, dur: 0.8 }, // E6
      { note: 1046.50, dur: 0.4 }, // C6
      { note: 880.00, dur: 0.8 }, // A5

      { note: 659.25, dur: 0.4 }, // E5
      { note: 587.33, dur: 0.4 }, // D5
      { note: 523.25, dur: 0.8 }, // C5
      { note: 587.33, dur: 0.6 }, // D5
      { note: 523.25, dur: 1.2 }  // C5 (resolve)
    ];

    const playNextSequence = () => {
      if (!this.isPlayingMusic) return;

      let currentTime = 0;
      melody.forEach((item, i) => {
        // Main bell note
        this.playBellNote(item.note, currentTime, 1.4, 0.08);

        // Gentle soft sub-harmonic bass note on strong beats
        if (i % 4 === 0) {
          this.playBellNote(item.note / 2, currentTime, 1.8, 0.04);
        }

        currentTime += item.dur * 0.9;
      });

      this.musicTimer = setTimeout(() => {
        if (this.isPlayingMusic) playNextSequence();
      }, currentTime * 1000 + 400);
    };

    playNextSequence();
  }

  stopMusic() {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  // Sound effect: Sparkle Chime (for card open, gift unwrap, wish)
  playSparkle() {
    this.init();
    const notes = [1046.5, 1318.5, 1567.98, 2093.0, 2637.02];
    notes.forEach((freq, idx) => {
      this.playBellNote(freq, idx * 0.07, 0.6, 0.09);
    });
  }

  // Sound effect: Pop / Unbox
  playPop() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(620, this.ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  // Sound effect: Candle blow whoosh
  playBlowCandle() {
    this.init();
    if (!this.ctx) return;
    // White noise puff
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.35);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.38);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
    noise.stop(this.ctx.currentTime + 0.4);

    // Followed by magical twinkle
    setTimeout(() => this.playSparkle(), 300);
  }
}

export const soundEngine = new DreamyAudioEngine();

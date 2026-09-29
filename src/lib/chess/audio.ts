let ctx: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export function unlockAudio() {
  audio();
}

function tone(
  freq: number,
  duration: number,
  type: OscillatorType = "sine",
  gain = 0.06,
  delay = 0,
) {
  const ac = audio();
  if (!ac) return;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.value = 0;
  osc.connect(g);
  g.connect(ac.destination);
  const t = ac.currentTime + delay;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.start(t);
  osc.stop(t + duration + 0.02);
}

export const soundFx = {
  move() {
    tone(420, 0.07, "sine", 0.045);
  },
  capture() {
    tone(220, 0.09, "triangle", 0.05);
    tone(140, 0.11, "sine", 0.04, 0.02);
  },
  check() {
    tone(620, 0.08, "sine", 0.05);
    tone(880, 0.1, "sine", 0.035, 0.07);
  },
  success() {
    tone(523, 0.09, "sine", 0.05);
    tone(784, 0.12, "sine", 0.045, 0.08);
  },
  error() {
    tone(170, 0.16, "square", 0.035);
  },
};

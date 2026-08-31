export type MissionApi = {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seek: (time: number) => void;
  scrub: (deltaSeconds: number) => void;
  skip: (direction: -1 | 1) => void;
  duration: number;
};

export function formatTime(seconds: number) {
  const s = Math.max(0, seconds);
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

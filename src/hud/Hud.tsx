import { partAt, sceneMetaAt, TOTAL_DURATION } from "../briefing/storyboard";
import { formatTime, type MissionApi } from "../motion/types";

type Props = {
  time: number;
  api: MissionApi | null;
};

export function Hud({ time, api }: Props) {
  const progress = Math.min(1, time / TOTAL_DURATION);
  const scene = sceneMetaAt(time);
  const part = partAt(time);
  const opening = time < 8.4;

  return (
    <div className={`pointer-events-none absolute inset-0 z-20 transition-opacity duration-700 ${opening ? "opacity-40" : "opacity-100"}`}>
      <div className="hud-corner hud-tl" />
      <div className="hud-corner hud-tr" />
      <div className="hud-corner hud-bl" />
      <div className="hud-corner hud-br" />
      <div className="scanlines absolute inset-0" />

      <div className="absolute left-7 top-6 max-w-[55vw]">
        <div className="label-hud text-[12px] text-[var(--color-muted)]">
          ARMED FOR PRESENTATION ·{" "}
          <span className="text-[var(--color-signal)]">{part.mission}</span>
        </div>
        <div className="mt-2 text-[13px] text-[var(--color-paper)]">{part.title}</div>
      </div>

      <div className="absolute right-7 top-6 text-right">
        <div className="label-hud text-[11px] text-[var(--color-line)]">
          {scene.label} · {scene.name}
        </div>
        <div className="label-hud mt-1 text-[12px] text-[var(--color-paper)]">
          {formatTime(time)} / {formatTime(TOTAL_DURATION)}
        </div>
        <div className="label-hud mt-2 text-[10px] text-[var(--color-signal)]">SCROLL</div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 pointer-events-auto">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
          <p className="label-hud text-[10px] text-[var(--color-muted)]">
            滾輪決定進度 · 往下前進 · 往上倒退
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="label-hud cursor-none border border-[var(--color-line-dim)] px-3 py-1 text-[10px] text-[var(--color-muted)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
              onClick={() => api?.skip(-1)}
            >
              PREV
            </button>
            <button
              type="button"
              className="label-hud cursor-none border border-[var(--color-line-dim)] px-3 py-1 text-[10px] text-[var(--color-muted)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
              onClick={() => api?.skip(1)}
            >
              NEXT
            </button>
          </div>
        </div>
        <button
          type="button"
          className="block h-8 w-full"
          aria-label="進度"
          onPointerDown={(event) => {
            if (!api) return;
            event.stopPropagation();
            const rect = event.currentTarget.getBoundingClientRect();
            const ratio = (event.clientX - rect.left) / rect.width;
            api.seek(ratio * TOTAL_DURATION);
          }}
        >
          <span className="block h-[6px] w-full rounded-full bg-[var(--color-line-dim)]">
            <span
              className="block h-full rounded-full bg-[var(--color-signal)]"
              style={{ width: `${progress * 100}%` }}
            />
          </span>
        </button>
      </div>
    </div>
  );
}

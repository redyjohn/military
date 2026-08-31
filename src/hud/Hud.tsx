import type { PointerEvent } from "react";
import { partAt, sceneMetaAt, TOTAL_DURATION } from "../briefing/storyboard";
import { formatTime, type MissionApi } from "../motion/types";

type Props = {
  time: number;
  api: MissionApi | null;
};

function seekFromPointer(event: PointerEvent<HTMLButtonElement>, api: MissionApi) {
  const rect = event.currentTarget.getBoundingClientRect();
  const ratio = (event.clientY - rect.top) / rect.height;
  api.seek(Math.max(0, Math.min(1, ratio)) * TOTAL_DURATION);
}

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

      <div className="absolute left-7 top-6 max-w-[48vw]">
        <div className="label-hud text-[12px] text-[var(--color-muted)]">
          ARMED FOR PRESENTATION ·{" "}
          <span className="text-[var(--color-signal)]">{part.mission}</span>
        </div>
        <div className="mt-2 text-[13px] text-[var(--color-paper)]">{part.title}</div>
      </div>

      <div className="absolute right-16 top-6 text-right sm:right-[4.5rem]">
        <div className="label-hud text-[11px] text-[var(--color-line)]">
          {scene.label} · {scene.name}
        </div>
        <div className="label-hud mt-1 text-[12px] text-[var(--color-paper)]">
          {formatTime(time)} / {formatTime(TOTAL_DURATION)}
        </div>
      </div>

      <div className="pointer-events-auto absolute bottom-10 right-3 top-[6.75rem] flex w-11 flex-col items-center gap-3 sm:right-5">
        <button
          type="button"
          className="label-hud border border-[var(--color-line-dim)] px-1.5 py-1 text-[9px] text-[var(--color-muted)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
          onClick={() => api?.skip(-1)}
        >
          PREV
        </button>
        <button
          type="button"
          className="relative min-h-0 w-8 flex-1"
          aria-label="進度"
          onPointerDown={(event) => {
            if (!api) return;
            event.stopPropagation();
            event.currentTarget.setPointerCapture(event.pointerId);
            seekFromPointer(event, api);
          }}
          onPointerMove={(event) => {
            if (!api || !event.currentTarget.hasPointerCapture(event.pointerId)) return;
            seekFromPointer(event, api);
          }}
        >
          <span className="absolute left-1/2 top-0 h-full w-[5px] -translate-x-1/2 rounded-full bg-[var(--color-line-dim)]">
            <span
              className="absolute left-0 top-0 w-full rounded-full bg-[var(--color-signal)]"
              style={{ height: `${progress * 100}%` }}
            />
          </span>
        </button>
        <button
          type="button"
          className="label-hud border border-[var(--color-line-dim)] px-1.5 py-1 text-[9px] text-[var(--color-muted)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
          onClick={() => api?.skip(1)}
        >
          NEXT
        </button>
        <p
          className="label-hud text-[9px] tracking-[0.28em] text-[var(--color-signal)]"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL
        </p>
      </div>
    </div>
  );
}

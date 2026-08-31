import { useCallback, useEffect, useRef, useState } from "react";
import { Briefing } from "./briefing/Briefing";
import { SCENES } from "./briefing/storyboard";
import { Hud } from "./hud/Hud";
import { SightCursor } from "./hud/SightCursor";
import type { MissionApi } from "./motion/types";

const WHEEL_SECONDS_PER_PIXEL = 0.022;
const KEY_SCRUB_SECONDS = 1.6;

export default function App() {
  const [time, setTime] = useState(0);
  const apiRef = useRef<MissionApi | null>(null);
  const [api, setApi] = useState<MissionApi | null>(null);
  const touchY = useRef<number | null>(null);

  const handleApi = useCallback((next: MissionApi) => {
    apiRef.current = next;
    setApi(next);
  }, []);

  const handleProgress = useCallback((nextTime: number) => {
    setTime(nextTime);
  }, []);

  useEffect(() => {
    if (!api) return;
    const params = new URLSearchParams(window.location.search);
    const timeParam = params.get("t");
    const sceneParam = params.get("scene");
    if (timeParam != null && timeParam !== "") {
      const next = Number(timeParam);
      if (!Number.isNaN(next)) api.seek(next);
      return;
    }
    if (sceneParam) {
      const scene = SCENES.find((item) => item.id === sceneParam);
      if (scene) api.seek(scene.time + 2.2);
    }
  }, [api]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const current = apiRef.current;
      if (!current) return;
      if (["ArrowDown", "PageDown", "Space"].includes(event.code)) {
        event.preventDefault();
        current.scrub(KEY_SCRUB_SECONDS);
      } else if (["ArrowUp", "PageUp"].includes(event.code)) {
        event.preventDefault();
        current.scrub(-KEY_SCRUB_SECONDS);
      } else if (event.code === "Home") {
        event.preventDefault();
        current.seek(0);
      } else if (event.code === "End") {
        event.preventDefault();
        current.seek(current.duration);
      } else if (event.code === "BracketRight" || event.code === "KeyN") {
        event.preventDefault();
        current.skip(1);
      } else if (event.code === "BracketLeft" || event.code === "KeyP") {
        event.preventDefault();
        current.skip(-1);
      }
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      apiRef.current?.scrub(event.deltaY * WHEEL_SECONDS_PER_PIXEL);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchY.current = event.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (event: TouchEvent) => {
      if (touchY.current == null) return;
      const y = event.touches[0]?.clientY;
      if (y == null) return;
      event.preventDefault();
      apiRef.current?.scrub((touchY.current - y) * 0.045);
      touchY.current = y;
    };
    const onTouchEnd = () => {
      touchY.current = null;
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <main className="relative h-full w-full bg-[var(--color-ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(18_26_22)_0%,rgb(7_16_13)_72%)]" />
      <Briefing onApi={handleApi} onProgress={handleProgress} />
      <Hud time={time} api={api} />
      <SightCursor />
    </main>
  );
}

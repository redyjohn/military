import { useCallback, useEffect, useRef, useState } from "react";
import { Hud } from "./hud/Hud";
import { Scene01 } from "./missions/scene01/Scene01";
import type { MissionApi } from "./motion/types";

const WHEEL_SECONDS_PER_PIXEL = 0.018;
const KEY_SCRUB_SECONDS = 1.6;

export default function App() {
  const [time, setTime] = useState(0);
  const apiRef = useRef<MissionApi | null>(null);
  const [api, setApi] = useState<MissionApi | null>(null);

  const handleApi = useCallback((next: MissionApi) => {
    apiRef.current = next;
    setApi(next);
  }, []);

  const handleProgress = useCallback((nextTime: number) => {
    setTime(nextTime);
  }, []);

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
      }
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      apiRef.current?.scrub(event.deltaY * WHEEL_SECONDS_PER_PIXEL);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <main className="relative h-full w-full bg-[var(--color-ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(18_26_22)_0%,rgb(7_16_13)_72%)]" />
      <Scene01 onApi={handleApi} onProgress={handleProgress} />
      <Hud time={time} api={api} />
    </main>
  );
}

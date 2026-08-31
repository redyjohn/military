import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CHECKPOINTS, TOTAL_DURATION } from "./storyboard";
import { buildTimeline } from "./timeline";
import { Part1 } from "./parts/Part1";
import { Part2 } from "./parts/Part2";
import { Part3 } from "./parts/Part3";
import { Part4 } from "./parts/Part4";
import { Part5 } from "./parts/Part5";
import { Part6 } from "./parts/Part6";
import { Part7 } from "./parts/Part7";
import type { MissionApi } from "../motion/types";

type Props = {
  onProgress: (time: number) => void;
  onApi: (api: MissionApi) => void;
};

export function Briefing({ onProgress, onApi }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const onProgressRef = useRef(onProgress);
  const onApiRef = useRef(onApi);
  onProgressRef.current = onProgress;
  onApiRef.current = onApi;

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const tl = buildTimeline(root, (time) => onProgressRef.current(time));
      const clampTime = (value: number) => Math.max(0, Math.min(TOTAL_DURATION, value));

      const api: MissionApi = {
        duration: TOTAL_DURATION,
        play: () => onProgressRef.current(tl.time()),
        pause: () => {
          tl.pause();
          onProgressRef.current(tl.time());
        },
        toggle: () => onProgressRef.current(tl.time()),
        seek: (time: number) => {
          tl.pause();
          tl.time(clampTime(time));
          onProgressRef.current(tl.time());
        },
        scrub: (deltaSeconds: number) => {
          tl.pause();
          tl.time(clampTime(tl.time() + deltaSeconds));
          onProgressRef.current(tl.time());
        },
        skip: (direction) => {
          const now = tl.time();
          const times = CHECKPOINTS.map((item) => item.time);
          let next = now;
          if (direction === 1) {
            next = times.find((time) => time > now + 0.25) ?? TOTAL_DURATION;
          } else {
            const prev = [...times].reverse().find((time) => time < now - 0.25);
            next = prev ?? 0;
          }
          tl.pause();
          tl.time(next);
          onProgressRef.current(tl.time());
        },
      };

      onApiRef.current(api);
      tl.pause(0);
      onProgressRef.current(0);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden">
      <div className="js-floor absolute inset-0">
        <div className="floor-grid absolute inset-0" />
      </div>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
    </div>
  );
}

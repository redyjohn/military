import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Figure } from "./Figure";
import { CHECKPOINTS, INTRO_CARDS, SCENE_DURATION } from "./storyboard";
import type { MissionApi } from "../../motion/types";

type Props = {
  onProgress: (time: number) => void;
  onApi: (api: MissionApi) => void;
};

function prepDraw(el: SVGGeometryElement) {
  const len = el.getTotalLength();
  el.style.strokeDasharray = `${len}`;
  el.style.strokeDashoffset = `${len}`;
}

export function Scene01({ onProgress, onApi }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const onProgressRef = useRef(onProgress);
  const onApiRef = useRef(onApi);
  onProgressRef.current = onProgress;
  onApiRef.current = onApi;

  useLayoutEffect(() => {
    const root = rootRef.current;
    const camera = cameraRef.current;
    if (!root || !camera) return;

    const q = gsap.utils.selector(root);
    const ctx = gsap.context(() => {
      const drawNodes = gsap.utils.toArray<SVGGeometryElement>(".js-draw", root);
      drawNodes.forEach(prepDraw);

      gsap.set(camera, { scale: 1.2, y: 40, x: 80, transformOrigin: "50% 22%" });
      gsap.set(q(".js-hero"), { opacity: 0, y: 48, scale: 0.96 });
      gsap.set(q(".js-act2"), { opacity: 0, y: 36 });
      gsap.set(q(".js-card"), { opacity: 0, y: 28 });
      gsap.set(q(".js-ready"), { opacity: 0 });
      gsap.set(q(".js-floor"), { opacity: 0 });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "none" },
        onUpdate: () => {
          onProgressRef.current(tl.time());
        },
      });

      const draw = (id: string, duration: number, at: number) => {
        tl.to(`#${id}`, { strokeDashoffset: 0, duration, ease: "none" }, at);
      };

      tl.addLabel("hero", 0);
      tl.to(q(".js-floor"), { opacity: 1, duration: 1.2 }, 0);
      tl.to(q(".js-kicker"), { opacity: 1, y: 0, scale: 1, duration: 1.4 }, 0.15);
      draw("line-entry", 4.2, 0.2);
      draw("path-head", 2.2, 2);

      tl.addLabel("title", 2.2);
      tl.to(q(".js-title"), { opacity: 1, y: 0, scale: 1, duration: 1.6 }, 2.2);
      tl.to(q(".js-rule"), { opacity: 1, y: 0, scale: 1, duration: 0.9 }, 3.4);
      draw("path-neck", 1, 3);
      draw("path-shoulders", 1.4, 3.6);
      draw("path-arm-l", 2, 4.2);
      draw("path-arm-r", 2, 4.5);
      draw("path-torso-l", 2.4, 5.4);
      draw("path-torso-r", 2.4, 5.6);

      tl.addLabel("copy", 6.5);
      tl.to(q(".js-sub"), { opacity: 1, y: 0, scale: 1, duration: 1.4 }, 6.5);
      tl.to(q(".js-prompt"), { opacity: 1, y: 0, scale: 1, duration: 1 }, 8);
      draw("path-hip", 1, 6.5);
      draw("path-leg-l", 3.2, 7);
      draw("path-leg-r", 3.2, 7.3);
      draw("path-feet", 1, 10.2);
      tl.to("#line-entry", { opacity: 0.35, duration: 1 }, 10.5);
      tl.to(camera, { scale: 1.05, x: 120, y: 10, duration: 5 }, 7);

      tl.addLabel("brief", 13);
      tl.to(q(".js-hero"), { opacity: 0, y: -28, duration: 1.2 }, 13);
      tl.to(
        camera,
        { scale: 0.92, x: 160, y: 0, opacity: 0.28, duration: 1.4 },
        13,
      );
      tl.to(q(".js-act2-kicker"), { opacity: 1, y: 0, duration: 1 }, 14.1);
      tl.to(q(".js-act2-title"), { opacity: 1, y: 0, duration: 1.3 }, 14.8);

      tl.addLabel("cards", 17);
      INTRO_CARDS.forEach((_, index) => {
        tl.to(q(`.js-card-${index}`), { opacity: 1, y: 0, duration: 0.8 }, 17 + index * 1.1);
      });

      tl.addLabel("ready", 23);
      tl.to(q(".js-ready"), { opacity: 1, duration: 1 }, 23);
      tl.to({}, { duration: 4 }, 24);

      const clampTime = (value: number) =>
        Math.max(0, Math.min(SCENE_DURATION, value));

      const api: MissionApi = {
        duration: SCENE_DURATION,
        play: () => {
          onProgressRef.current(tl.time());
        },
        pause: () => {
          tl.pause();
          onProgressRef.current(tl.time());
        },
        toggle: () => {
          onProgressRef.current(tl.time());
        },
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
          const times = CHECKPOINTS.map((c) => c.time);
          let next = now;
          if (direction === 1) {
            next = times.find((t) => t > now + 0.25) ?? SCENE_DURATION;
          } else {
            const prev = [...times].reverse().find((t) => t < now - 0.25);
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
      <div className="js-floor floor-grid absolute inset-0" />

      <div
        ref={cameraRef}
        className="pointer-events-none absolute -right-[8%] top-[4%] h-[120%] w-[min(720px,55vw)] text-[var(--color-line)] opacity-55"
      >
        <Figure className="h-full w-full" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="js-hero-block max-w-[1000px] text-center">
          <p className="js-hero js-kicker label-hud mb-7 text-[13px] tracking-[0.35em] text-[var(--color-signal)]">
            國軍志願士兵｜HIGH SCHOOL RECRUITMENT
          </p>
          <h1 className="js-hero js-title text-[clamp(52px,9vw,120px)] font-extrabold leading-[0.95] tracking-[-0.05em]">
            你的下一步
            <br />
            由你決定
          </h1>
          <div className="js-hero js-rule mx-auto mt-8 h-px w-[180px] bg-[var(--color-signal)]" />
          <p className="js-hero js-sub mt-7 text-[clamp(18px,2.5vw,30px)] leading-relaxed text-[var(--color-muted)]">
            如果你正在思考高中畢業後的下一站
            <br />
            先來認識這一條路。
          </p>
          <p className="js-hero js-prompt mt-8 text-lg tracking-wide text-[#cbd6cf]">
            SCROLL 往下繼續
          </p>
        </div>

        <div className="js-act2-block pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6">
          <p className="js-act2 js-act2-kicker label-hud mb-6 text-[13px] tracking-[0.35em] text-[var(--color-signal)]">
            START YOUR MISSION
          </p>
          <h2 className="js-act2 js-act2-title text-[clamp(40px,6vw,84px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            不是現在決定
            <br />
            而是先了解
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-[18px]">
            {INTRO_CARDS.map((card, index) => (
              <article
                key={card.num}
                className={`js-card js-card-${index} w-[180px] border border-[var(--color-line-dim)] bg-[rgb(8_18_14_/_0.72)] px-[18px] py-[22px] text-left`}
              >
                <div className="label-hud text-[12px] text-[var(--color-signal)]">
                  {card.num}
                </div>
                <h3 className="mt-3 mb-2 text-[20px] font-bold">{card.title}</h3>
                <p className="m-0 text-[13px] leading-relaxed text-[var(--color-muted)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
          <p className="js-ready label-hud mt-7 text-[14px] tracking-[0.3em] text-[var(--color-signal)]">
            MISSION 01 · READY
          </p>
        </div>
      </div>
    </div>
  );
}

import gsap from "gsap";
import { TOTAL_DURATION } from "./storyboard";

function prepDraw(el: SVGGeometryElement) {
  const len = el.getTotalLength();
  el.style.strokeDasharray = `${len}`;
  el.style.strokeDashoffset = `${len}`;
}

function inTween(q: ReturnType<typeof gsap.utils.selector>, sel: string, at: number, duration = 0.7) {
  return { target: q(sel), vars: { autoAlpha: 1, y: 0, duration, ease: "power2.out" as const }, at };
}

export function buildTimeline(root: HTMLElement, onUpdate: (time: number) => void) {
  const q = gsap.utils.selector(root);
  const drawNodes = gsap.utils.toArray<SVGGeometryElement>(".js-draw", root);
  drawNodes.forEach(prepDraw);

  gsap.set(q(".js-scene"), { autoAlpha: 0 });
  gsap.set(q(".js-in"), { autoAlpha: 0, y: 22 });
  gsap.set(q(".js-floor"), { autoAlpha: 0 });
  gsap.set("#line-scan", { opacity: 0, y: 0 });

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: "none" },
    onUpdate: () => onUpdate(tl.time()),
  });

  const show = (sel: string, at: number, duration = 0.55) => {
    tl.to(q(sel), { autoAlpha: 1, duration, ease: "power1.out" }, at);
  };
  const hide = (sel: string, at: number, duration = 0.5) => {
    tl.to(q(sel), { autoAlpha: 0, duration, ease: "power1.in" }, at);
  };
  const enter = (sel: string, at: number, duration = 0.7) => {
    const spec = inTween(q, sel, at, duration);
    tl.to(spec.target, spec.vars, spec.at);
  };
  const stagger = (base: string, count: number, at: number, step: number, duration = 0.55) => {
    for (let i = 0; i < count; i += 1) enter(`${base}-${i}`, at + i * step, duration);
  };
  const draw = (id: string, duration: number, at: number) => {
    tl.to(`#${id}`, { strokeDashoffset: 0, duration, ease: "none" }, at);
  };

  // s01 0–12 黑幕
  show(".js-s01", 0, 0.3);
  enter(".js-s01-l1", 0.7, 0.9);
  enter(".js-s01-l2", 2.6, 0.9);
  enter(".js-s01-l3", 4.5, 0.9);
  enter(".js-s01-l4", 6.4, 0.9);
  enter(".js-s01-final", 8.6, 1.1);
  tl.to(q(".js-s01-l1, .js-s01-l2, .js-s01-l3, .js-s01-l4"), { opacity: 0.22, duration: 0.8 }, 8.6);

  // s02 12–18
  hide(".js-s01", 11.35, 0.55);
  show(".js-s02", 11.4, 0.55);
  tl.to(q(".js-floor"), { autoAlpha: 1, duration: 1.1 }, 11.5);
  enter(".js-s02-k", 12);
  enter(".js-s02-start", 12.2);
  enter(".js-s02-fork", 12.55, 0.4);
  stagger(".js-s02-path", 3, 12.8, 0.28, 0.4);
  enter(".js-s02-army", 13.8, 0.55);
  enter(".js-s02-copy", 15);

  // s03 18–24
  hide(".js-s02", 17.45, 0.5);
  show(".js-s03", 17.5, 0.5);
  enter(".js-s03-k", 18);
  enter(".js-s03-title", 18.15);
  stagger(".js-s03-q", 5, 18.55, 0.38);

  // s04 24–38 CREATE YOUR PROFILE
  hide(".js-s03", 23.45, 0.5);
  show(".js-s04", 23.5, 0.5);
  enter(".js-s04-k", 24);
  enter(".js-s04-title", 24.2);
  stagger(".js-s04-card", 4, 25, 0.55);
  draw("line-entry", 2.2, 24.4);
  draw("path-head", 1.4, 25.2);
  draw("path-neck", 0.6, 26.4);
  draw("path-shoulders", 0.8, 26.9);
  draw("path-arm-l", 1.2, 27.4);
  draw("path-arm-r", 1.2, 27.6);
  draw("path-torso-l", 1.4, 28.4);
  draw("path-torso-r", 1.4, 28.6);
  draw("path-hip", 0.6, 29.8);
  draw("path-leg-l", 1.8, 30.2);
  draw("path-leg-r", 1.8, 30.4);
  draw("path-feet", 0.6, 32);
  draw("path-ruler", 1.4, 31.2);
  draw("path-bmi", 1.2, 32.4);
  tl.to("#label-age", { opacity: 1, duration: 0.6 }, 30.6);
  tl.to("#label-edu", { opacity: 1, duration: 0.6 }, 31.4);
  tl.to("#label-height", { opacity: 1, duration: 0.6 }, 32.2);
  tl.to("#label-bmi", { opacity: 1, duration: 0.6 }, 33);
  tl.fromTo("#line-scan", { opacity: 0.9, y: 0 }, { y: 620, duration: 2.4, ease: "power1.inOut" }, 33.4);

  // s05 38–46
  hide(".js-s04", 37.4, 0.5);
  show(".js-s05", 37.45, 0.5);
  enter(".js-s05-k", 38);
  enter(".js-s05-ask", 38.2);
  enter(".js-s05-term", 39.2);
  enter(".js-s05-msg", 42.2, 0.9);

  // s06 46–58
  hide(".js-s05", 45.4, 0.5);
  show(".js-s06", 45.45, 0.5);
  enter(".js-s06-map", 46, 0.8);

  // s07 58–70
  hide(".js-s06", 57.4, 0.5);
  show(".js-s07", 57.45, 0.5);
  enter(".js-s07-k", 58);
  enter(".js-s07-title", 58.15);
  enter(".js-s07-copy", 58.5);
  stagger(".js-s07-row", 5, 59.2, 0.7);

  // s08 70–78
  hide(".js-s07", 69.4, 0.5);
  show(".js-s08", 69.45, 0.5);
  enter(".js-s08-stamp", 70, 0.8);
  enter(".js-s08-title", 70.5);
  enter(".js-s08-list", 71.4);
  enter(".js-s08-note", 73.2);

  // s09 78–90
  hide(".js-s08", 77.4, 0.5);
  show(".js-s09", 77.45, 0.5);
  enter(".js-s09-k", 78);
  enter(".js-s09-title", 78.15);
  enter(".js-s09-copy", 78.6);
  enter(".js-s09-url", 79.2);
  enter(".js-s09-phone", 79.6, 0.9);
  stagger(".js-s09-step", 4, 80.4, 0.7);

  // s10 90–102
  hide(".js-s09", 89.4, 0.5);
  show(".js-s10", 89.45, 0.5);
  enter(".js-s10-k", 90);
  enter(".js-s10-title", 90.15);
  stagger(".js-s10-doc", 5, 91, 0.7);
  enter(".js-s10-note", 95.2);

  // s11 102–110
  hide(".js-s10", 101.4, 0.5);
  show(".js-s11", 101.45, 0.5);
  enter(".js-s11-k", 102);
  enter(".js-s11-title", 102.2);
  enter(".js-s11-box", 103);
  enter(".js-s11-note", 104.6);

  // s12 110–120
  hide(".js-s11", 109.4, 0.5);
  show(".js-s12", 109.45, 0.5);
  enter(".js-s12-k", 110);
  enter(".js-s12-q", 110.2);
  enter(".js-s12-x", 111.4, 0.45);
  enter(".js-s12-msg", 112.2);
  enter(".js-s12-note", 113.6);

  // s13 120–130
  hide(".js-s12", 119.4, 0.5);
  show(".js-s13", 119.45, 0.5);
  enter(".js-s13-k", 120);
  enter(".js-s13-title", 120.15);
  enter(".js-s13-note", 120.7);
  stagger(".js-s13-g", 3, 121.4, 0.45);

  // s14 130–142
  hide(".js-s13", 129.4, 0.5);
  show(".js-s14", 129.45, 0.5);
  enter(".js-s14-k", 130);
  enter(".js-s14-currency", 130.3);
  const payEl = root.querySelector(".js-pay-num") as HTMLElement | null;
  const pay = { n: 0 };
  tl.to(
    pay,
    {
      n: 42150,
      duration: 2.8,
      ease: "power2.out",
      onUpdate: () => {
        if (payEl) payEl.textContent = Math.round(pay.n).toLocaleString("zh-TW");
      },
    },
    130.6,
  );
  enter(".js-s14-note", 133.6);

  // s15 142–154
  hide(".js-s14", 141.4, 0.5);
  show(".js-s15", 141.45, 0.5);
  enter(".js-s15-k", 142);
  enter(".js-s15-title", 142.15);
  stagger(".js-s15-rank", 3, 143, 1.4, 0.7);
  enter(".js-s15-note", 147.4);

  // s16 154–166
  hide(".js-s15", 153.4, 0.5);
  show(".js-s16", 153.45, 0.5);
  enter(".js-s16-eq", 154, 0.8);
  enter(".js-s16-copy", 155);
  stagger(".js-s16-d", 4, 155.8, 0.7);
  enter(".js-s16-note", 159.2);

  // s17 166–174
  hide(".js-s16", 165.4, 0.5);
  show(".js-s17", 165.45, 0.5);
  enter(".js-s17-k", 166);
  enter(".js-s17-title", 166.15);
  enter(".js-s17-copy", 166.8);

  // s18 174–183
  hide(".js-s17", 173.4, 0.5);
  show(".js-s18", 173.45, 0.5);
  enter(".js-s18-k", 174);
  enter(".js-s18-title", 174.15);
  enter(".js-s18-phone", 174.8);
  enter(".js-s18-copy", 175.4);
  enter(".js-s18-url", 176);
  enter(".js-s18-ui", 175.2, 0.8);

  // s19 183–192
  hide(".js-s18", 182.4, 0.5);
  show(".js-s19", 182.45, 0.5);
  enter(".js-s19-k", 183);
  enter(".js-s19-title", 183.15);
  enter(".js-s19-copy", 183.5);
  enter(".js-s19-qr", 183.55, 0.8);

  // s20 192–198
  hide(".js-s19", 191.4, 0.5);
  show(".js-s20", 191.45, 0.5);
  enter(".js-s20-k", 192);
  enter(".js-s20-title", 192.15);
  stagger(".js-s20-step", 4, 192.6, 0.35, 0.4);
  enter(".js-s20-note", 194.4);

  // s21 198–204
  hide(".js-s20", 197.4, 0.45);
  show(".js-s21", 197.45, 0.45);
  enter(".js-s21-k", 198);
  enter(".js-s21-title", 198.15);
  enter(".js-s21-copy", 198.8);

  // s22 204–210
  hide(".js-s21", 203.4, 0.45);
  show(".js-s22", 203.45, 0.45);
  enter(".js-s22-k", 204);
  enter(".js-s22-title", 204.2);
  enter(".js-s22-copy", 205.1, 0.8);

  // s23 210–216
  hide(".js-s22", 209.4, 0.45);
  show(".js-s23", 209.45, 0.45);
  enter(".js-s23-k", 210);
  enter(".js-s23-title", 210.15);
  stagger(".js-s23-item", 5, 210.7, 0.28, 0.4);
  enter(".js-s23-note", 212.4);

  // s24 216–222
  hide(".js-s23", 215.4, 0.45);
  show(".js-s24", 215.45, 0.45);
  enter(".js-s24-k", 216);
  enter(".js-s24-title", 216.15);
  stagger(".js-s24-bad", 5, 216.4, 0.22, 0.35);
  enter(".js-s24-ok", 217.6);
  enter(".js-s24-note", 219.2);

  // s25 222–228
  hide(".js-s24", 221.4, 0.45);
  show(".js-s25", 221.45, 0.45);
  enter(".js-s25-k", 222);
  enter(".js-s25-title", 222.15);
  stagger(".js-s25-m", 5, 222.7, 0.35, 0.45);

  // s26 228–234
  hide(".js-s25", 227.4, 0.45);
  show(".js-s26", 227.45, 0.45);
  enter(".js-s26-k", 228);
  enter(".js-s26-title", 228.15);
  enter(".js-s26-copy", 228.9);

  // s27 234–248
  hide(".js-s26", 233.4, 0.5);
  show(".js-s27", 233.45, 0.5);
  enter(".js-s27-k", 234);
  enter(".js-s27-title", 234.2);
  enter(".js-s27-copy", 234.55);
  enter(".js-s27-qr", 234.6, 0.8);
  enter(".js-s27-meta", 235.3);
  tl.to({}, { duration: 0.01 }, TOTAL_DURATION);

  return tl;
}

import { useEffect, useRef } from "react";

export function SightCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const node = ref.current;
    if (!node) return;

    const onMove = (event: PointerEvent) => {
      node.style.opacity = "1";
      node.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };
    const onLeave = () => {
      node.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="sight-cursor" aria-hidden>
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="13" />
        <path d="M32 3 V61 M3 32 H61" />
        <circle cx="32" cy="32" r="3.6" className="sight-dot" />
      </svg>
    </div>
  );
}

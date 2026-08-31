import type { ReactNode } from "react";

export function SceneShell({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`js-scene js-${id} absolute inset-0 flex items-center justify-center px-6 sm:px-12 ${className}`}
      data-scene={id}
    >
      {children}
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="label-hud mb-5 text-[12px] tracking-[0.35em] text-[var(--color-signal)] sm:text-[13px]">
      {children}
    </p>
  );
}

export function Display({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[clamp(32px,5.6vw,72px)] font-extrabold leading-[1.05] tracking-[-0.04em] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Mute({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 max-w-[36rem] text-[clamp(16px,2vw,22px)] leading-relaxed text-[var(--color-muted)]">
      {children}
    </p>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`border border-[var(--color-line-dim)] bg-[rgb(8_18_14_/_0.72)] px-5 py-5 ${className}`}
    >
      {children}
    </article>
  );
}

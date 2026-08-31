import type { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[min(280px,72vw)] rounded-[36px] border border-[var(--color-line)] bg-[#0b1612] p-3 shadow-[0_0_80px_rgb(198_242_90_/_0.08)]">
      <div className="mx-auto mb-3 h-4 w-24 rounded-full bg-[#1c2a22]" />
      <div className="min-h-[420px] overflow-hidden rounded-[24px] border border-[var(--color-line-dim)] bg-[#07140f] p-5">
        {children}
      </div>
      <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-[var(--color-line-dim)]" />
    </div>
  );
}

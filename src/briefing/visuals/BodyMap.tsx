import { useState } from "react";

const ZONES = [
  { id: "head", label: "頭部", hint: "頭部不得有任何刺青或烙印" },
  { id: "face", label: "臉部", hint: "臉部、眼皮、口、耳不得刺青；臉部永久性化妝除外" },
  { id: "neck", label: "頸部", hint: "頸部露出圓領襯衫領口之部位不得刺青" },
  { id: "hands", label: "手掌／腕骨以下", hint: "腕骨以下及手掌不得刺青；手指關節指環紋身除外" },
] as const;

type ZoneId = (typeof ZONES)[number]["id"];

export function BodyMap() {
  const [active, setActive] = useState<ZoneId | null>(null);
  const current = ZONES.find((zone) => zone.id === active);

  return (
    <div className="pointer-events-auto grid w-full max-w-[980px] items-center gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
      <svg viewBox="0 0 360 620" className="mx-auto h-[min(70vh,620px)] w-full max-w-[360px] text-[var(--color-line)]" aria-hidden>
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="180" cy="72" r="36" />
          <path d="M180 108 V138" />
          <path d="M112 148 H248" />
          <path d="M112 148 C98 210 92 268 78 330" />
          <path d="M248 148 C262 210 268 268 282 330" />
          <path d="M132 148 C130 220 134 270 140 328" />
          <path d="M228 148 C230 220 226 270 220 328" />
          <path d="M140 328 H220" />
          <path d="M156 328 C150 410 146 490 138 560" />
          <path d="M204 328 C210 410 214 490 222 560" />
          <path d="M138 560 H122 M222 560 H238" />
        </g>

        <ZoneHit
          id="head"
          active={active === "head"}
          onSelect={setActive}
          cx={180}
          cy={48}
          r={22}
        />
        <ZoneHit
          id="face"
          active={active === "face"}
          onSelect={setActive}
          cx={180}
          cy={84}
          r={22}
        />
        <ZoneHit
          id="neck"
          active={active === "neck"}
          onSelect={setActive}
          cx={180}
          cy={124}
          r={18}
        />
        <ZoneHit
          id="hands"
          active={active === "hands"}
          onSelect={setActive}
          cx={78}
          cy={330}
          r={22}
        />
        <ZoneHit
          id="hands"
          active={active === "hands"}
          onSelect={setActive}
          cx={282}
          cy={330}
          r={22}
        />
      </svg>

      <div>
        <p className="label-hud text-[12px] text-[var(--color-signal)]">TATTOO CHECK</p>
        <h3 className="mt-3 text-[clamp(28px,4vw,44px)] font-extrabold leading-tight">刺青可以嗎？</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
          點選頭／臉／頸／手掌／腕骨以下，看哪些部位不行。
        </p>
        <div className="mt-6 min-h-[140px] border border-[var(--color-alert)]/50 bg-[rgb(40_10_8_/_0.45)] px-5 py-5">
          {current ? (
            <>
              <p className="label-hud text-[12px] text-[var(--color-alert)]">RESTRICTED · ❌</p>
              <p className="mt-2 text-xl font-bold">{current.label}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-[#f0c8c4]">{current.hint}</p>
            </>
          ) : (
            <>
              <p className="label-hud text-[12px] text-[var(--color-warn)]">STANDBY</p>
              <p className="mt-2 text-[16px] text-[var(--color-muted)]">點選輪廓上的部位</p>
            </>
          )}
        </div>
        <p className="mt-5 text-[13px] leading-relaxed text-[var(--color-muted)]">
          特定例外（臉部永久性化妝、手指關節指環紋身）由現場口頭補充。樣式不得有幫派、粗俗或違反善良風俗圖案。
        </p>
      </div>
    </div>
  );
}

function ZoneHit({
  id,
  active,
  onSelect,
  cx,
  cy,
  r,
}: {
  id: ZoneId;
  active: boolean;
  onSelect: (id: ZoneId) => void;
  cx: number;
  cy: number;
  r: number;
}) {
  return (
    <g className="cursor-pointer" onClick={() => onSelect(id)}>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={active ? "rgb(232 90 74 / 0.35)" : "rgb(198 242 90 / 0.12)"}
        stroke={active ? "#e85a4a" : "#c6f25a"}
        strokeWidth={active ? 2.4 : 1.2}
      />
      {active ? (
        <text
          x={cx}
          y={cy + 5}
          textAnchor="middle"
          fill="#e85a4a"
          fontSize="16"
          fontFamily="Share Tech Mono, monospace"
        >
          ❌
        </text>
      ) : null}
    </g>
  );
}

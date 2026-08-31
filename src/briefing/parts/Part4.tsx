import { useState } from "react";
import { DEDUCTIONS, OFFICIAL } from "../constants";
import { Display, Kicker, Mute, SceneShell } from "../ui";

const GUESSES = [25000, 30000, 40000];
const RANKS = [
  { rank: "二等兵", pay: OFFICIAL.private },
  { rank: "一等兵", pay: OFFICIAL.pfc },
  { rank: "上等兵", pay: OFFICIAL.specialist },
];

export function Part4() {
  const [guess, setGuess] = useState<number | null>(null);

  return (
    <>
      <SceneShell id="s13">
        <div className="w-full max-w-[880px] text-center">
          <Kicker>
            <span className="js-s13-k js-in">GUESS THE PAY</span>
          </Kicker>
          <Display>
            <span className="js-s13-title js-in">猜猜看，一個月多少？</span>
          </Display>
          <p className="js-s13-note js-in mt-4 text-[var(--color-muted)]">先不要公布答案。讓同學喊。</p>
          <div className="pointer-events-auto mt-10 flex flex-wrap justify-center gap-4">
            {GUESSES.map((amount, index) => (
              <button
                key={amount}
                type="button"
                onClick={() => setGuess(amount)}
                className={`js-s13-g js-s13-g-${index} js-in w-[180px] border px-4 py-6 text-2xl font-bold transition ${
                  guess === amount
                    ? "border-[var(--color-signal)] bg-[rgb(198_242_90_/_0.12)] text-[var(--color-signal)]"
                    : "border-[var(--color-line-dim)] text-[var(--color-paper)]"
                }`}
              >
                {amount.toLocaleString("zh-TW")}
              </button>
            ))}
          </div>
        </div>
      </SceneShell>

      <SceneShell id="s14">
        <div className="text-center">
          <Kicker>
            <span className="js-s14-k js-in">REVEAL · 二等兵</span>
          </Kicker>
          <p className="js-s14-currency js-in label-hud text-[18px] text-[var(--color-signal)]">NT$</p>
          <p className="js-s14-num js-pay-num mt-2 font-mono text-[clamp(64px,12vw,140px)] font-bold leading-none tracking-tight text-[var(--color-signal)]">
            0
          </p>
          <p className="js-s14-note js-in mt-6 text-[var(--color-muted)]">二等兵待遇（{OFFICIAL.payYearNote}）</p>
        </div>
      </SceneShell>

      <SceneShell id="s15">
        <div className="w-full max-w-[720px]">
          <Kicker>
            <span className="js-s15-k js-in">RANK UP</span>
          </Kicker>
          <Display>
            <span className="js-s15-title js-in">階級往上，待遇往上</span>
          </Display>
          <div className="mt-8 space-y-3">
            {RANKS.map((item, index) => (
              <div
                key={item.rank}
                className={`js-s15-rank js-s15-rank-${index} js-in flex items-center justify-between border border-[var(--color-line-dim)] px-6 py-5`}
              >
                <span className="text-2xl font-bold">{item.rank}</span>
                <span className="font-mono text-[clamp(24px,3vw,36px)] text-[var(--color-signal)]">
                  {item.pay.toLocaleString("zh-TW")}
                </span>
              </div>
            ))}
          </div>
          <p className="js-s15-note js-in mt-5 text-sm text-[var(--color-muted)]">
            含本俸、專業加給、志願役加給 · {OFFICIAL.payYearNote}
          </p>
        </div>
      </SceneShell>

      <SceneShell id="s16">
        <div className="w-full max-w-[760px] text-center">
          <p className="js-s16-eq js-in font-mono text-[clamp(28px,5vw,52px)] font-bold">
            42,150 <span className="text-[var(--color-alert)]">≠</span> 每月實領
          </p>
          <p className="js-s16-copy js-in mt-5 text-[var(--color-muted)]">還要扣除這些項目</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {DEDUCTIONS.map((item, index) => (
              <div
                key={item}
                className={`js-s16-d js-s16-d-${index} js-in border border-[var(--color-warn)] px-5 py-3 text-lg text-[var(--color-warn)]`}
              >
                − {item}
              </div>
            ))}
          </div>
          <p className="js-s16-note js-in mt-8 text-[var(--color-muted)]">實際入帳會比 42,150 低。簡章未列細項金額。</p>
        </div>
      </SceneShell>

      <SceneShell id="s17">
        <div className="w-full max-w-[720px] text-center">
          <Kicker>
            <span className="js-s17-k js-in">BEYOND PAY</span>
          </Kicker>
          <Display>
            <span className="js-s17-title js-in">薪水之外</span>
          </Display>
          <Mute>
            <span className="js-s17-copy js-in">
              其他福利、權利、義務，依國防部訂頒之相關法令辦理。這裡不自行加簡章沒有的福利數字。
            </span>
          </Mute>
        </div>
      </SceneShell>
    </>
  );
}

import { JOB_LIMITS, PROFILE_STATS } from "../constants";
import { Display, Kicker, Mute, Panel, SceneShell } from "../ui";
import { BodyMap } from "../visuals/BodyMap";
import { Figure } from "../visuals/Figure";

export function Part2() {
  return (
    <>
      <SceneShell id="s04">
        <div className="grid w-full max-w-[1100px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Kicker>
              <span className="js-s04-k js-in">CREATE YOUR PROFILE</span>
            </Kicker>
            <Display>
              <span className="js-s04-title js-in">我符合資格嗎？</span>
            </Display>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {PROFILE_STATS.map((stat, index) => (
                <Panel key={stat.id} className={`js-s04-card js-s04-card-${index} js-in`}>
                  <p className="label-hud text-[11px] text-[var(--color-signal)]">{stat.kicker}</p>
                  <p className="mt-2 text-2xl font-bold">{stat.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{stat.body}</p>
                </Panel>
              ))}
            </div>
          </div>
          <div className="js-s04-figure relative h-[min(72vh,620px)] text-[var(--color-line)] opacity-80">
            <Figure className="h-full w-full" />
          </div>
        </div>
      </SceneShell>

      <SceneShell id="s05">
        <div className="w-full max-w-[720px] text-center">
          <Kicker>
            <span className="js-s05-k js-in">LIVE CHECK</span>
          </Kicker>
          <p className="js-s05-ask js-in text-[clamp(22px,3vw,32px)] text-[var(--color-muted)]">
            身高幾公分？BMI 多少？
          </p>
          <div className="js-s05-term js-in mx-auto mt-8 border border-[var(--color-signal)] bg-[rgb(8_18_14_/_0.8)] px-8 py-8 text-left">
            <p className="label-hud text-[13px] text-[var(--color-signal)]">
              STATUS · <span className="js-s05-status">CHECKING…</span>
            </p>
            <p className="js-s05-scan mt-4 font-mono text-lg tracking-[0.12em] text-[#d5e6c8]">
              HEIGHT …… 150 CM ↑
              <br />
              BMI ………… M 16.5–32 / F 17–26
            </p>
          </div>
          <Display className="js-s05-msg js-in mt-10">
            條件不是只有一項
            <br />
            還有其他體格及資格
          </Display>
        </div>
      </SceneShell>

      <SceneShell id="s06">
        <div className="js-s06-map js-in w-full">
          <BodyMap />
        </div>
      </SceneShell>

      <SceneShell id="s07">
        <div className="w-full max-w-[920px]">
          <Kicker>
            <span className="js-s07-k js-in">JOB FILTER</span>
          </Kicker>
          <Display>
            <span className="js-s07-title js-in">職務可能加嚴</span>
          </Display>
          <Mute>
            <span className="js-s07-copy js-in">一般條件過了，不代表每個職務都能選。</span>
          </Mute>
          <div className="mt-8 overflow-hidden border border-[var(--color-line-dim)]">
            <div className="grid grid-cols-3 border-b border-[var(--color-line-dim)] bg-[rgb(8_18_14_/_0.8)] px-4 py-3 label-hud text-[11px] text-[var(--color-muted)]">
              <span>職務</span>
              <span>男</span>
              <span>女</span>
            </div>
            {JOB_LIMITS.map((row, index) => (
              <div
                key={row.role}
                className={`js-s07-row js-s07-row-${index} js-in grid grid-cols-3 items-center border-b border-[var(--color-line-dim)] px-4 py-4 last:border-b-0 ${index === 0 ? "text-[var(--color-muted)]" : "text-[var(--color-paper)]"}`}
              >
                <span className="font-bold">{row.role}</span>
                <span className="font-mono">{row.male}</span>
                <span className="font-mono">{row.female}</span>
              </div>
            ))}
          </div>
        </div>
      </SceneShell>

      <SceneShell id="s08">
        <div className="w-full max-w-[760px] text-center">
          <p className="js-s08-stamp js-in label-hud text-[14px] tracking-[0.4em] text-[var(--color-signal)]">
            MISSION 01 COMPLETE
          </p>
          <Display className="js-s08-title js-in mt-4">已知道這些</Display>
          <p className="js-s08-list js-in mt-8 text-[clamp(18px,2.3vw,26px)] leading-loose text-[#d5e0d6]">
            年齡 · 學歷 · 身高 · BMI
            <br />
            體格 · 刺青 · 特定職務限制
          </p>
          <p className="js-s08-note js-in mt-8 text-[clamp(16px,2vw,22px)] text-[var(--color-muted)]">
            符合只代表可以進下一關。
          </p>
        </div>
      </SceneShell>
    </>
  );
}

import { QUESTIONS } from "../constants";
import { Display, Kicker, SceneShell } from "../ui";

export function Part1() {
  return (
    <>
      <SceneShell id="s01">
        <div className="text-center">
          <p className="js-s01-l1 js-in mb-7 text-[clamp(26px,4.2vw,42px)] font-medium text-[#d7e0d8]">
            畢業之後要做什麼？
          </p>
          <p className="js-s01-l2 js-in mb-7 text-[clamp(26px,4.2vw,42px)] font-medium text-[#d7e0d8]">
            要升學嗎？
          </p>
          <p className="js-s01-l3 js-in mb-7 text-[clamp(26px,4.2vw,42px)] font-medium text-[#d7e0d8]">
            還是直接工作？
          </p>
          <p className="js-s01-l4 js-in mb-10 text-[clamp(26px,4.2vw,42px)] font-medium text-[#d7e0d8]">
            如果……有另一條路呢？
          </p>
          <h1 className="js-s01-final js-in text-[clamp(40px,7vw,92px)] font-extrabold leading-[1.02] tracking-[-0.05em]">
            你的下一步，由你決定。
          </h1>
        </div>
      </SceneShell>

      <SceneShell id="s02">
        <div className="w-full max-w-[920px] text-center">
          <Kicker>
            <span className="js-s02-k js-in">PATH SELECT</span>
          </Kicker>
          <div className="flex flex-col items-center gap-5">
            <div className="js-s02-start js-in border border-[var(--color-signal)] px-8 py-3 text-xl font-bold">
              高中畢業
            </div>
            <div className="js-s02-fork js-in h-10 w-px bg-[var(--color-signal)]" />
            <div className="flex flex-wrap justify-center gap-3">
              {["工作", "升學", "出國"].map((label, index) => (
                <div
                  key={label}
                  className={`js-s02-path js-s02-path-${index} js-in w-[140px] border border-[var(--color-line-dim)] py-4 text-lg text-[var(--color-muted)]`}
                >
                  {label}
                </div>
              ))}
              <div className="js-s02-army js-in w-[140px] border border-[var(--color-signal)] bg-[rgb(198_242_90_/_0.08)] py-4 text-lg font-bold text-[var(--color-signal)]">
                從軍
              </div>
            </div>
          </div>
          <p className="js-s02-copy js-in mx-auto mt-10 max-w-[34rem] text-[clamp(16px,2vw,20px)] leading-relaxed text-[var(--color-muted)]">
            今天不是要你們現在決定要不要當兵。只想讓你們知道，若有興趣，需要先搞懂哪些事。
          </p>
        </div>
      </SceneShell>

      <SceneShell id="s03">
        <div className="w-full max-w-[980px]">
          <Kicker>
            <span className="js-s03-k js-in">TODAY · 5 QUESTIONS</span>
          </Kicker>
          <Display>
            <span className="js-s03-title js-in">今天只回答 5 個問題</span>
          </Display>
          <ol className="mt-10 space-y-3">
            {QUESTIONS.map((item, index) => (
              <li
                key={item.num}
                className={`js-s03-q js-s03-q-${index} js-in flex items-baseline gap-5 border border-[var(--color-line-dim)] bg-[rgb(8_18_14_/_0.55)] px-5 py-4`}
              >
                <span className="label-hud text-[13px] text-[var(--color-signal)]">{item.num}</span>
                <span className="text-[clamp(18px,2.4vw,28px)] font-bold">{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </SceneShell>
    </>
  );
}

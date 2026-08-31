import { PHOTO_MINES } from "../constants";
import { Display, Kicker, Mute, SceneShell } from "../ui";

const FLOW = ["填寫", "核對", "簽名", "上傳"];

export function Part6() {
  return (
    <>
      <SceneShell id="s20">
        <div className="w-full max-w-[860px] text-center">
          <Kicker>
            <span className="js-s20-k js-in">DATA LOCK</span>
          </Kicker>
          <Display>
            <span className="js-s20-title js-in">資料確認</span>
          </Display>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {FLOW.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className={`js-s20-step js-s20-step-${index} js-in border border-[var(--color-signal)] px-5 py-3 text-lg font-bold`}>
                  {step}
                </div>
                {index < FLOW.length - 1 ? (
                  <span className="text-[var(--color-signal)]">→</span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="js-s20-note js-in mt-8 text-[clamp(18px,2.2vw,24px)] text-[var(--color-alert)]">
            逾時不能改。
          </p>
        </div>
      </SceneShell>

      <SceneShell id="s21">
        <div className="w-full max-w-[720px] text-center">
          <Kicker>
            <span className="js-s21-k js-in">MEDICAL REVIEW</span>
          </Kicker>
          <Display>
            <span className="js-s21-title js-in">體檢過了，還可能被撤</span>
          </Display>
          <Mute>
            <span className="js-s21-copy js-in">
              醫院或役政判定常備役體位，甄選會複審仍可能不合格並撤銷。
            </span>
          </Mute>
        </div>
      </SceneShell>

      <SceneShell id="s22">
        <div className="w-full max-w-[640px] text-center">
          <p className="js-s22-k js-in label-hud text-[13px] text-[var(--color-alert)]">DO NOT CONCEAL</p>
          <Display className="js-s22-title js-in mt-4">不要隱瞞病史</Display>
          <p className="js-s22-copy js-in mt-8 text-[clamp(28px,4vw,48px)] font-bold tracking-wide">誠實告知。</p>
        </div>
      </SceneShell>

      <SceneShell id="s23">
        <div className="w-full max-w-[720px] text-center">
          <Kicker>
            <span className="js-s23-k js-in">SCHEDULE FLEX</span>
          </Kicker>
          <Display>
            <span className="js-s23-title js-in">時程可能調整</span>
          </Display>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["報名", "體檢", "考場", "考試", "入營"].map((item, index) => (
              <span
                key={item}
                className={`js-s23-item js-s23-item-${index} js-in border border-[var(--color-line-dim)] px-4 py-2`}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="js-s23-note js-in mt-8 text-[var(--color-muted)]">必要時得調整。以公告為準。</p>
        </div>
      </SceneShell>

      <SceneShell id="s24">
        <div className="w-full max-w-[980px] text-center">
          <Kicker>
            <span className="js-s24-k js-in">PHOTO MINEFIELD</span>
          </Kicker>
          <Display>
            <span className="js-s24-title js-in">照片不要踩這些</span>
          </Display>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {PHOTO_MINES.map((item, index) => (
              <div
                key={item.title}
                className={`js-s24-bad js-s24-bad-${index} js-in w-[140px] border border-[var(--color-alert)]/70 px-3 py-5`}
              >
                <p className="text-2xl text-[var(--color-alert)]">❌</p>
                <p className="mt-2 font-bold">{item.title}</p>
                <p className="mt-1 text-xs text-[var(--color-muted)]">{item.hint}</p>
              </div>
            ))}
            <div className="js-s24-ok js-in w-[140px] border border-[var(--color-signal)] bg-[rgb(198_242_90_/_0.08)] px-3 py-5">
              <p className="text-2xl">✅</p>
              <p className="mt-2 font-bold">證件照</p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">脫帽淺底正面半身</p>
            </div>
          </div>
          <p className="js-s24-note js-in mt-8 text-[var(--color-alert)]">不符視同缺件。</p>
        </div>
      </SceneShell>
    </>
  );
}

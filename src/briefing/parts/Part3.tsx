import { DOC_PACK } from "../constants";
import { Display, Kicker, Mute, Panel, SceneShell } from "../ui";
import { PhoneFrame } from "../visuals/PhoneFrame";

const STEPS = ["開啟網站", "填寫報名表", "上傳資料", "檢查後送出"];

export function Part3() {
  return (
    <>
      <SceneShell id="s09">
        <div className="grid w-full max-w-[980px] items-center gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <Kicker>
              <span className="js-s09-k js-in">APPLY ONLINE</span>
            </Kicker>
            <Display>
              <span className="js-s09-title js-in">線上報名</span>
            </Display>
            <Mute>
              <span className="js-s09-copy js-in">
                到國軍人才招募全球資訊網站，依步驟完成報名。
              </span>
            </Mute>
            <p className="js-s09-url js-in mt-6 font-mono text-[var(--color-signal)]">rdrc.mnd.gov.tw</p>
          </div>
          <div className="js-s09-phone js-in">
            <PhoneFrame>
              <p className="label-hud text-[10px] text-[var(--color-signal)]">RDRC.MND.GOV.TW</p>
              <p className="mt-4 text-lg font-bold">志願士兵報名</p>
              <ol className="mt-6 space-y-3">
                {STEPS.map((step, index) => (
                  <li
                    key={step}
                    className={`js-s09-step js-s09-step-${index} js-in flex items-center gap-3 border border-[var(--color-line-dim)] px-3 py-2 text-sm`}
                  >
                    <span className="label-hud text-[10px] text-[var(--color-signal)]">0{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </PhoneFrame>
          </div>
        </div>
      </SceneShell>

      <SceneShell id="s10">
        <div className="w-full max-w-[980px]">
          <Kicker>
            <span className="js-s10-k js-in">PACK YOUR FILES</span>
          </Kicker>
          <Display>
            <span className="js-s10-title js-in">先備齊，再送出</span>
          </Display>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {DOC_PACK.map((doc, index) => (
              <Panel key={doc.num} className={`js-s10-doc js-s10-doc-${index} js-in w-[170px]`}>
                <p className="label-hud text-[11px] text-[var(--color-signal)]">{doc.num}</p>
                <p className="mt-2 text-xl font-bold">{doc.title}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{doc.body}</p>
              </Panel>
            ))}
          </div>
          <p className="js-s10-note js-in mt-8 text-center text-[clamp(16px,2vw,20px)] text-[var(--color-muted)]">
            不要想報就送出，先把資料包備齊。
          </p>
        </div>
      </SceneShell>

      <SceneShell id="s11">
        <div className="w-full max-w-[720px] text-center">
          <p className="js-s11-k js-in label-hud text-[13px] tracking-[0.35em] text-[var(--color-alert)]">
            WARNING
          </p>
          <Display className="js-s11-title js-in mt-4 text-[var(--color-alert)]">未滿 18 歲</Display>
          <div className="js-s11-box js-in mx-auto mt-8 border border-[var(--color-alert)] bg-[rgb(40_8_8_/_0.55)] px-8 py-8">
            <p className="text-[clamp(18px,2.4vw,26px)] leading-relaxed">
              報名日未滿 18 歲
              <br />
              須法定代理人同意書
            </p>
          </div>
          <p className="js-s11-note js-in mt-6 text-[var(--color-muted)]">未檢具視同資格不符。</p>
        </div>
      </SceneShell>

      <SceneShell id="s12">
        <div className="w-full max-w-[760px] text-center">
          <Kicker>
            <span className="js-s12-k js-in">MINEFIELD</span>
          </Kicker>
          <p className="js-s12-q js-in text-[clamp(26px,4vw,40px)] font-bold">先隨便填，之後再改？</p>
          <p className="js-s12-x js-in mt-8 text-[clamp(64px,10vw,120px)] font-extrabold leading-none text-[var(--color-alert)]">
            ✕
          </p>
          <p className="js-s12-msg js-in mt-4 text-[clamp(20px,3vw,32px)] font-bold">逾當梯次截止不得改</p>
          <p className="js-s12-note js-in mt-6 text-[var(--color-muted)]">送出前，多看一次。</p>
        </div>
      </SceneShell>
    </>
  );
}

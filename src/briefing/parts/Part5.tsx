import { OFFICIAL } from "../constants";
import { Display, Kicker, Mute, SceneShell } from "../ui";
import { OfficialQr } from "../visuals/OfficialQr";
import { PhoneFrame } from "../visuals/PhoneFrame";

export function Part5() {
  return (
    <>
      <SceneShell id="s18">
        <div className="grid w-full max-w-[980px] items-center gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <Kicker>
              <span className="js-s18-k js-in">TAKE THE BRIEF HOME</span>
            </Kicker>
            <Display>
              <span className="js-s18-title js-in">想回家再研究？</span>
            </Display>
            <p className="js-s18-phone js-in mt-8 font-mono text-[clamp(32px,5vw,56px)] font-bold tracking-wide text-[var(--color-signal)]">
              {OFFICIAL.phone}
            </p>
            <p className="js-s18-copy js-in mt-3 text-[var(--color-muted)]">免付費諮詢 · 國軍人才招募中心</p>
            <p className="js-s18-url js-in mt-6 text-lg">
              電子簡章：{OFFICIAL.site.replace("https://", "")}
            </p>
          </div>
          <div className="js-s18-ui js-in">
            <PhoneFrame>
              <p className="label-hud text-[10px] text-[var(--color-signal)]">CALL</p>
              <p className="mt-6 text-center font-mono text-3xl font-bold">{OFFICIAL.phone}</p>
              <p className="mt-4 text-center text-sm text-[var(--color-muted)]">免付費諮詢電話</p>
              <div className="mt-10 border border-[var(--color-line-dim)] px-3 py-4 text-center text-sm">
                {OFFICIAL.siteLabel}
              </div>
            </PhoneFrame>
          </div>
        </div>
      </SceneShell>

      <SceneShell id="s19">
        <div className="w-full max-w-[880px] text-center">
          <Kicker>
            <span className="js-s19-k js-in">CTA 01</span>
          </Kicker>
          <Display>
            <span className="js-s19-title js-in">不用現在決定</span>
          </Display>
          <Mute>
            <span className="js-s19-copy js-in">先把資料帶回家。</span>
          </Mute>
          <div className="js-s19-qr js-in pointer-events-auto mt-8">
            <OfficialQr />
          </div>
        </div>
      </SceneShell>
    </>
  );
}

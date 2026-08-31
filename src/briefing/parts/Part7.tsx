import { MISSION_RECAP, OFFICIAL } from "../constants";
import { Display, Kicker, Mute, SceneShell } from "../ui";
import { OfficialQr } from "../visuals/OfficialQr";

export function Part7() {
  return (
    <>
      <SceneShell id="s25">
        <div className="w-full max-w-[920px] text-center">
          <Kicker>
            <span className="js-s25-k js-in">DEBRIEF</span>
          </Kicker>
          <Display>
            <span className="js-s25-title js-in">五關回顧</span>
          </Display>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {MISSION_RECAP.map((item, index) => (
              <article
                key={item.num}
                className={`js-s25-m js-s25-m-${index} js-in w-[160px] border border-[var(--color-line-dim)] px-4 py-6`}
              >
                <p className="label-hud text-[12px] text-[var(--color-signal)]">{item.num}</p>
                <p className="mt-3 text-xl font-bold">{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </SceneShell>

      <SceneShell id="s26">
        <div className="w-full max-w-[760px] text-center">
          <Kicker>
            <span className="js-s26-k js-in">NO DECISION TODAY</span>
          </Kicker>
          <Display>
            <span className="js-s26-title js-in">不是叫你現在決定</span>
          </Display>
          <Mute>
            <span className="js-s26-copy js-in">
              今天不是要你現在決定要不要當軍人，而是做下一個選擇前，至少知道這條路是什麼。
            </span>
          </Mute>
        </div>
      </SceneShell>

      <SceneShell id="s27">
        <div className="w-full max-w-[880px] text-center">
          <Kicker>
            <span className="js-s27-k js-in">FINAL CTA</span>
          </Kicker>
          <Display>
            <span className="js-s27-title js-in">先了解，再決定。</span>
          </Display>
          <p className="js-s27-copy js-in mt-5 text-[clamp(16px,2vw,20px)] text-[var(--color-muted)]">
            如果你對這條路有興趣
          </p>
          <div className="js-s27-qr js-in pointer-events-auto mt-8">
            <OfficialQr />
          </div>
          <p className="js-s27-meta js-in mt-6 text-[15px] leading-relaxed text-[#d5e0d6]">
            {OFFICIAL.siteLabel}
            <br />
            {OFFICIAL.phone} 免付費諮詢
          </p>
        </div>
      </SceneShell>
    </>
  );
}

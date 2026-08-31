import { OFFICIAL } from "../constants";

export function OfficialQr({ size = 196 }: { size?: number }) {
  return (
    <div className="inline-flex flex-col items-center gap-3">
      <a
        href={OFFICIAL.site}
        target="_blank"
        rel="noreferrer"
        className="bg-white p-3"
        aria-label={`開啟${OFFICIAL.siteLabel}`}
      >
        <img
          src={`${import.meta.env.BASE_URL}qr-rdrc.svg`}
          alt=""
          width={size}
          height={size}
          className="block h-auto w-full"
        />
      </a>
      <p className="label-hud text-[11px] text-[var(--color-muted)]">{OFFICIAL.site.replace("https://", "")}</p>
    </div>
  );
}

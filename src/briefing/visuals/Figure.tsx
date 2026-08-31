type FigureProps = {
  className?: string;
};

export function Figure({ className }: FigureProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        id="line-entry"
        className="js-draw"
        d="M40 200 H358"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        id="path-head"
        className="js-draw"
        cx="400"
        cy="200"
        r="42"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        id="path-neck"
        className="js-draw"
        d="M400 242 V278"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-shoulders"
        className="js-draw"
        d="M308 286 H492"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-arm-l"
        className="js-draw"
        d="M308 286 C292 330 286 372 274 428"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-arm-r"
        className="js-draw"
        d="M492 286 C508 330 514 372 526 428"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-torso-l"
        className="js-draw"
        d="M330 286 C328 360 332 410 338 468"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-torso-r"
        className="js-draw"
        d="M470 286 C472 360 468 410 462 468"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-hip"
        className="js-draw"
        d="M338 468 H462"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-leg-l"
        className="js-draw"
        d="M358 468 C352 560 348 660 338 812"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-leg-r"
        className="js-draw"
        d="M442 468 C448 560 452 660 462 812"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-feet"
        className="js-draw"
        d="M338 812 H318 M462 812 H482"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        id="path-ruler"
        className="js-draw"
        d="M214 158 V812 M208 158 H220 M208 242 H220 M208 468 H220 M208 812 H220"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <ellipse
        id="path-bmi"
        className="js-draw"
        cx="400"
        cy="372"
        rx="78"
        ry="92"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        id="line-scan"
        d="M250 158 H550"
        stroke="#c6f25a"
        strokeWidth="1.2"
        opacity="0"
      />

      <g className="js-fig-label" id="label-age" opacity="0">
        <text x="470" y="186" fill="#c6f25a" fontFamily="Share Tech Mono, monospace" fontSize="15" letterSpacing="4">
          AGE
        </text>
        <text x="470" y="214" fill="#e8f0e4" fontFamily="Share Tech Mono, monospace" fontSize="28">
          18–32
        </text>
      </g>

      <g className="js-fig-label" id="label-height" opacity="0">
        <text x="40" y="500" fill="#c6f25a" fontFamily="Share Tech Mono, monospace" fontSize="15" letterSpacing="4">
          HEIGHT
        </text>
        <text x="40" y="534" fill="#e8f0e4" fontFamily="Share Tech Mono, monospace" fontSize="26">
          150 CM ↑
        </text>
      </g>

      <g className="js-fig-label" id="label-bmi" opacity="0">
        <text x="500" y="360" fill="#c6f25a" fontFamily="Share Tech Mono, monospace" fontSize="15" letterSpacing="4">
          BMI
        </text>
        <text x="500" y="392" fill="#e8f0e4" fontFamily="Share Tech Mono, monospace" fontSize="18">
          M 16.5–32
        </text>
        <text x="500" y="416" fill="#8a9a8c" fontFamily="Share Tech Mono, monospace" fontSize="16">
          F 17–26
        </text>
      </g>

      <g className="js-fig-label" id="label-edu" opacity="0">
        <text x="500" y="250" fill="#c6f25a" fontFamily="Share Tech Mono, monospace" fontSize="15" letterSpacing="4">
          EDU
        </text>
        <text x="500" y="280" fill="#e8f0e4" fontFamily="Noto Sans TC, sans-serif" fontSize="22">
          高中以上
        </text>
      </g>
    </svg>
  );
}

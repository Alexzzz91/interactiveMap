import * as React from "react";

function SvgWhale(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect
        width={48}
        height={48}
        rx={24}
        fill="url(#Whale_svg__paint0_radial)"
      />
      <path d="M12 35.68h24v-24H12v24z" fill="url(#Whale_svg__pattern0)" />
      <defs>
        <radialGradient
          id="Whale_svg__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 24 -24 0 24 24)"
        >
          <stop stopColor="#E7E3FF" />
          <stop offset={1} stopColor="#DCD9F2" />
        </radialGradient>
        <pattern
          id="Whale_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Whale_svg__image0" transform="scale(.01563)" />
        </pattern>
        <image
          id="Whale_svg__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgWhale;

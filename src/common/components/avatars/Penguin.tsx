import * as React from "react";

function SvgPenguin(props: React.SVGProps<SVGSVGElement>) {
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
        fill="url(#Penguin_svg__paint0_radial)"
      />
      <path d="M12 35.68h24v-24H12v24z" fill="url(#Penguin_svg__pattern0)" />
      <defs>
        <radialGradient
          id="Penguin_svg__paint0_radial"
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
          id="Penguin_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Penguin_svg__image0" transform="scale(.01563)" />
        </pattern>
        <image
          id="Penguin_svg__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgPenguin;

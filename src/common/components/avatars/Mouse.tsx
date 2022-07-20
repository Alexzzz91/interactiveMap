import * as React from "react";

function SvgMouse(props: React.SVGProps<SVGSVGElement>) {
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
        fill="url(#Mouse_svg__paint0_radial)"
      />
      <path d="M12 35.68h24v-24H12v24z" fill="url(#Mouse_svg__pattern0)" />
      <defs>
        <radialGradient
          id="Mouse_svg__paint0_radial"
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
          id="Mouse_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Mouse_svg__image0" transform="scale(.01563)" />
        </pattern>
        <image
          id="Mouse_svg__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgMouse;
import * as React from "react";

function SvgBabyChick(props: React.SVGProps<SVGSVGElement>) {
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
        fill="url(#Baby_Chick_svg__paint0_radial)"
      />
      <path d="M12 35.68h24v-24H12v24z" fill="url(#Baby_Chick_svg__pattern0)" />
      <defs>
        <radialGradient
          id="Baby_Chick_svg__paint0_radial"
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
          id="Baby_Chick_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Baby_Chick_svg__image0" transform="scale(.01563)" />
        </pattern>
        <image
          id="Baby_Chick_svg__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgBabyChick;

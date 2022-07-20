import * as React from "react";

function SvgRabbit(props: React.SVGProps<SVGSVGElement>) {
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
        fill="url(#Rabbit_svg__paint0_radial)"
      />
      <path d="M12 35.68h24v-24H12v24z" fill="url(#Rabbit_svg__pattern0)" />
      <defs>
        <radialGradient
          id="Rabbit_svg__paint0_radial"
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
          id="Rabbit_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Rabbit_svg__image0" transform="scale(.01563)" />
        </pattern>
        <image
          id="Rabbit_svg__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgRabbit;

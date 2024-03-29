import React from 'react'

function SvgCoala(props: React.SVGProps<SVGSVGElement>) {
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
        fill="url(#Coala_svg__paint0_radial)"
      />
      <path d="M12 35.68h24v-24H12v24z" fill="url(#Coala_svg__pattern0)" />
      <defs>
        <radialGradient
          id="Coala_svg__paint0_radial"
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
          id="Coala_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Coala_svg__image0" transform="scale(.01563)" />
        </pattern>
        <image
          id="Coala_svg__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgCoala;

import React from 'react'

function SvgOwl(props: React.SVGProps<SVGSVGElement>) {
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
        fill="url(#Owl_svg__paint0_radial)"
      />
      <path d="M12 35.68h24v-24H12v24z" fill="url(#Owl_svg__pattern0)" />
      <defs>
        <radialGradient
          id="Owl_svg__paint0_radial"
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
          id="Owl_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Owl_svg__image0" transform="scale(.01563)" />
        </pattern>
        <image
          id="Owl_svg__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgOwl;

import React from 'react'

function SvgDog(props: React.SVGProps<SVGSVGElement>) {
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
        fill="url(#Dog_svg__paint0_radial)"
      />
      <path d="M12 35.68h24v-24H12v24z" fill="url(#Dog_svg__pattern0)" />
      <defs>
        <radialGradient
          id="Dog_svg__paint0_radial"
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
          id="Dog_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Dog_svg__image0" transform="scale(.01563)" />
        </pattern>
        <image
          id="Dog_svg__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgDog;

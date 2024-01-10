import React from 'react'

function SvgAlignTop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={22}
      height={22}
      {...props}
    >
      <defs>
        <linearGradient id="align-top_svg__a">
          <stop offset={0} stopColor="#ce5c00" />
          <stop offset={1} stopColor="#ce5c00" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#align-top_svg__a"
          id="align-top_svg__h"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 198 490.5)"
          x1={187.609}
          y1={489.359}
          x2={186.937}
          y2={489.359}
        />
        <linearGradient id="align-top_svg__b">
          <stop offset={0} stopColor="#fcaf3e" />
          <stop offset={1} stopColor="#fcaf3e" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#align-top_svg__b"
          id="align-top_svg__g"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 198 490.5)"
          x1={187.816}
          y1={489.547}
          x2={187.172}
          y2={489.547}
        />
        <linearGradient id="align-top_svg__c">
          <stop offset={0} stopColor="#ce5c00" />
          <stop offset={1} stopColor="#ce5c00" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#align-top_svg__c"
          id="align-top_svg__f"
          gradientUnits="userSpaceOnUse"
          x1={187.609}
          y1={489.359}
          x2={186.937}
          y2={489.359}
        />
        <linearGradient id="align-top_svg__d">
          <stop offset={0} stopColor="#fcaf3e" />
          <stop offset={1} stopColor="#fcaf3e" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#align-top_svg__d"
          id="align-top_svg__e"
          gradientUnits="userSpaceOnUse"
          x1={187.816}
          y1={489.547}
          x2={187.172}
          y2={489.547}
        />
      </defs>
      <g
        transform="matrix(0 1 1 0 -157 -473)"
        fill="#d3d7cf"
        stroke="#888a85"
        strokeMiterlimit={3}
      >
        <path strokeLinejoin="round" d="M475.5 169.5h12v7h-12z" />
        <rect
          ry={0}
          rx={0}
          y={170.5}
          x={476.5}
          height={5}
          width={10}
          stroke="#fff"
        />
      </g>
      <g transform="rotate(-90 -298 -171)" color="#000">
        <path
          style={{
            marker: "none",
          }}
          fill="#d3d7cf"
          fillRule="evenodd"
          stroke="#888a85"
          strokeLinejoin="round"
          strokeMiterlimit={0}
          d="M-489.5 129.496h18v7.004h-18z"
        />
        <rect
          y={130.5}
          x={-488.5}
          height={5}
          width={16}
          style={{
            marker: "none",
          }}
          rx={0}
          ry={0}
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit={2}
        />
      </g>
      <g strokeLinejoin="round" strokeMiterlimit={0}>
        <path fill="#fcaf3e" stroke="#ce5c00" d="M9.5 1.5h3v2h-3z" />
        <path
          d="M197.5 491.5h-11v-2h11"
          fill="url(#align-top_svg__e)"
          stroke="url(#align-top_svg__f)"
          transform="translate(-187 -488)"
        />
        <path
          d="M198.5 489.5h11v2h-11"
          fill="url(#align-top_svg__g)"
          stroke="url(#align-top_svg__h)"
          transform="translate(-187 -488)"
        />
      </g>
    </svg>
  );
}

export default SvgAlignTop;

import * as React from "react";

function SvgAlignCenter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={22}
      height={22}
      {...props}
    >
      <defs>
        <linearGradient id="align-center_svg__a">
          <stop offset={0} stopColor="#ce5c00" />
          <stop offset={1} stopColor="#ce5c00" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#align-center_svg__a"
          id="align-center_svg__h"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-396 -981)"
          x1={187.609}
          y1={489.359}
          x2={186.937}
          y2={489.359}
        />
        <linearGradient id="align-center_svg__b">
          <stop offset={0} stopColor="#fcaf3e" />
          <stop offset={1} stopColor="#fcaf3e" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#align-center_svg__b"
          id="align-center_svg__g"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-396 -981)"
          x1={187.816}
          y1={489.547}
          x2={187.172}
          y2={489.547}
        />
        <linearGradient id="align-center_svg__c">
          <stop offset={0} stopColor="#ce5c00" />
          <stop offset={1} stopColor="#ce5c00" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#align-center_svg__c"
          id="align-center_svg__f"
          gradientUnits="userSpaceOnUse"
          x1={187.609}
          y1={489.359}
          x2={186.937}
          y2={489.359}
        />
        <linearGradient id="align-center_svg__d">
          <stop offset={0} stopColor="#fcaf3e" />
          <stop offset={1} stopColor="#fcaf3e" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#align-center_svg__d"
          id="align-center_svg__e"
          gradientUnits="userSpaceOnUse"
          x1={187.816}
          y1={489.547}
          x2={187.172}
          y2={489.547}
        />
      </defs>
      <g transform="rotate(-90 -114 -54)">
        <path
          fill="#d3d7cf"
          stroke="#888a85"
          strokeLinejoin="round"
          strokeMiterlimit={3}
          d="M-177.5 76.5v-12h7v12z"
        />
        <g transform="rotate(-90 -363.5 -46.5)" color="#000">
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
        <rect
          width={10}
          height={5}
          x={-75.5}
          y={-176.5}
          transform="rotate(-90)"
          rx={0}
          ry={0}
          fill="none"
          stroke="#fff"
          strokeMiterlimit={3}
        />
        <g strokeLinejoin="round" strokeMiterlimit={0}>
          <path
            fill="url(#align-center_svg__e)"
            stroke="url(#align-center_svg__f)"
            d="M186.5 489.5h3v2h-3z"
            transform="translate(-377 -420)"
          />
          <path
            fill="#fcaf3e"
            stroke="#ce5c00"
            d="M-185.5 69.5h3v2h-3zM-180.5 69.5h3v2h-3zM-175.5 69.5h3v2h-3z"
          />
          <path
            transform="rotate(180 -188.5 -210)"
            fill="url(#align-center_svg__g)"
            stroke="url(#align-center_svg__h)"
            d="M-209.5-491.5h3v2h-3z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgAlignCenter;

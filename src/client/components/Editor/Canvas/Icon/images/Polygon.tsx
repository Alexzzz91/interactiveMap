import React from 'react'

function SvgPolygon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={22}
      height={22}
      {...props}
    >
      <defs>
        <radialGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.0034 -.00853 .00155 .18262 -.315 15.39)"
          r={9.979}
          fy={18.719}
          fx={10.531}
          cy={18.719}
          cx={10.531}
          id="polygon_svg__b"
          xlinkHref="#polygon_svg__a"
        />
        <linearGradient id="polygon_svg__a">
          <stop offset={0} stopColor="#777" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path
        d="M10.313 3.5l7.885 5.73-3.012 9.27H5.44L2.427 9.23z"
        fill="#ffffda"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeDashoffset={304.819}
      />
    </svg>
  );
}

export default SvgPolygon;

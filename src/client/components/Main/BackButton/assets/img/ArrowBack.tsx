import React from 'react'

function SvgArrowBack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ArrowBack_svg__clip0)">
        <path
          d="M18 10a1 1 0 00-1-1H5.83l4.88-4.88a1 1 0 00-1.415-1.415L2 10l7.295 7.295a.998.998 0 001.41-1.41L5.83 11H17a1 1 0 001-1z"
          fill="#25213F"
        />
      </g>
      <defs>
        <clipPath id="ArrowBack_svg__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgArrowBack;

import React from 'react'

function SvgPen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#pen_svg__clip0)">
        <path
          d="M9.085 2.914l4.001 4L4.4 15.603l-3.567.394a.75.75 0 01-.828-.829l.397-3.57 8.684-8.683zm6.475-.596L13.682.44a1.5 1.5 0 00-2.122 0L9.793 2.207l4 4 1.768-1.766a1.5 1.5 0 000-2.123z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="pen_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPen;

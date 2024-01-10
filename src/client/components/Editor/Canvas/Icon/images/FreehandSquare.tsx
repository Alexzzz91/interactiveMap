import React from 'react'

function SvgFreehandSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" {...props}>
      <defs>
        <linearGradient
          y2={1}
          x2={1}
          y1={0.102}
          x1={0.363}
          id="freehand-square_svg__a"
        >
          <stop stopColor="#fff" offset={0} />
          <stop stopColor="#3b7e9b" offset={1} />
        </linearGradient>
        <linearGradient
          y2={0.395}
          x2={0.613}
          y1={0.109}
          x1={0.305}
          id="freehand-square_svg__b"
        >
          <stop stopColor="#f9d225" offset={0} />
          <stop stopColor="#bf5f00" offset={1} />
        </linearGradient>
      </defs>
      <path
        strokeWidth={2}
        stroke="#000"
        fill="url(#freehand-square_svg__a)"
        d="M3.25 25.75h46v25h-46z"
      />
      <path
        strokeWidth={2}
        stroke="#000"
        fill="url(#freehand-square_svg__b)"
        d="M31.5 0l-8.75 20.25.75 24L40 27.75l6-12.5"
      />
      <path
        strokeWidth={2}
        stroke="#000"
        fill="#fce0a9"
        d="M39.5 28.5c-2-9.25-10.25-11.75-17-7.438l.484 24.442z"
      />
      <path
        strokeWidth={2}
        stroke="#000"
        d="M26.932 41.175c-.45-2.352-2.302-2.987-3.818-1.891l.108 6.213z"
      />
    </svg>
  );
}

export default SvgFreehandSquare;

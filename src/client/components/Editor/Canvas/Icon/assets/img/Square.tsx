import React from 'react'

function SvgSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={10} cy={10} r={9.5} stroke="#fff" />
    </svg>
  );
}

export default SvgSquare;

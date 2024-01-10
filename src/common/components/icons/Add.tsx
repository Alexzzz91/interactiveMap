import React from 'react'

function SvgAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y={7} width={16} height={2} rx={1} fill="#25213F" />
      <rect x={7} width={2} height={16} rx={1} fill="#25213F" />
    </svg>
  );
}

export default SvgAdd;

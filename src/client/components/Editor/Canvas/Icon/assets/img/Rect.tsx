import React from 'react'

function SvgRect(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="#fff" fill="transparent" d="M.5.5h19v19H.5z" />
    </svg>
  );
}

export default SvgRect;

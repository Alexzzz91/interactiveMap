import React from 'react'

function SvgAdd48(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#938DB7" d="M23 0h2v48h-2z" />
      <path fill="#938DB7" d="M48 23v2H0v-2z" />
    </svg>
  );
}

export default SvgAdd48;

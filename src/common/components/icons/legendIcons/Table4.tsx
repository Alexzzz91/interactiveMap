import React from 'react'

function SvgTable4(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={17}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" stroke="#25213F" d="M13.5 1v25H.5V1z" />
      <path
        fill="#25213F"
        d="M4 5.5v16H3v-16zM17 7.5v12h-1v-12zM16 9.5v8h-2v-8z"
      />
    </svg>
  );
}

export default SvgTable4;

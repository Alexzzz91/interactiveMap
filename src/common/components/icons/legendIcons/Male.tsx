import React from 'react'

function SvgMale(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0a2 2 0 110 4 2 2 0 010-4zm1.5 4.5h-.355c-.71.326-1.55.34-2.29 0H6.5A1.5 1.5 0 005 6v4.25c0 .414.336.75.75.75h.5v4.25c0 .414.336.75.75.75h2a.75.75 0 00.75-.75V11h.5a.75.75 0 00.75-.75V6a1.5 1.5 0 00-1.5-1.5z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgMale;

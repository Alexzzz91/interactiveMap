import React from 'react'

function SvgClone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5 0A1.5 1.5 0 0116 1.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 014 10.5v-9A1.5 1.5 0 015.5 0h9zm-9 13A2.503 2.503 0 013 10.5V4H1.5A1.5 1.5 0 000 5.5v9A1.5 1.5 0 001.5 16h9a1.5 1.5 0 001.5-1.5V13H5.5z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgClone;

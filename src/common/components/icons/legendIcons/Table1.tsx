import React from 'react'

function SvgTable1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={26}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" stroke="#25213F" d="M.5 3.5h25v13H.5z" />
      <path fill="#25213F" d="M5 13h16v1H5zM7 0h12v1H7zM9 1h8v2H9z" />
    </svg>
  );
}

export default SvgTable1;

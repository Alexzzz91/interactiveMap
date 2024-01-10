import React from 'react'

function SvgDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 1H9.75L9.456.415A.75.75 0 008.784 0H5.212a.741.741 0 00-.668.415L4.25 1H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM1.662 14.594A1.5 1.5 0 003.16 16h7.682a1.5 1.5 0 001.497-1.406L13 4H1l.663 10.594z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgDelete;

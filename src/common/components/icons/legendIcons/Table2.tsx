import * as React from "react";

function SvgTable2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={26}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" stroke="#25213F" d="M25.5 13.5H.5V.5h25z" />
      <path fill="#25213F" d="M21 4H5V3h16zM19 17H7v-1h12zM17 16H9v-2h8z" />
    </svg>
  );
}

export default SvgTable2;

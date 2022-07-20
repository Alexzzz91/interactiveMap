import * as React from "react";

function SvgTable(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M0 11h20v1H0z" />
      <path stroke="#fff" fill="transparent" d="M3.5.5h13v9h-13z" />
      <path fill="#fff" d="M2 12h1v8H2zM17 12h1v8h-1zM9 10h2v1H9z" />
    </svg>
  );
}

export default SvgTable;

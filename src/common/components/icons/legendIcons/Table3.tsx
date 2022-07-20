import * as React from "react";

function SvgTable3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={17}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" stroke="#25213F" d="M3.5 26V1h13v25z" />
      <path
        fill="#25213F"
        d="M13 21.5v-16h1v16zM0 19.5v-12h1v12zM1 17.5v-8h2v8z"
      />
    </svg>
  );
}

export default SvgTable3;

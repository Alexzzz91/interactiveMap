import * as React from "react";

function SvgLevel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.12} fill="#25213F">
        <path d="M0 0h8v1H0zM8 8h8v1H8z" />
        <path d="M8 0v9H7V0zM16 8v8h-1V8z" />
      </g>
    </svg>
  );
}

export default SvgLevel;

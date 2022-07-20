import * as React from "react";

function SvgPath(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 15v-.5h-5V.5h14v5h5v14h-14V15z"
        stroke="#fff"
        fill="transparent"
      />
      <rect
        x={12.5}
        y={3.5}
        width={4}
        height={4}
        rx={2}
        fill="#25213F"
        stroke="#fff"
      />
      <rect
        x={3.5}
        y={12.5}
        width={4}
        height={4}
        rx={2}
        fill="#25213F"
        stroke="#fff"
      />
    </svg>
  );
}

export default SvgPath;

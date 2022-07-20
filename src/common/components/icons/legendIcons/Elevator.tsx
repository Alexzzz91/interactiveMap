import * as React from "react";

function SvgElevator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.096 6.987h7.809a.901.901 0 00.734-1.424L9.074.553a1.318 1.318 0 00-2.147 0L3.36 5.564a.901.901 0 00.735 1.424zM11.905 9.013h-7.81a.901.901 0 00-.734 1.424l3.566 5.01a1.318 1.318 0 002.147 0l3.565-5.01a.901.901 0 00-.734-1.424z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgElevator;

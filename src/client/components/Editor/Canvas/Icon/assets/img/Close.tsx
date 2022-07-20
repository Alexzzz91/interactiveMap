import * as React from "react";

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.764.996A1.25 1.25 0 00.996 2.764L6.24 8.007.996 13.25a1.25 1.25 0 001.768 1.768l5.243-5.243 5.242 5.243a1.25 1.25 0 001.768-1.768L9.774 8.007l5.243-5.243A1.25 1.25 0 1013.249.996L8.007 6.24 2.764.996z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgClose;

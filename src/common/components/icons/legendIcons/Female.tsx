import * as React from "react";

function SvgFemale(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.75 0a2 2 0 110 4 2 2 0 010-4zm3.728 11.068l-1.5-6A.75.75 0 009.25 4.5h-.355c-.71.326-1.55.34-2.29 0H6.25a.75.75 0 00-.727.568l-1.5 6A.75.75 0 004.75 12H6.5v3.25c0 .414.336.75.75.75h1a.75.75 0 00.75-.75V12h1.75a.75.75 0 00.728-.932z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgFemale;

import * as React from "react";

function SvgLevelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={40} height={40} rx={8} />
      <text
        x={6}
        y={33}
        fill="#fff"
        style={{
          font: "700 15px Arial",
        }}
      >
        { // @ts-ignore
          `${props?.level || 1}.`
        }
      </text>
      <path fill="#25213F" d="M7 7h10v2H7zM15 15h10v2H15zM23 23h10v2H23z" />
      <path fill="#25213F" d="M17 7v10h-2V7zM25 15v10h-2V15zM33 23v10h-2V23z" />
    </svg>
  );
}

export default SvgLevelIcon;

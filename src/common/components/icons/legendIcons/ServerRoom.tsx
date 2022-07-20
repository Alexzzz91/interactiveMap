import * as React from "react";

function SvgServerRoom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 5H1a1 1 0 01-1-1V2a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1zm-1.5-2.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-2 0a.75.75 0 100 1.5.75.75 0 000-1.5zM15 10H1a1 1 0 01-1-1V7a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1zm-1.5-2.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-2 0a.75.75 0 100 1.5.75.75 0 000-1.5zM15 15H1a1 1 0 01-1-1v-2a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1zm-1.5-2.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-2 0a.75.75 0 100 1.5.75.75 0 000-1.5z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgServerRoom;

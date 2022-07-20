import * as React from "react";

function SvgLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#link_svg__clip0)" fill="#938DB7">
        <path d="M7.114 13.121l2.297-2.296 1.414 1.414-2.296 2.296a5 5 0 01-7.071-7.07l2.296-2.297 1.414 1.414L2.872 8.88a3 3 0 004.242 4.242zM8.876 2.874L6.582 5.168 5.168 3.754 7.462 1.46a5 5 0 117.071 7.071l-2.294 2.294-1.414-1.414 2.294-2.294a3 3 0 10-4.243-4.243z" />
        <path d="M4.424 11.576a1 1 0 010-1.414l5.657-5.657a1 1 0 111.414 1.414l-5.657 5.657a1 1 0 01-1.414 0z" />
      </g>
      <defs>
        <clipPath id="link_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgLink;

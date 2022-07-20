import * as React from "react";

function SvgCouch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 7.167v1.666h8V7.167c0-.92.717-1.667 1.6-1.667h.8C14.4 4.12 13.325 3 12 3H4C2.675 3 1.6 4.12 1.6 5.5h.8c.883 0 1.6.747 1.6 1.667zm10.4-.834h-.8c-.442 0-.8.373-.8.834v2.5H3.2v-2.5c0-.461-.358-.834-.8-.834h-.8C.717 6.333 0 7.081 0 8c0 .615.325 1.146.8 1.435v3.148c0 .23.18.417.4.417h1.6c.22 0 .4-.188.4-.417v-.416h9.6v.416c0 .23.18.417.4.417h1.6c.22 0 .4-.188.4-.417V9.435c.475-.29.8-.82.8-1.435 0-.92-.717-1.667-1.6-1.667z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgCouch;

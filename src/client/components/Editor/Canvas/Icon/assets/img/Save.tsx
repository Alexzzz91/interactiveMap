import * as React from "react";

function SvgSave(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.498 3.498L12.502.502A1.714 1.714 0 0011.29 0H1.714C.767 0 0 .767 0 1.714v12.572C0 15.233.767 16 1.714 16h12.572c.947 0 1.714-.768 1.714-1.714V4.71c0-.455-.18-.89-.502-1.212zM8 13.714a2.286 2.286 0 110-4.571 2.286 2.286 0 010 4.571zM11.429 2.84v3.59a.429.429 0 01-.429.428H2.714a.429.429 0 01-.428-.428V2.714c0-.236.192-.428.428-.428h8.162c.113 0 .222.045.303.125l.124.125a.43.43 0 01.126.303z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgSave;

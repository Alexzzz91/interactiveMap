import * as React from "react";

function SvgArchive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 14c0 .553.447 1 1 1h12c.553 0 1-.447 1-1V5H1v9zm5-6.625C6 7.169 6.169 7 6.375 7h3.25c.206 0 .375.169.375.375v.25A.376.376 0 019.625 8h-3.25A.376.376 0 016 7.625v-.25zM15 1H1c-.553 0-1 .447-1 1v1.5c0 .275.225.5.5.5h15c.275 0 .5-.225.5-.5V2c0-.553-.447-1-1-1z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgArchive;

import * as React from "react";

function SvgCoffeePoint(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.8 8.8h4.8A2.4 2.4 0 0012 6.4h.8c1.765 0 3.2-1.435 3.2-3.2C16 1.435 14.565 0 12.8 0H3c-.333 0-.6.268-.6.6v5.8a2.4 2.4 0 002.4 2.4zm8-7.2c.882 0 1.6.717 1.6 1.6 0 .882-.718 1.6-1.6 1.6H12V1.6h.8zm1.192 9.6H1.207c-1.19 0-1.525-1.6-.9-1.6H14.89c.625 0 .295 1.6-.898 1.6z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgCoffeePoint;

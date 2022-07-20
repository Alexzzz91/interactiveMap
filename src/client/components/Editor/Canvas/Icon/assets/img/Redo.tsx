import * as React from "react";

function SvgRedo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.635 0h-1.481a.375.375 0 00-.375.393l.125 2.586A7.732 7.732 0 008 .25C3.73.25.247 3.735.25 8.006a7.75 7.75 0 0012.943 5.747.376.376 0 00.015-.545l-1.062-1.062a.375.375 0 00-.512-.018 5.5 5.5 0 11.932-7.197L9.393 4.78A.375.375 0 009 5.154v1.482a.375.375 0 00.375.375h6.26a.375.375 0 00.375-.375V.375A.375.375 0 0015.635 0z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgRedo;

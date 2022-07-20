import * as React from "react";

function SvgKitchen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Kitchen_svg__clip0)">
        <path
          d="M7.997.475C8.022.622 8.5 3.428 8.5 4.5c0 1.634-.869 2.8-2.153 3.269l.403 7.44A.752.752 0 016 16H4a.752.752 0 01-.75-.79l.403-7.441C2.366 7.3 1.5 6.13 1.5 4.5c0-1.075.478-3.878.503-4.025.1-.634 1.416-.644 1.497.034v4.413c.04.106.472.1.5 0 .044-.79.247-4.35.25-4.431.103-.65 1.397-.65 1.497 0 .006.084.206 3.64.25 4.43.028.1.462.107.5 0V.51c.081-.675 1.4-.668 1.5-.034zm3.725 8.928l-.469 5.784A.75.75 0 0012 16h1.75c.416 0 .75-.334.75-.75V.75a.75.75 0 00-.75-.75c-2.578 0-6.919 5.578-2.028 9.403z"
          fill="#25213F"
        />
      </g>
      <defs>
        <clipPath id="Kitchen_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgKitchen;

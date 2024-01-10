import React from 'react'

function SvgChef(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Chef_svg__clip0)">
        <path
          d="M8 3.5A1.75 1.75 0 108 0a1.75 1.75 0 000 3.5zM13.5 14h-11a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm2.277-8.245l-.89-.497c-.233-.157-.53-.077-.697.146a1.487 1.487 0 01-1.476.57c-.723-.135-1.214-.82-1.214-1.555A.419.419 0 0011.081 4H9.87a.407.407 0 00-.402.31 1.5 1.5 0 01-2.936 0A.405.405 0 006.13 4H4.92a.419.419 0 00-.419.419c0 .803-.594 1.523-1.396 1.578a1.484 1.484 0 01-1.298-.599c-.165-.221-.46-.295-.69-.142l-.893.5a.5.5 0 00-.17.64L3.257 13h9.486l3.204-6.605a.499.499 0 00-.17-.64z"
          fill="#25213F"
        />
      </g>
      <defs>
        <clipPath id="Chef_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgChef;

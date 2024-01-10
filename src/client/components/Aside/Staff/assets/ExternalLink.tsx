import React from 'react'

function SvgExternalLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#externalLink_svg__clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 3.414V5a1 1 0 002 0V1a1 1 0 00-1-1h-4a1 1 0 100 2h1.586L7.293 7.293a1 1 0 001.414 1.414L14 3.414zM5.5 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-3.5a1 1 0 00-2 0V14H2V2h3.5a1 1 0 000-2z"
          fill="#938DB7"
        />
      </g>
      <defs>
        <clipPath id="externalLink_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgExternalLink;

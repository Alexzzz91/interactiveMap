import React, { SVGProps } from 'react'

function SvgAppletv(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 120 120"
      {...props}
    >
      <defs>
        <linearGradient
          id="appletv_svg__a"
          x1={60}
          x2={60}
          y1={1.51}
          y2={121.36}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#333" />
          <stop offset={1} stopColor="#111" />
        </linearGradient>
      </defs>
      <rect width={120} height={120} fill="url(#appletv_svg__a)" rx={26} />
      <path
        fill="#f9f9f9"
        fillRule="evenodd"
        d="M46.55 58.84a9.81 9.81 0 014.69-8.25 10.14 10.14 0 00-7.93-4.3c-3.37-.34-6.59 2-8.3 2s-4.35-1.94-7.15-1.88a10.58 10.58 0 00-9 5.43c-3.82 6.63-1 16.46 2.75 21.84 1.82 2.62 4 5.59 6.84 5.48s3.78-1.77 7.1-1.77 4.25 1.77 7.16 1.71 4.82-2.68 6.63-5.32a23.62 23.62 0 003-6.17 9.53 9.53 0 01-5.79-8.77zm-5.45-16.1a9.54 9.54 0 002.25-6.93A9.72 9.72 0 0037 39.1a9 9 0 00-2.3 6.7 8 8 0 006.4-3.06z"
      />
      <path
        fill="#f9f9f9"
        d="M72 52.85v-5h-6.09v-7H60.5v7h-4.72v5h4.72V71a8.13 8.13 0 008.12 8.12h2.71v-5.38h-2.71A2.72 2.72 0 0165.91 71V52.85zm25.3-6.4l-8.12 24.38-8.13-24.38h-5.42L86.47 79h5.42l10.83-32.51z"
      />
    </svg>
  );
}

export default SvgAppletv;

import React from 'react'

function SvgBtnGoogleSigninDarkNormalWeb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={193}
      height={48}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <filter
          x="-1.1%"
          y="-5%"
          width="102.2%"
          height="112.5%"
          filterUnits="objectBoundingBox"
          id="btn_google_signin_dark_normal_web_svg__a"
        >
          <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={0.5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feOffset in="SourceAlpha" result="shadowOffsetOuter2" />
          <feGaussianBlur
            stdDeviation={0.5}
            in="shadowOffsetOuter2"
            result="shadowBlurOuter2"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            in="shadowBlurOuter2"
            result="shadowMatrixOuter2"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="shadowMatrixOuter2" />
          </feMerge>
        </filter>
        <rect
          id="btn_google_signin_dark_normal_web_svg__b"
          x={0}
          y={0}
          width={185}
          height={40}
          rx={2}
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(4 4)">
          <use
            fill="#000"
            filter="url(#btn_google_signin_dark_normal_web_svg__a)"
            xlinkHref="#btn_google_signin_dark_normal_web_svg__b"
          />
          <use
            fill="#4285F4"
            xlinkHref="#btn_google_signin_dark_normal_web_svg__b"
          />
        </g>
        <text
          fontFamily="Helvetica"
          fontSize={14}
          letterSpacing={0.219}
          fill="#FFF"
        >
          <tspan x={54} y={30}>
            {"Sign in with Google"}
          </tspan>
        </text>
        <rect fill="#FFF" x={5} y={5} width={38} height={38} rx={1} />
        <path
          d="M32.64 24.205c0-.639-.057-1.252-.164-1.841H24v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
          fill="#4285F4"
        />
        <path
          d="M24 33c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0024 33z"
          fill="#34A853"
        />
        <path
          d="M18.964 25.71a5.41 5.41 0 01-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007A8.996 8.996 0 0015 24c0 1.452.348 2.827.957 4.042l3.007-2.332z"
          fill="#FBBC05"
        />
        <path
          d="M24 18.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C28.463 15.891 26.426 15 24 15a8.997 8.997 0 00-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71z"
          fill="#EA4335"
        />
        <path d="M15 15h18v18H15z" />
      </g>
    </svg>
  );
}

export default SvgBtnGoogleSigninDarkNormalWeb;

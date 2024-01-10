import React from 'react'

function SvgBoard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="M10.984 19.654h5.428v13.509h-5.428zm12.302-4.394h5.428v17.903h-5.428zm12.302-4.943h5.428v22.846h-5.428z" />
        <path d="M44.7 33.163H7.3A2.563 2.563 0 014.736 30.6V4.563A2.563 2.563 0 017.299 2h37.402a2.563 2.563 0 012.562 2.563V30.6a2.563 2.563 0 01-2.562 2.563zM39.675 50l-8.931-16.834m-9.488 0L12.325 50M26 33.163V50" />
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="M10.984 19.654h5.428v13.509h-5.428zm12.302-4.394h5.428v17.903h-5.428zm12.302-4.943h5.428v22.846h-5.428z" />
        <path d="M44.7 33.163H7.3A2.563 2.563 0 014.736 30.6V4.563A2.563 2.563 0 017.299 2h37.402a2.563 2.563 0 012.562 2.563V30.6a2.563 2.563 0 01-2.562 2.563zM39.675 50l-8.931-16.834m-9.488 0L12.325 50M26 33.163V50" />
      </g>
    </svg>
  );
}

export default SvgBoard;

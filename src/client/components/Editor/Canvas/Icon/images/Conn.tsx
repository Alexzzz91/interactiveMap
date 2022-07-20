import * as React from "react";

function SvgConn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <svg
        viewBox="0 0 24 24"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <linearGradient
            y2={0.184}
            x2={0.297}
            y1={0.922}
            x1={0.621}
            id="conn_svg__a"
          >
            <stop stopColor="#417dad" offset={0} />
            <stop stopColor="#fff" offset={1} />
          </linearGradient>
        </defs>
        <path stroke="#000" fill="none" d="M5.647 5.601L18.5 18.626" />
        <path
          opacity={0.75}
          strokeWidth={0.5}
          fill="url(#conn_svg__a)"
          stroke="#000"
          d="M.5.5h9.625v5.125H.5zM13.75 18.25h9.625v5.125H13.75z"
        />
        <g stroke="#000">
          <path d="M14.571 9.121l-.982 5.189 2.708-4.36" fill="#a0a0a0" />
          <path
            d="M14.276 6.763c-.26.725-.408 1.656-.338 2.154l2.907 1.25c.31-.211 1.082-1.18 1.082-1.737M16.289.375l-2.464 5.93L18.59 8.7l2.131-4.967"
            fill="url(#conn_svg__a)"
          />
        </g>
      </svg>
    </svg>
  );
}

export default SvgConn;

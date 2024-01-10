import React from 'react'

function SvgPrinter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#25213F">
        <path d="M2 4c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h1V8h10v2h1c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1H2zM4 1v2h8V1H4z" />
        <path d="M4 9v5h8V9z" />
      </g>
    </svg>
  );
}

export default SvgPrinter;

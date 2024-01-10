import React from 'react'

function SvgRectangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M497 76H15C6.716 76 0 82.716 0 91v330c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15V91c0-8.284-6.716-15-15-15zm-15 330H30V106h452v300z" />
    </svg>
  );
}

export default SvgRectangle;

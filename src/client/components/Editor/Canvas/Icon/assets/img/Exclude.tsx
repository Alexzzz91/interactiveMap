import React from 'react'

function SvgExclude(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M497 122H392V15c0-8.284-6.716-15-15-15H15C6.716 0 0 6.716 0 15v362c0 8.284 6.716 15 15 15h107v105c0 8.284 6.716 15 15 15h360c8.284 0 15-6.716 15-15V137c0-8.284-6.716-15-15-15zm-375 15v225H30V30h332v92H137c-8.284 0-15 6.716-15 15zm240 15v210H152V152h210zm120 330H152v-90h225c8.284 0 15-6.716 15-15V152h90v330z" />
    </svg>
  );
}

export default SvgExclude;

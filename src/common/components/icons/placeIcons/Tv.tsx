import React from 'react'

function SvgTv(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="none" d="M0 0h48v48H0z" />
      <path d="M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24z" />
    </svg>
  );
}

export default SvgTv;

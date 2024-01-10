import React from 'react'

function SvgCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M256 0C115.03 0 0 115.05 0 256c0 140.97 115.05 256 256 256 140.97 0 256-115.05 256-256C512 115.03 396.95 0 256 0zm0 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z" />
    </svg>
  );
}

export default SvgCircle;

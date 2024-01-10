import React from 'react'

function SvgLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M497 0h-62c-8.284 0-15 6.716-15 15v55.787L68.787 422H15c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-53.787L441.213 92H497c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15zM60 482H30v-30h30v30zM482 62h-32V30h32v32z" />
    </svg>
  );
}

export default SvgLine;

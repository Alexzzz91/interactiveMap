import * as React from "react";

function SvgMoon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      className="moon" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round"
      strokeLinejoin="round" 
      strokeWidth="2" 
      width={24} 
      height={24} 
      // viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
    </svg>
  );
}

export default SvgMoon;

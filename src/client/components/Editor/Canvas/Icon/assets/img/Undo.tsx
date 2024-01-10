import React from 'react'

function SvgUndo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.635 7.01H.375A.375.375 0 010 6.635V.375C0 .168.168 0 .375 0h1.5c.207 0 .375.168.375.375v2.441A7.73 7.73 0 018.068.25a7.732 7.732 0 017.692 7.767 7.75 7.75 0 01-12.953 5.726.376.376 0 01-.015-.544l1.062-1.062a.374.374 0 01.512-.016A5.48 5.48 0 008.01 13.5c3.04 0 5.5-2.46 5.5-5.5s-2.46-5.5-5.5-5.5a5.49 5.49 0 00-4.446 2.26h3.071c.208 0 .375.168.375.375v1.5a.375.375 0 01-.375.375z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgUndo;

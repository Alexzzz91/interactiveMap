import React from 'react'

function SvgIconOk(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={12}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.856 5.805a.822.822 0 00.855-.091L11.533.066c.214-.183.588.045.428.32L4.957 9.76a.715.715 0 01-1.07 0L.039 4.73c-.16-.274.214-.64.535-.457l3.283 1.532z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgIconOk;

import * as React from "react";

function SvgSelect(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={13}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.553 12.224l2.763 5.525-2.58 1.106-2.789-5.579-.253-.506-.471.314L.5 15.566V1.106l10.931 9.62-3.54.786-.625.139.287.573z"
        stroke="#fff"
      />
    </svg>
  );
}

export default SvgSelect;

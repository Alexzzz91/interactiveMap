import React from 'react'

function SvgEditor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.743 13.476l4.242 4.242 6.586-6.586-4.242-4.242-6.586 6.586zm-.97 1.86l-.585 3.937 3.937-.586-3.35-3.35h-.001zm8.97-9.86l4.242 4.242 1.476-1.475L15.218 4l-1.475 1.476zM3.515 12.874l10.29-10.288a2.001 2.001 0 012.829 0l4.242 4.242a2 2 0 010 2.83l-10.29 10.287a2 2 0 01-1.12.564l-6.32.941a1.001 1.001 0 01-1.135-1.136l.94-6.32a2 2 0 01.565-1.12h-.001z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgEditor;

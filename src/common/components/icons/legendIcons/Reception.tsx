import React from 'react'

function SvgReception(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0a2 2 0 110 4 2 2 0 010-4zM11.24 5.682l.33 1.007c.197.598.295.898.145 1.104C11.565 8 11.25 8 10.62 8H5.38c-.63 0-.945 0-1.095-.207-.15-.206-.051-.506.145-1.105l.33-1.006a.905.905 0 01.387-.491C5.34 5.067 5.575 5 5.818 5h.517a4.772 4.772 0 003.33 0h.517c.243 0 .48.067.671.19a.906.906 0 01.387.492zM11.36 9H4.64c-1.807 0-2.711 0-3.267.462a2 2 0 00-.552.731c-.291.662-.043 1.53.454 3.268.297 1.043.446 1.564.788 1.921.15.156.323.287.514.388.437.23.98.23 2.063.23h6.72c1.084 0 1.626 0 2.063-.23.191-.1.365-.232.514-.388.342-.357.49-.878.788-1.92.497-1.738.745-2.607.454-3.269a2.002 2.002 0 00-.552-.731C14.07 9 13.167 9 11.36 9z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgReception;

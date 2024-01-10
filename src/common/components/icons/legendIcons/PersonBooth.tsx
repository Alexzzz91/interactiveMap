import React from 'react'

function SvgPersonBooth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.333 14.778c0 .244.2.444.445.444h.889c.244 0 .444-.2.444-.444v-4.89H5.333v4.89zm.89-7.556H4.807L3.553 5.964a1.765 1.765 0 00-1.256-.52h-.52A1.778 1.778 0 000 7.224L.007 9.89 0 14.333a.887.887 0 101.775 0l.003-2.797c.025.014.044.036.07.047l.808 1.195v1.555a.888.888 0 101.777 0v-1.57c0-.274-.064-.55-.186-.794l-1.144-1.702v-2.24l.58.581c.253.253.586.392.942.392h1.597a.888.888 0 100-1.778zM1.777 4.556a1.334 1.334 0 100-2.668 1.334 1.334 0 000 2.668zM8 1.889l.875 6.197-.858 4.295c-.12.6.36 1.063.872 1.063.422 0 .778-.252.897-.844a.885.885 0 001.77-.044.888.888 0 101.777 0V1H8v.889zm-2.667 0v4.444h1.778V1h-.889a.888.888 0 00-.889.889zM15.111 1h-.889v13.778c0 .244.2.444.445.444h.889c.244 0 .444-.2.444-.444V1.888A.888.888 0 0015.111 1z"
        fill="#25213F"
      />
    </svg>
  );
}

export default SvgPersonBooth;

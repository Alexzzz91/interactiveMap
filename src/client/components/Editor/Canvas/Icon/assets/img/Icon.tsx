import React from 'react'

function SvgIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Icon_svg__clip0)">
        <path
          d="M18.346 6.998l-.017-.011a.09.09 0 00-.076-.014.211.211 0 00-.117.083l-.399-.301a1.86 1.86 0 01-1.845.712l2.454-.469zm0 0l.018.01 1.09.61a.125.125 0 01.033.152l-.006.012-.006.013L15.6 16.75H4.4L.525 7.796l-.006-.012-.006-.013a.125.125 0 01.033-.152l1.093-.612.017-.01.016-.01a.094.094 0 01.078-.015.188.188 0 01.106.074l.401-.298-.402.297a2.355 2.355 0 002.06.95c1.298-.089 2.21-1.24 2.21-2.472a.023.023 0 01.023-.023h1.515a.039.039 0 01.016.004 2.375 2.375 0 004.642 0 .038.038 0 01.016-.004h1.514a.024.024 0 01.024.023c0 1.121.748 2.216 1.924 2.435l2.547-.96zm-7.409-3.407A1.688 1.688 0 119.063.784a1.688 1.688 0 011.876 2.807z"
          stroke="#fff"
          fill="transparent"
        />
        <path fill="#fff" d="M0 19h20v1H0z" />
      </g>
      <defs>
        <clipPath id="Icon_svg__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgIcon;

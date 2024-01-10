import React from 'react'

function SvgText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={22}
      height={22}
      {...props}
    >
      <defs>
        <linearGradient id="text_svg__c">
          <stop offset={0} stopColor="#1f1f1f" />
          <stop offset={1} stopColor="#5c5c5c" />
        </linearGradient>
        <linearGradient id="text_svg__a">
          <stop offset={0} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient id="text_svg__b">
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#text_svg__b"
          id="text_svg__f"
          x1={19.944}
          y1={16.527}
          x2={24.134}
          y2={19.642}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.49826 0 0 .46652 -.8 -.84)"
        />
        <linearGradient
          xlinkHref="#text_svg__c"
          id="text_svg__e"
          x1={23.306}
          y1={24.844}
          x2={14.389}
          y2={9.59}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.49826 0 0 .4886 -.8 -1.274)"
        />
        <radialGradient
          xlinkHref="#text_svg__a"
          id="text_svg__d"
          cx={22.571}
          cy={30.857}
          fx={22.571}
          fy={30.857}
          r={15.571}
          gradientTransform="matrix(1 0 0 .65138 0 10.758)"
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <path
        style={{
          marker: "none",
        }}
        d="M38.143 30.857a15.571 10.143 0 11-31.143 0 15.571 10.143 0 1131.143 0z"
        transform="matrix(.70642 0 0 .20802 -4.945 13.471)"
        opacity={0.474}
        color="#000"
        fill="url(#text_svg__d)"
        overflow="visible"
      />
      <path
        style={{
          textAlign: "start",
          lineHeight: "125%",
        }}
        d="M15.19 15.52H7.152L5.86 19.515H.516L8.101.488h6.127l7.333 18.977h-5.117L15.19 15.52M8.4 12.474h5.46L11.17 5.153 8.4 12.474"
        fontSize={54.869}
        fontWeight={700}
        fill="url(#text_svg__e)"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        fontFamily="Bitstream Vera Sans"
      />
      <path
        style={{
          textAlign: "start",
          lineHeight: "125%",
        }}
        d="M15.685 15.16H6.67l-1.254 3.367H2.004L8.738 1.462h4.774l6.51 16.948H16.9l-1.215-3.25z"
        fontSize={54.869}
        fontWeight={700}
        opacity={0.379}
        fill="none"
        stroke="url(#text_svg__f)"
        strokeLinejoin="round"
        fontFamily="Bitstream Vera Sans"
      />
      <image
        height={459}
        width={400}
        xlinkHref="/home/andreas/palette2.png"
        x={-354.936}
        y={-214.538}
      />
      <path
        d="M8.169 13.552h5.979"
        fill="none"
        stroke="#999"
        strokeLinecap="round"
        opacity={0.511}
      />
    </svg>
  );
}

export default SvgText;

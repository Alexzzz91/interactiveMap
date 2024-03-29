import React from 'react'

function SvgPalm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 59" {...props}>
      <path
        d="M30.34 17.966c-.114.009-.224.034-.34.034a3.963 3.963 0 01-2.52-.917c.319.57.52 1.215.52 1.917 0 .6-.141 1.164-.378 1.675C29.698 31.774 32.325 51.675 26 58h14s-.39-26.086-9.66-40.034z"
        fill="#805333"
      />
      <path
        fill="none"
        stroke="#a4e869"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M1 58h57"
      />
      <circle cx={16} cy={54} r={4} fill="#7f6e5d" />
      <circle cx={30} cy={14} r={4} fill="#cbb292" />
      <path
        d="M36.856 5.684c-3.486.934-6.354 2.7-8.138 4.545A3.954 3.954 0 0130 10a3.985 3.985 0 013.772 2.722l3.188-.854.931-2.32 1.967 1.544L50 8.374c-.715-2.667-6.742-4.405-13.144-2.69z"
        fill="#4fba6f"
      />
      <path
        d="M27.563 10.849c-.86-2.6-3.409-5.828-7.19-8.117C14.703-.699 8.43-.71 7 1.652l8.983 5.437 2.319-.934.248 2.488 7.531 4.558a3.982 3.982 0 011.482-2.352z"
        fill="#4c8056"
      />
      <path
        d="M26 14c0-.33.051-.646.127-.953-2.019-1.85-7.016-2.771-12.271-1.362C7.454 13.4 3.103 17.918 3.818 20.586l10.142-2.718.931-2.32 1.967 1.544 4.737-1.269A3.957 3.957 0 0124 15c.165 0 .322.029.482.049l1.581-.424A4.023 4.023 0 0126 14z"
        fill="#4fba6f"
      />
      <path
        d="M26.501 15.902A3.956 3.956 0 0024 15a4 4 0 104 4c0-.692-.192-1.334-.501-1.902a3.986 3.986 0 01-.998-1.196z"
        fill="#7f6e5d"
      />
      <path
        fill="none"
        stroke="#a4e869"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M43 58v-5M46 58v-3M49 58v-5M24 57v-3"
      />
      <g fill="#cb8252">
        <path d="M35.726 30h-6.631c.084.66.163 1.327.238 2h6.972a73.578 73.578 0 00-.579-2zM33.098 23a41.644 41.644 0 00-.977-2h-4.44c.119.641.239 1.307.359 2h5.058z" />
      </g>
      <g fill="#cb8252">
        <path d="M39.276 48h-9.59a34.103 34.103 0 01-.274 2h10.074c-.062-.64-.132-1.308-.21-2zM29.958 41h8.327c-.113-.66-.234-1.327-.363-2h-8.029c.029.67.052 1.338.065 2z" />
      </g>
    </svg>
  );
}

export default SvgPalm;

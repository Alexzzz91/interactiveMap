import React from 'react'

function SvgCoffeeMachine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M92.5 4.5H38.8c-2.3 0-4.2 1.9-4.2 4.2v28.5c0 2.3 1.9 4.2 4.2 4.2h17.4c.8 0 2.9.2 4.8 2 2.1 2 2.1 4.6 2.1 5.1v26.2c0 .6 0 2.9-2 4.9-1.6 1.7-3.6 2-4.5 2.1H9.5c-3.4 0-6.1 2.8-6.1 6.1v1.5c0 3.4 2.8 6.1 6.1 6.1H91.8c2.6 0 4.7-2.1 4.7-4.7v-82c.2-2.3-1.7-4.2-4-4.2zm-3.3 16.8c-2 3.5-6.6 4.8-10.1 2.7-3.5-2-4.8-6.6-2.7-10.1 2-3.5 6.6-4.8 10.1-2.7 3.5 2 4.7 6.6 2.7 10.1z" />
      <path d="M19.6 33.1H22.4c.3 1.1.7 2.2 1 3.4h4.2c.3-1.1.7-2.2 1-3.4h2.7V10.2H19.6c-3.1 0-5.7 2.5-5.7 5.7v11.5c0 3.1 2.6 5.7 5.7 5.7zM19.8 75.9h13.3c3.3 0 6-2.2 6.9-5.2h.4c6.2 0 11.2-4.9 11.2-10.9s-5-10.9-11.2-10.9H12.6v19.8c0 3.9 3.2 7.2 7.2 7.2zm20.5-22.4s.1 0 0 0c3.7 0 6.6 2.8 6.6 6.3s-2.9 6.3-6.6 6.3h-.1l.1-12.6z" />
    </svg>
  );
}

export default SvgCoffeeMachine;

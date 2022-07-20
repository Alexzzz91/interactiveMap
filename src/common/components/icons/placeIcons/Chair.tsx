import * as React from "react";

function SvgChair(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M69.5 50.4c.5-.1.9-.1 1.4-.2 3-.3 6-.5 9-.5 1.5 0 2.6-1.2 2.6-2.7s-1.2-2.6-2.7-2.6c-3.1 0-6.3.2-9.5.5-1 .1-1.9.2-2.8.3-.2 0-.3-.1-.5 0-4.7.6-9.4.7-14 .1-6.2-.7-13.2-1.6-18.7-6.1-8.4-6.9-8.9-19-8.8-22.6 0-.1 0-.2-.1-.3-.1-1.7-.2-3.7-.6-6-.5-2.8-1.3-5.5-2.3-8.2C22 .7 20.4.1 19.1.6c-1.4.5-2 2.1-1.5 3.4.9 2.3 1.6 4.7 2 7.1.7 3.9.6 6.8.5 8.7v.9c-.2 9.2 4.7 21.3 14.1 27.6-.3.3-.6.7-.7 1.1L20.4 96.1c-.4 1.4.4 2.9 1.8 3.3.2.1.5.1.7.1 1.2 0 2.2-.8 2.6-1.9l5.1-18.1 18.5-10.2 23.7 13c.1 0 .1 0 .2.1l4.3 15.2c.3 1.2 1.4 1.9 2.6 1.9.2 0 .5 0 .7-.1 1.4-.4 2.2-1.9 1.8-3.3L69.5 50.4zM32.7 72.3l2.9-10.4 8 4.4-10.9 6zm4.4-15.6c0-.1 0-.1 0 0l1.5-5.6v-.2c4 1.6 7.7 1.9 9.9 2.1H51c3.5 0 6.4-.6 9.7-1.2 1.1-.2 2.3-.4 3.6-.7l.9 3.3-16 8.8-12.1-6.5zm17.6 9.6l12-6.6L71 75.3l-16.3-9z" />
    </svg>
  );
}

export default SvgChair;

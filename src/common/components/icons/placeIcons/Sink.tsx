import React from 'react'

function SvgSink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="M99 52.5c-.2-.8-.5-1.5-.9-2.3-.4-.7-.9-1.5-1.4-2.2s-1.2-1.3-1.9-1.9c-.7-.6-1.4-1.2-2.2-1.7-.8-.5-1.6-.9-2.4-1.3-.8-.4-1.7-.6-2.6-.8S85.8 42 85 42c-7.4 0-14-.1-20.1-.1-6 0-11.4 0-16.3-.1H9.9h-.1-.1-.1-.1c-.1 0-.3 0-.5.1-.2 0-.4.1-.6.1-.2.1-.4.1-.7.2-.2.1-.5.2-.8.3s-.5.2-.8.4-.5.3-.8.5-.5.4-.8.7c-.3.2-.5.5-.7.8s-.4.5-.5.8c-.2.3-.3.5-.4.8-.1.3-.2.5-.3.7s-.2.5-.2.7c-.1.2-.1.4-.1.7 0 .2-.1.4-.1.6V75.1c0 .3-.3 2.6 1.5 4.3C5 80.6 6.6 80.7 7 80.7h20.3c1 0 2.5-.1 3.4-1 .7-.7.6-1.4 1.3-2.5.7-1.2 1.6-1.9 3.1-3 1.3-.9 3-1.8 4.8-2.6s3.9-1.6 6.1-2.3c2.2-.7 4.5-1.4 7-2.1 2.4-.7 5-1.3 7.5-1.9 1.8-.4 3.8-.8 7.7-1.7 5.9-1.3 7.8-1.6 9-1.8.2 0 1.2-.2 2.6-.4v.1c.2.9.8 3.3 2.8 4.4.5.3 1.8.9 6.6-.3 1.3-.3 9.8-2.5 9.9-5.4 0-.2 0-1.2-.5-2.2-.3-.6-.6-1-.8-1.3h-.1c.1 0 .1-.1.2-.1.1-.1.2-.2.3-.2.1-.1.2-.1.3-.2.1-.1.2-.1.3-.2l.2-.2.2-.2c0-.1.1-.2.1-.2v-.3c0-1-.1-1.8-.3-2.6zM13 38.8h20.9c.2 0 2-.1 3-1.6.7-1.1.7-2.2.6-2.5v-3.4c0-15.2 20.6-15.6 41.4-15.6h1c.9 0 1.7-.7 1.7-1.7v-3.3c0-.9-.7-1.7-1.7-1.7h-1c-55.7.1-69.8.4-69.8 22.3v3.6c.1 2.1 1.8 3.8 3.9 3.9zM30.7 83.6H4.2c-1.9 0-3.5 1.6-3.5 3.5v.3c0 1.9 1.6 3.5 3.5 3.5h26.5c1.9 0 3.5-1.6 3.5-3.5v-.3c0-1.9-1.6-3.5-3.5-3.5z" />
    </svg>
  );
}

export default SvgSink;

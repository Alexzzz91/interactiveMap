import * as React from "react";

function SvgPoster(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <circle cx={8} cy={8} r={8} fill="url(#Poster_svg__pattern0)" />
      <defs>
        <pattern id="Poster_svg__pattern0" width={1} height={1}>
          <use xlinkHref="#Poster_svg__image0" />
        </pattern>
        <image
          id="Poster_svg__image0"
          width={16}
          height={19}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALXSURBVHgBXVNLT1NBGD0z91GgBQoUFDCkAQFDAhQfCSRCimwlQKJ72bmjazfAPygbY9y4MEo0JqUsNCQmEDXKQpMbYpBA2iC00hRqn/Z9Z5xbsFS+e2cymZlz5pxvviG4EEnPbSdhbJoRTPlCsKfSRXS3KlptFdfylC02zGzuV+4n/wZRj9NqQmGec+7aDkpY8iYQSxMEQycgkg7XjA33RuqMre4cFEG0ESsTnIHXBdixe8TxdI3COdSPzq5ONDQ1IhAI4vGrVTy6X42eVgNCtByn4wYJNQhMRJ8HIQ5CZbz5lMSk8yZGx26he+g6bPar6O3pwuzdO1j+EBfYEsRhImzeGNCoZ9guZl1iKDgIckUOhXIc/gqhmM+B6DriyQTMZgWZPClJppQazZXxOJ2yCnXBABqNi8XL9Wb4/QfI7oWQCoehVtdga9uHlmYrGmqUM9NGx4QYMi1LMh0sIUsdhd1mQWffAGxXekF5AVRW0NTagXT0CAq7JKDZMwJi/FNU4Byn9yCVCNoaZUQiSVRXydj9voMj/0/YWqxI/smi3SYUcFpxgcQu3NIS0JgwvqHeIlLxAEIHO6i31EORFBwH9oTcKLraEuCE/Vc3VPDsn5cDL+WixZpBIpmBKlzJMkWmQCDpv1GjnB5SDs41yjj34kJQnsL7zz8QIRy74Qjerm3ComTLKstVSIhGCeMr/AJBg0VFOhbD8utV7GhbGL5xDWZrO4qMQefnFpiuL5bo0t4Jt/Ayx4WFYNIM37ENybiMTDqHfscAVJMJeZFk9xeGkWYfRtv86DAnliwz665yKeeLNesv9gYcL/19kMVJEx0JdFXFYK2vxQmrw7dwLT4eSiKJIh8srT0f+zo+NOuOlQ05HjyzwlS3QGV1ThKedMZRyOeFzCJkkwoqyTAUgrMlVGFBc8+cP6bKcDx8Z1clfYFwMmg8LiYumnC6z8C8OsOK9mRyo3L/X3rgIe3s5oyhAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

export default SvgPoster;

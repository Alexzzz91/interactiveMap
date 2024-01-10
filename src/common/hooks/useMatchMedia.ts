import React from 'react'

const mobileWidth = 1020;

const windowMatchMedia = (size: number) => window.matchMedia(`(max-width: ${size}px)`);

// 'example (max-width: 600px)'
function useMatchMedia(size: number) {
  const query = () => windowMatchMedia(size).matches;
  // Состояние и сеттер для отложенного значения
  const [matched, setMatched] = React.useState(query);

  React.useEffect(
    () => {
      const resizeFunc = () => setMatched(query);

      resizeFunc();
      window.addEventListener('resize', resizeFunc);

      return () => window.removeEventListener('resize', resizeFunc);
    },
    [query]);

  return matched;
}

export {
  windowMatchMedia,
  useMatchMedia,
  mobileWidth,
}

import React from 'react'
import { ThemeName } from '../../Theme';

type ThemeChangerProps = {
  currentTheme: ThemeName;
  setCurrentTheme: (theme: ThemeName) => void;
};

const Component = React.lazy(() => import('./Component'));

const ThemeChanger: React.FC<ThemeChangerProps> = ({ currentTheme, setCurrentTheme }) => {
  return (
    <React.Suspense fallback={null}>
      <Component currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
    </React.Suspense>
  );
};

export { ThemeChanger };

import * as React from 'react';
import { ThemeColors } from '../../../common/styled';

type ThemeChangerProps = {
  setCurrentTheme: (theme: ThemeColors) => void;
};

const Componet = React.lazy(() => import('./Component'));

const ThemeChanger: React.FC<ThemeChangerProps> = ({ setCurrentTheme }) => {
  return (
    <React.Suspense fallback={null}>
      <Componet setCurrentTheme={setCurrentTheme} />
    </React.Suspense>
  );
};

export { ThemeChanger };

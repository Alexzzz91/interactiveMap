import * as React from 'react';
import { ThemeName } from '../../Theme';

import { ContainerStyled, MoonButtonStyled } from './styles/themeChanger.styled';

type ThemeChangerProps = {
  currentTheme: ThemeName;
  setCurrentTheme: (theme: ThemeName) => void;
};

const ThemeChanger: React.FC<ThemeChangerProps> = ({ currentTheme, setCurrentTheme }) => {
  const handleOnClick = React.useCallback(() => {
    const nextThemeName = currentTheme === ThemeName.MAIN ? ThemeName.DARK : ThemeName.MAIN;
    setCurrentTheme(nextThemeName)
  }, [currentTheme])

  return (
    <ContainerStyled>
      <MoonButtonStyled onClick={handleOnClick} />
    </ContainerStyled>
  );
};

export default ThemeChanger;

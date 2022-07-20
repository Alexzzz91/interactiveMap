import * as React from 'react';
import { ThemeColors } from '../../../common/styled';

import { ContainerStyled } from './styles/themeChanger.styled';

type ThemeChangerProps = {
    setCurrentTheme: (theme: ThemeColors) => void;
};

const ThemeChanger: React.FC<ThemeChangerProps> = ({ setCurrentTheme }) => {
  return (
    <ContainerStyled>
        <button onClick={() => setCurrentTheme('dark')}>
            темная \ светлая тема
        </button>
    </ContainerStyled>
  );
};

export default ThemeChanger;

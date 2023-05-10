import { DefaultTheme } from 'styled-components';
import { themeColors, darkThemeColors } from '../common/commonValues';

const enum ThemeName {
    MAIN = 'main',
    DARK = 'dark'
}

const themes: Record<string, DefaultTheme> = {
    [ThemeName.MAIN]: {
        color: themeColors,
    },
    [ThemeName.DARK]: {
        color: darkThemeColors,
    }
}

export {
    ThemeName,
    themes
}
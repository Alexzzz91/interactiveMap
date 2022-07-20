import { DefaultTheme } from 'styled-components';
import { themeColors, darkThemeColors } from '../common/commonValues';

const themes: Record<string, DefaultTheme> = {
    main: {
        color: themeColors,
    },
    dark: {
        color: darkThemeColors,
    }
}

export {
    themes
}
import { placeColors } from '../../common/commonValues';
import { createGlobalStyle, css } from 'styled-components';

const createRootVariables = (colors) => {
    let styles = '';

    Object.entries(placeColors).forEach(([key, value]) => {
        styles += `
            --color-${key}: ${value};
        `;
    });

    Object.entries(colors).forEach(([key, value]) => {
        styles += `
            --color-${key}: ${value};
        `;
    });

    return css`${styles}`;
};

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        position: relative;
        height: 100vh;
        font-family: 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        position: relative;
        width: 100vw;
        height: 100vh;
        display: -webkit-box;
    }

    :root {
        --menuPaneWidth: 360px;
        --menuElemsOffsetLeft: 16px;
    }

    *[role="button"] {
        cursor: pointer;
    }

    *,
    *::after,
    *::before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    a,
    a:-webkit-any-link{
        color: ${({theme}) => theme.color.kabul};
        text-decoration: none;
        outline: none;
    }

    svg{
        fill: white;
    }
    
    a:hover,
    button:hover {
        color: #515158;
        outline: none;
    }

    a:focus,
    button:focus {
        outline: none;
    }

    .mapTooltipStyles {
        background: red;
    }

    :root {
        ${({ theme }) => createRootVariables(theme.color)};
    }
`;

export {
    GlobalStyle,
}
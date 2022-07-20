import styled from "styled-components";
import { IconButtonStyled } from "../../IconButton/styles/iconButton.styled";

const LeftBarStyled = styled.div`
    position: relative;
    top: 25%;
    left: 24px;
    border-color: #808080;
    border-style: solid;
    border-width: 0px;
    border: none;
    overflow-x:hidden;
    background-color: ${({ theme }) => (theme.color.london)};
    overflow-y:visible;
    width: 56px;
    z-index: 1;

    ${IconButtonStyled} { 
        margin: 0px;
        padding: 0px;
        width: 100%;
    }
`;

export {
    LeftBarStyled
}
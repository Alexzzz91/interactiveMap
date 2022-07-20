import styled from "styled-components";
import { IconButtonStyled } from "../../IconButton/styles/iconButton.styled";

const TopBarBlockStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopBarStyled = styled.div`
    position: relative;
    border-right: none;
    left: 0px;
    top: 24px;
    width: 100%;
    height: 32px;
    padding-left: 24px;
    padding-right: 24px;
    z-index: 1;
    display: flex;
    justify-content: space-between;

    ${IconButtonStyled} { 
        display: flex;
        margin: 0;
        padding: 0;
        width: 16px;
        height: 16px;
        margin-left: 16px;
        cursor: pointer;

        svg {
            min-height: 16px;
            min-width: 16px;
        }

        &: hover {
            background: transparent;
            box-shadow: inset 0px 0px 2px 0px ${({ theme }) => (theme.color.fes)};
        }
    }
    
    & + & {
        margin-top: 16px;
    }
`;

const RightSectionStyled = styled.div`
    display: flex;
`;

const LeftSectionStyled = styled.div`
    display: flex;
`;

const TopRightSectionStyled = styled.div`
    display: flex;
`;

const DelimiterStyled = styled.div`
    display: flex;
    width: 1px;
    height: 16px;
    margin-left: 16px;
    background: ${({ theme }) => (theme.color.dili)};
`;

const ButtonStyled = styled.div`
    display: flex;
    font-size: 12px;
    padding: 4px 8px;
    margin: 0 16px;
    width: fit-content;
    color: ${({ theme }) => (theme.color.sofia)};
    background: ${({ theme }) => (theme.color.berbera)};
    cursor: pointer;
`;

export {
    TopBarBlockStyled,
    TopBarStyled,
    LeftSectionStyled,
    RightSectionStyled,
    DelimiterStyled,
    TopRightSectionStyled,
    ButtonStyled,
}
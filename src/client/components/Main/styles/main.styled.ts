import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../styles/device";
import { Editor } from "./assets"

const MainContainerStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100vh;
    transition: all 1.01s;

    @media ${device.mobileS} { 
        position: relative;
        width: 100%;
        height: 60vh;
    }

    @media ${device.tablet} { 
        position: absolute;
        height: 100vh;
        width: calc(100vw - 350px);
    }
`;

const MallStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 3500px;
    perspective-origin: 0% 50%;
    transition: transform 0.8s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
`;

type LevelsStyledProps = {
    floor?: number;
};

const LevelsStyled = styled.div<LevelsStyledProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${({ floor }) => floor ? 100 : 80 }vmin;
    height: ${({ floor }) => floor ? 35 : 40 }vmin;
    margin: ${({ floor }) => floor ? '-30vmin 0 0 -50vmin ' : '-25vmin 0 0 -35vmin ' };
    transition: transform 0.3s;
    transform-style: preserve-3d;
    transform: rotateX(70deg) rotateZ(-45deg) translateZ(-27vmin);
    
    ${({ floor }) => {
        if (floor) {
            return `
                transform-style: unset;
                transform: rotateX(0deg) rotateZ(0deg) translateZ(0vmin);
            `;
        }
    }}
`;

const TopRightBarStyled = styled.div`
    display: flex;
    margin-top: 36px;
    right: 0;
    cursor: pointer;
    position: absolute;
    color: ${({ theme }) => (theme.color.london)};
    font-family: sans-serif;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const GoToEditorLinkStyled = styled.div`
    display: flex;
    position: relative;
    color: ${({ theme }) => (theme.color.london)};
    
    &::after {
        background-color: ${({ theme }) => (theme.color.fes)};
        content: '';
        height: 100%;
        right: -15px;
        position: absolute;
        top: 0;
        transform: translate(0,0);
        width: 1px;
    }
`;

const GoToEditorButtonStyled = styled(Editor)`
    display: flex;
    cursor: pointer;
    color: ${({ theme }) => (theme.color.london)};
    font-family: sans-serif;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;
`;

const ClearPlacesStyled = styled(Link)`
    display: flex;
    margin-top: 48px;
    margin-left: 160px;
    cursor: pointer;
    position: absolute;
    color: ${({ theme }) => (theme.color.london)};
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
`;

const PlanTopRowStyled = styled.div`
    display: flex;
    padding: 5px;
`;

const NoFloorsMesageStyled = styled.div`
    display: flex;
    color: ${({ theme }) => (theme.color.london)};
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    cursor: default;
`;

export {
    MainContainerStyled,
    MallStyled,
    LevelsStyled,
    TopRightBarStyled,
    GoToEditorLinkStyled,
    GoToEditorButtonStyled,
    ClearPlacesStyled,
    PlanTopRowStyled,
    NoFloorsMesageStyled,
}
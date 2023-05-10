import styled, { keyframes } from "styled-components";

type DotProps = {
  center?: boolean;
}

type LoadingContainerProps = {
  transparent?: boolean;
};

const LoadingContainerStyled = styled.div<LoadingContainerProps>`
    display: flex;
    align-items: center;
    background: ${({transparent}) => transparent ? 'transparent' : 'white'};
    transition: all 0.5s ease-out;
    padding: 0 12px;
    height: 100%;
    width: 100%;
    justify-content: center;
    
    & + & {
      display: none;
    }
`;

const LoadingStyled = styled.span`
    font-family: sans-serif;
    font-size: 26px;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    background: transparent;
    transition: all 0.5s ease-out;
    cursor: pointer;
    color: ${({ theme }) => (theme.color.london)};
`;

const dotAnimate = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

const dotAnimateCenter = keyframes`
  0% {
    opacity: 1;
    transform: translateX(13px);
  }

  50% {
    opacity: 0;
    transform: translateX(-13px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(13px);
  }
`;

const DotStyled = styled(LoadingStyled)<DotProps>`
    color: ${({ theme }) => (theme.color.london)};
    animation: ${({ center }) => center ? dotAnimateCenter : dotAnimate} 2s linear infinite;
    width: min-content;
    height: min-content;
    padding: 0 4px;
    font-size: 29px;
    line-height: 30px;
    margin-top: 15px;
    letter-spacing: 0;
`;

export {
    LoadingStyled, 
    LoadingContainerStyled,
    DotStyled
} 
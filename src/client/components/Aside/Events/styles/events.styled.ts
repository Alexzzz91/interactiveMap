import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 45px;
    color: ${({ theme }) => (theme.color.tanga)};
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

type BellProps = {
    active?: boolean;
};

const BellContainerStyled = styled.div<BellProps>`
    display: flex;
    width: ${({ active }) => active ? '40px' : '30px'};
    opacity: ${({ active }) => active ? '1' : '0.6'};
    height: 30px;
    font-size: 12px;
    color: ${({ theme }) => (theme.color.tanga)};
    background-color: ${({ theme }) => (theme.color.tbilisi)};
    border: ${({ theme }) => (theme.color.mexico)} 1px solid;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    gap: 5px;
    cursor: pointer;

    &: hover {
        opacity: 1;
    }
`;

const ring = keyframes`
    0%, 100% {
        transform: rotate(0deg);
    }
    5% {
        transform: rotate(-30deg);
    }
    10% {
        transform: rotate(25deg);
    }
    15% {
        transform: rotate(-25deg);
    }
    20% {
        transform: rotate(20deg);
    }
    25% {
        transform: rotate(-20deg);
    }
    30% {
        transform: rotate(15deg);
    }
    35% {
        transform: rotate(-15deg);
    }
    40% {
        transform: rotate(15deg);
    }
    45% {
        transform: rotate(0deg);
    }
`;

const animation = () => css`
    ${ring} 2s linear 5;
`
const BellStyled = styled.div<BellProps>`
    animation: ${({ active }) => active ? animation : 'unset'};
    background-color: ${({ active, theme }) => (active ? theme.color.dublin : theme.color.tanga)};
    border-radius: 50% 50% 0 0;
    height: 11px;
    position: relative;
    transform: rotate(0deg); 
    transform-origin: top center;
    width: 12px;
    top: -2px;
    transition: 0.6s; 

    &::before {
        background-color: ${({ active, theme }) => (active ? theme.color.dublin : theme.color.tanga)};
        border-radius: 50%;
        content: '';
        height: 4px;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translate(-50%, -50%);
        width: 4px;
    }
    
    &::after {
        background-color: ${({ active, theme }) => (active ? theme.color.dublin : theme.color.tanga)};
        border-radius: 5px;
        content: '';
        height: 2px;
        left: 50%;
        position: absolute;
        bottom: 0;
        transform: translate(-50%, 50%);
        width: 14px;
    }
`;

const NotificationListContainerStyled = styled.div<BellProps>`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: ${({ active }) => active ? 400 : 0}px;
    width: 100%;
    right: 0px;
    top: 100%;
    z-index: 1;
    border-radius: 2px;
    border: ${({ theme, active }) => active ? `1px solid ${theme.color.santiago}` : '0px solid transparent'};
    background: ${({ theme }) => (theme.color.santiago)};
    box-shadow: ${({ theme, active }) => active ? `0px 1px 5px ${theme.color.axum}` : ''};
    padding: ${({ active }) => active ? 10 : 0}px;
    justify-content: space-between;
    overflow: hidden;
    transition: 0.1s;
    overflow: auto;
`;

const NotificationListInnerStyled = styled.div<BellProps>`
    height: ${({ active }) => active ? 400 : 0}px;
    width: 100%;
    gap: 5px;
    display: grid;
`;


const TongueStyled = styled.div<BellProps>`
    background: ${({ active, theme }) => (active ? theme.color.varna : theme.color.fes)};
    position: absolute;
    bottom: -3px;
    left: 50%;
    height: 3px;
    width: 4px;
    transform: translate(-50%, 50%);
    border-radius: 0 0 10px 10px;
`;

const EventContainerStyled = styled.div<BellProps>`
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: flex-start;
    padding: 0 6px;
    cursor: pointer;
`;

const AsLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 34px;
    max-height: 52px;
    padding: 0 12px;
    font-family: sans-serif;
    font-size: 13px;
    line-height: 16px;
    color: ${({ theme }) => (theme.color.london)};
    background: transparent;
    cursor: pointer;
    flex-direction: column;
    width: 100%;

    &:hover {
        background: ${({ theme }) => (theme.color.nara)};
    }
`;

const NotificationsRequestContainerStyled = styled.div`
    padding-bottom: 10px;
    padding-top: 10px;
`;

const NotificationAlreadyStyled = styled.div`
    cursor: default;
`;

const NotificationActionStyled = styled.div`
    cursor: pointer;
    transition: 0.4s;
    color: ${({ theme }) => (theme.color.berbera)};
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;

    &:hover {
        color: ${({ theme }) => (theme.color.kabul)};
    }
`;

const NotificationDisabledStyled = styled.div`
    cursor: not-allowed;
`;

const CreateEventContainerStyled = styled(ContainerStyled)`
    width: 100%;
    align-items: initial;
`;

const CreateEventStyled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    cursor: pointer;
    padding: 5px;
    background: ${({ theme }) => (theme.color.mexico)};
    border-radius: 4px;

    &:hover {
        background: ${({ theme }) => (theme.color.axum)};
    }
`;

export {
    ContainerStyled,
    BellStyled,
    BellContainerStyled,
    TongueStyled,
    NotificationListContainerStyled,
    NotificationListInnerStyled,
    EventContainerStyled,
    AsLink,
    NotificationsRequestContainerStyled,
    NotificationAlreadyStyled,
    NotificationActionStyled,
    NotificationDisabledStyled,
    CreateEventContainerStyled,
    CreateEventStyled,
}
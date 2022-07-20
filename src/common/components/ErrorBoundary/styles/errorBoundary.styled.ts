import { Link } from "react-router-dom";
import styled from "styled-components";

const SafeUiContainerStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: white;
    transition: all 0.5s ease-out;
    padding: 0 12px;
    height: 100%;
    width: 100%;
    justify-content: center;
    font-family: iviSans;
    font-size: 26px;
    line-height: 28px;
    color: ${({ theme }) => theme.color.london};
`;

const ReloadPageStyled = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: iviSans;
    font-size: 18px;
    line-height: 18px;
    cursor: pointer;
    transition: all 0.5s ease-out;
    margin-top: 22px;
    opacity: 1;
    color: ${({ theme }) => theme.color.london};

    &:hover {
        opacity: 0.6;
    }
`;

const BackToMainPageStyled = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: iviSans;
    font-size: 18px;
    line-height: 18px;
    cursor: pointer;
    transition: all 0.5s ease-out;
    margin-top: 22px;
    opacity: 1;
    color: ${({ theme }) => theme.color.london};

    &:hover {
        opacity: 0.6;
    }
`;

export {
    SafeUiContainerStyled,
    ReloadPageStyled,
    BackToMainPageStyled,
}
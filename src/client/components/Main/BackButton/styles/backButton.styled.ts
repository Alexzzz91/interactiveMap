import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowBack } from "../assets/img";

const BackButtonStyled = styled(Link)`
    display: flex;
    margin-top: 48px;
    margin-left: 34px;
    cursor: pointer;
    position: absolute;
    color: ${({ theme }) => (theme.color.london)};
    font-family: iviSans;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
`;

const ArrowStyled = styled(ArrowBack)`
    display: block;
    margin-right: 12px;
`;

export {
    BackButtonStyled,
    ArrowStyled,
}
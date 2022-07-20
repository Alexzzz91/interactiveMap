import styled from "styled-components";

const ErorrContainerStyled = styled.div`
    display: flex;
    align-items: center;
    background: white;
    transition: all 0.5s ease-out;
    padding: 0 12px;
    justify-content: center;
    font-family: iviSans;
    font-size: 26px;
    line-height: 28px;
    color: ${({ theme }) => theme.color.london};
`;


export {
    ErorrContainerStyled,
}
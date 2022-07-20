import styled from "styled-components";

const PersonContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 12px;
`;

const DepartmentNameStyled = styled.div`
    font-family: iviSans;
    font-size: 13px;
    line-height: 16px;
    font-weight: medium;
    letter-spacing: 0px;
    text-align: left;
    padding: 8px;
    color: ${({ theme }) => theme.color.tanga};
`;

const EmptyPlaceContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

const EmptyPlaceNotiveStyled = styled.div`
    font-family: iviSans;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    padding: 8px 12px;
    color: ${({ theme }) => theme.color.tanga};
`;

export {
    PersonContainerStyled,
    DepartmentNameStyled,
    EmptyPlaceContainerStyled,
    EmptyPlaceNotiveStyled,
}
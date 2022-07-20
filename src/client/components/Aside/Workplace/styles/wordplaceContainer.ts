import styled from "styled-components";

const WorkplaceContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 12px;
`;

type DepartmentNameProps = {
    isTooltip?: boolean;
};

const DepartmentNameStyled = styled.div<DepartmentNameProps>`
    font-family: iviSans;
    font-size: 13px;
    line-height: 16px;
    font-weight: medium;
    letter-spacing: 0px;
    text-align: left;
    padding: 8px;
    color: ${({ isTooltip, theme }) => isTooltip ? theme.color.sofia : theme.color.tanga};
`;

export {
    WorkplaceContainerStyled,
    DepartmentNameStyled,
}
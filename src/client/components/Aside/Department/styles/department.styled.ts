import styled from "styled-components";

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 24px;
`;

type IDepartmentNameProps = {
    active?: boolean;
};

const DepartmentNameStyled = styled.div<IDepartmentNameProps>`
    font-family: iviSans;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    padding: 10px 12px;
    cursor: pointer;
    background: ${({ theme, active }) => active ? theme.color.nara : 'transparent'};

    color: ${({ theme }) => (theme.color.tanga)};
`;

const DepartmentStaffStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export {
    ContainerStyled,
    DepartmentNameStyled,
    DepartmentStaffStyled
}
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px;
    flex: 1;
    overflow: auto;
`;

type IDepartmentNameProps = {
    $active?: boolean;
};

const DepartmentNameStyled = styled(Link)<IDepartmentNameProps>`
    display: block;
    font-family: iviSans;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    padding: 10px 12px;
    cursor: pointer;
    border-radius: 4px;
    background: ${({ theme, $active }) => $active ? theme.color.nara : theme.color.santiago};

    color: ${({ theme }) => (theme.color.tanga)};
`;

export {
    ContainerStyled,
    DepartmentNameStyled,
}
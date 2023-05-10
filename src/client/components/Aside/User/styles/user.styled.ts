import styled from "styled-components";
import { Projectavatar } from "../assets/img";

type ContainerStyledProps = {
    centerMode: boolean;
    isHead?: boolean;
    disabled?: boolean;
}

const CommonStyled = styled.div<ContainerStyledProps>`
    display: flex;
    justify-content: ${({ centerMode }) => centerMode ? 'center' : 'flex-start'};
    width: 100%;
    cursor: ${({ disabled }) => disabled ? 'no-drop' : 'pointer'};
    transition: .4s all;
    background: transparent;
    border-bottom-left-radius: 4px;
`;

const ContainerStyled = styled(CommonStyled)<ContainerStyledProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    border-top: 1px solid ${({ theme }) => (theme.color.dili)};
    margin-top: auto;
`;

type ActionStyledProps = {
    bold: boolean;
}

const ActionStyled = styled.span<ActionStyledProps>`
    display: flex;
    padding: 0;
    font-family: sans-serif;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0px;
    transition: .4s all;
    align-items: center;
    margin-left: 2px;
    font-weight: 600;

    color: ${({ bold, theme }) => bold ? (theme.color.london) : (theme.color.fes)};
`;

const UserBlockStyled = styled(CommonStyled)<ContainerStyledProps>`
    padding: 8px 12px;

    &: hover {
        background: ${({ theme }) => (theme.color.nara)};
    }
`;

const DepartmentImageStyled = styled(Projectavatar)`
    height: 48px;
    min-width: 48px;
`;

const DepartmentBlockStyled = styled(CommonStyled)<ContainerStyledProps>`
    display: flex;
    height: 100%;
    padding: 8px 12px;
    transition: .4s all;
    right: 0;
    top: 0;

    ${DepartmentImageStyled} {
        margin-right: 12px;
    }

    ${ActionStyled} {
        transition: 1s opacity cubic-bezier(0, 0.72, 0.42, 1);
        font-size: 12px;
        line-height: 14px;
    }

    &: hover {
        background: ${({ theme }) => (theme.color.nara)};
    }
`;

const LoginButtonStyled = styled(ActionStyled)<ActionStyledProps>`
    display: flex;
    width: 100;
    padding: 12px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    color: ${({ bold, theme }) => bold ? (theme.color.london) : (theme.color.fes)};

    &: hover {
        background: ${({ theme }) => (theme.color.nara)};
    }

`;

export {
    ContainerStyled,
    ActionStyled,
    UserBlockStyled,
    DepartmentBlockStyled,
    DepartmentImageStyled,
    LoginButtonStyled,
}
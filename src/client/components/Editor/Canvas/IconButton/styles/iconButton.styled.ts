import styled from "styled-components";

type IconButtonProps = {
    disabled: boolean;
};

const IconButtonStyled = styled.button<IconButtonProps>`
    border: 0px;
    width: 56px;
    height: 56px;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    background: transparent;

    opacity: ${({ disabled }) => disabled ? 0.32 : 1};

    color: ${({ theme }) => (theme.color.sofia)};

    &.selected {
        background: ${({ theme }) => (theme.color.dublin)};
    }

    &:hover {
        background: ${({ theme }) => (theme.color.fes)};
    }
`;

export {
    IconButtonStyled
}
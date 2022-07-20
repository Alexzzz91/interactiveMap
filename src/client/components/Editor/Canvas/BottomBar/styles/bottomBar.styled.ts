import styled from "styled-components";
import { IconButtonStyled } from "../../IconButton/styles/iconButton.styled";
import { ListStyled, RowStyled } from '../../../../Main/Legend/styles/legend.styled';

const BottomBarStyled = styled.div`
    position: absolute;
    display: flex;
    border-right: none;
    left: 0;
    bottom: 0;
    right: 0;
    height: 35px;
    padding-left: 50px;
    z-index: 1;
    background-color: ${({ theme }) => (theme.color.sofia)};
    font-size: 16px;
    justify-content: flex-end;
    padding: 0 32px 24px;
    align-items: center;

    ${IconButtonStyled} { 
        margin-top: 8px;
    }

    select {
        border: transparent;
    }
`;

type IconsBarProps = {
    tableMode: boolean;
};

const IconsBarStyled = styled(ListStyled)<IconsBarProps>`
    position: absolute;
    width: 90%;
    left: 24px;
    bottom: ${({ tableMode }) => tableMode ? '28px' : '16px'};
    overflow: ${({ tableMode }) => tableMode ? 'visible' : 'auto'};
    grid-template-columns: repeat(auto-fill,${({ tableMode }) => tableMode ? 32 : 136}px);
    align-items: center;
`;

type HandleRowProps = {
    current: boolean;
} & IconsBarProps;

const HandleRowStyled = styled(RowStyled)<HandleRowProps>`
    cursor: pointer;
    position: relative;
    color: ${({ current, theme }) => current ? theme.color.dublin : theme.color.london };

    &:hover {
        color: ${({ theme }) => theme.color.dublin};
    }
`;

export {
    BottomBarStyled,
    IconsBarStyled,
    HandleRowStyled,
}
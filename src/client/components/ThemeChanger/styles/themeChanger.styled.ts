import { Moon } from "../../../../common/components/icons";
import styled from "styled-components";

const ContainerStyled = styled.div`
    position: fixed;
    overflow: hidden;
    z-index: 9999;
    top: 1vh;
    right: 1vh;
    transform: translateX(15%);
`;

const MoonButtonStyled = styled(Moon)`
    color: ${({ theme }) => (theme.color.london)};
    cursor: pointer;
`;

export { 
    ContainerStyled,
    MoonButtonStyled,
} 
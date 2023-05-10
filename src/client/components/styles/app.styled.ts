import styled from "styled-components";
import { device } from "../../styles/device";

const ContainerStyled = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #fbfbff; 
    background: ${({ theme }) => (theme.color.santiago_low)};    

    @media ${device.laptop} { 
        display: grid;
    }
`;

export { 
    ContainerStyled,
} 
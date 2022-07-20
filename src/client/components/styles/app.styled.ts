import styled from "styled-components";
import { device } from "../../styles/device";

const ContainerStyled = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    @media ${device.laptop} { 
        display: grid;
    }
`;

export { 
    ContainerStyled,
} 
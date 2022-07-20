import styled from "styled-components";

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 24px;
    padding-bottom: 12px;
`;

const ImageStyled = styled.img`
    display: inline-block;
    vertical-align: middle;
    height: auto;
    width: 100%;
    background: #1a143b;
    margin-bottom: 20px;
`;

const LoadingContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 0;
`;

export {
    ContainerStyled,
    ImageStyled,
    LoadingContainerStyled,
}
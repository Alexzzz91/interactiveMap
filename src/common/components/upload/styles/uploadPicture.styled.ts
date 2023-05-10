import styled from "styled-components";

const UploadSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 200px;
    min-height: 200px;
    width: 290px;

    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;
    position: relative;

    color: ${({theme}) => theme.color.fes};
    border: 1px solid ${({theme}) => theme.color.dili};
`;

const UploadInputStyled = styled.input`
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
`;

const ImgPreviewStyled = styled.img`
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 1;
    filter: brightness(1);
    transition: 0.4s;
`;

const ClearPreview = styled.span`
    display: flex;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;
    position: relative;
    opacity: 0;
    transition: 0.4s;
    z-index: 111;

    color: ${({theme}) => theme.color.sofia};
`;


const PreviewContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;

    &:hover {
        ${ImgPreviewStyled} {
            opacity: 0.5;
            filter: brightness(0.2);
        }

        ${ClearPreview} {
            opacity: 1;
        }
    }
`;

const UploadTextStyled = styled.span`
    margin-top: 16px;
`;

export {
    UploadSectionStyled,
    UploadTextStyled,
    UploadInputStyled,
    ImgPreviewStyled,
    PreviewContainerStyled,
    ClearPreview,
}

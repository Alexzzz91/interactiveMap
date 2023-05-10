import styled from "styled-components";

const SelectPanelStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: inherit;
`;

const FormSelectPanelStyled = styled.form`
    display: flex;
    flex-direction: column;
    position: relative;
    height: inherit;
`;

const ListContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: inherit;
    border-bottom: 1px solid ${({theme}) => theme.color.dili};
`;

const HeaderStyled = styled.div`
    display: flex;
`;

type FooterProps = {
    hide?: boolean;
}

const FooterStyled = styled.div<FooterProps>`
    display: flex;
    padding: ${({ hide }) => hide ? '0' : '24px 0'};
    height: ${({ hide }) => hide ? '0' : 'unset'};
    overflow: ${({ hide }) => hide ? 'hidden' : 'unset'};
`;

const ButtonStyled = styled.button`
    background: ${({ theme }) => theme.color.madrid};
    color: ${({ theme }) => theme.color.sofia};
    border-radius: 4px;
    border: 0; 
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 12px;
    display: flex;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    cursor: pointer;
    transition: 0.4s;

    &: hover {
        color: ${({ theme }) => theme.color.sofia};
        opacity: 0.82;
    }
`;

type CustomResultItemProps = {
    active?: boolean;
}

const CustomResultItemStyled = styled.div<CustomResultItemProps>`
    display: flex;
    cursor: pointer;
    background: ${({ active, theme }) => active ? theme.color.nara : 'transparent'};
    align-items: center;
    padding: 8px 0;
    border-radius: 4px;
`;

const CustomResultInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: inherit;
    overflow: hidden;s
`;

const CustomResultInfoContainerStyled = styled.div`
    display: flex;
    flex: 1;
    max-width: calc(100% - 52px);
`;

const CaptionStyled = styled.span`
    display: flex;
    color: ${({ theme }) => theme.color.london};
    font-family: sans-serif;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    font-weight: 600;
    padding-right: 12px;
`;

const SubCaptionStyled = styled.span`
    display: block;
    color: ${({ theme }) => theme.color.london};
    font-family: sans-serif;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export {
    SelectPanelStyled,
    ListContainerStyled,
    HeaderStyled,
    FooterStyled,
    ButtonStyled,
    CustomResultItemStyled,
    CustomResultInfoContainerStyled,
    CustomResultInfoStyled,
    CaptionStyled,
    SubCaptionStyled,
    FormSelectPanelStyled,
}

import styled from "styled-components";

const PlaceNoticeStyled = styled.div`
    font-size: 12px;
    line-height: 14px;
    border: 0;
    background: transparent;
    color: ${({ theme }) => (theme.color.madrid)};
`;

const PlaceStyled = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 8px 1px;
    background: transparent;
    transition: all 0.4s;
    margin-top: 4px;

    &: hover { 
        background: ${({ theme }) => (theme.color.nara)};
    }
`;

const PlaceTypeNameStyled = styled.div`
    display: flex;
    position: relative;
    font-size: 11px;
    line-height: 12px;
    border: 0;
    background: transparent;
    color: ${({ theme }) => (theme.color.london)};
`;

const PlaceRowStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2px 4px;
`;

const PlaceNameStyled = styled.div`
    display: flex;
    position: relative;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => (theme.color.london)};
`;

const PlaceDescStyled = styled.div`
    display: flex;
    position: relative;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => (theme.color.london)};
    opacity: 0.72;
`;

const PlaceActionStyled = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    opacity: 0.92;
    transition: all 0.4s;
    
    &: hover { 
        opacity: 0.5;
    }
`;

export {
    PlaceNoticeStyled,
    PlaceStyled,
    PlaceTypeNameStyled,
    PlaceRowStyled,
    PlaceNameStyled,
    PlaceDescStyled,
    PlaceActionStyled,
}

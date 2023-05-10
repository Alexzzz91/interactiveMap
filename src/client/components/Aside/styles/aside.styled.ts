import { device } from "../../../../client/styles/device";
import styled from "styled-components";

type AsideProps = {
    openView: boolean;
}

const AsideStyled = styled.aside<AsideProps>`
    display: flex;
    flex-direction: column;
    transition: transform 1s, opacity 1s, -webkit-transform 1s;

    @media ${device.mobileS} { 
        position: relative;
        top: unset;
        bottom: 0;
        right: unset;
        height: 50vh;
        transform: ${({ openView }) => openView ? 'translateY(-10vh)' :  'translateY(0%)'};
        width: 100%;
        padding: 0;
    }

    @media ${device.tablet} { 
        position: absolute;
        top: 0;
        bottom: unset;
        right: 0;
        width: 340px;
        height: 100%;
        min-height: 100vh;
        transform: translateX(0%);
        bottom: unset;
        padding: 8px 0;
    }
`;

const TopBlockStyled = styled.div`
    display: flex;
    position: relative;
`;

const ListInnerStyled = styled.div`
    background: ${({ theme }) => (theme.color.santiago)};    
    box-shadow: 0px 0px 20px 2px ${({ theme }) => (theme.color.nara)};
    padding: 2px;
    display: flex;
    flex-direction: column;
    height: inherit;
    width: 100%;
    height: 100%;
    flex: 1;
    padding: 12px;
    padding-bottom: 6px;
    transition: transform 1s, opacity 1s, -webkit-transform 1s;
`;

const MobileButtonStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 3px;

    &: before {
        content: '';
        top: 3px;
        height: 4px;
        border-radius: 5px;
        width: 80%;
        left: 10%;
        position: absolute;
        background: ${({ theme }) => (theme.color.nara)};
    }
`;

const PlaceAndDepartmentsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px;
    flex: 1;
    overflow: auto;
`;

const UpdateButtonStyled = styled.span`
    cursor: pointer;
    justify-content: center;
    padding-top: 24px;
    display: flex;
    padding: 0;
    font-family: sans-serif;
    font-size: 10px;
    line-height: 11px;
    letter-spacing: 0px;
    transition: .4s all;
    align-items: center;
    font-weight: 600;

    color: ${({ theme }) => theme.color.fes};
    &: hover {
        color: ${({ theme }) => theme.color.varna};
    }
`;

export {
    AsideStyled,
    TopBlockStyled,
    ListInnerStyled,
    MobileButtonStyled,
    PlaceAndDepartmentsContainerStyled,
    UpdateButtonStyled,
}

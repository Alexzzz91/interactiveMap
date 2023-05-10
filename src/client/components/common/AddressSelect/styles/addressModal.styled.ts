import styled from "styled-components";
import Modal from 'react-modal';
import { Close } from "../../../../../common/components/icons";

const NewAddressModalStyled = styled(Modal)`
    background: ${({ theme }) => (theme.color.santiago)};    
    box-shadow: 0px 0px 20px 2px ${({ theme }) => (theme.color.nara)};
    min-width: 600px;
    margin: 0;
    padding: 15px;
    position: fixed;
    display: flex;
    flex-direction: column;

    &:focus-visible {
        outline: none;
    }
`;

const NewAddressModalTitleStyled = styled.h2`
    color: ${({ theme }) => (theme.color.london)};
    font-family: sans-serif;
    font-size: 20px;
    line-height: 24px;
    cursor: default;
`;

const NewAddressModalButtonStyled = styled.button`
    background: ${({ theme }) => theme.color.fes};
    color: ${({ theme }) => theme.color.london};
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


const NewAddressModalButtonCloseStyled = styled(Close)`
    position: absolute;
    right: 15px;
    cursor: pointer;
`;

export {
    NewAddressModalStyled,
    NewAddressModalTitleStyled,
    NewAddressModalButtonStyled,
    NewAddressModalButtonCloseStyled,
}
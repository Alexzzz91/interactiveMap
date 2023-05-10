import styled from "styled-components";
import { ToastContainer } from 'react-toastify';

const ToastContainerStyled = styled(ToastContainer)`
    &.Toastify__toast-container--bottom-right {
        bottom: 16px;
        right: 360px;
    }
    
    > div {
        background: ${({theme}) => theme.color.london};
        padding: 12px 20px;
        font-family: sans-serif;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: center;
        margin-bottom: 0;
        min-height: 40px;
        border-radius: 0;
        box-shadow: 0px 8px 16px rgba(37, 33, 63, 0.2);
        margin-top: 4px;

        > *[role] {
            color: ${({theme}) => theme.color.metz};
        }
        > button {
            display: none;
        }
    }
`;

export { 
    ToastContainerStyled,
} 
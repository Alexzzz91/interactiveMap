import styled from "styled-components";
import { InputContainerStyled } from "../../../../../../../common/components/input/styles/input.styled";

const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 0;
    overflow: auto;
    position: relative;
    height: inherit;
    border-bottom: 1px solid ${({theme}) => theme.color.dili};
`;

const LabelStyled = styled.label`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.london};
    font-family: sans-serif;
    font-size: 13px;
    line-height: 16px;

    > svg {
        width: 20px;
        height: 20px;
        margin-right: 4px;
        margin-left: 4px;
        fill: ${({ theme }) => theme.color.london};
    }

    ${InputContainerStyled} {
        max-width: 80px;
    }
`;


export {
    FormStyled,
    LabelStyled,
}

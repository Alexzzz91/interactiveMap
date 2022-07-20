import styled from "styled-components";


const HiddenCheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const CheckboxContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    padding: 12px;
    cursor: pointer;

    ${HiddenCheckboxStyled}:focus + & {
        box-shadow: 0 0 0 3px pink;
      }
`;

const IconStyled = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

type CheckboxProps = {
    checked: boolean;
}

const CheckboxStyled = styled.div<CheckboxProps>`
    display: flex;
    height: 16px;
    width: 16px;
    border: 1px solid ${({ theme, checked }) => checked ? theme.color.madrid : theme.color.london};
    mix-blend-mode: normal;
    opacity: ${({ checked }) => checked ? '1' : '0.32'};
    box-sizing: border-box;
    border-radius: 2px;

    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${({ theme, checked }) => checked ? theme.color.madrid : 'transparent'};
    border-radius: 3px;
    transition: all 150ms;

    ${IconStyled} {
        visibility: ${({checked}) => checked ? 'visible' : 'hidden'}
    }
`;

export {
    CheckboxContainerStyled,
    CheckboxStyled,
    HiddenCheckboxStyled,
    IconStyled,
}
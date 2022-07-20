import styled from "styled-components";

const SearchInputStyled = styled.div`
    position: relative;
    width: 100%;
`;
const InputStyled = styled.input`
    width: 100%;
    padding: 12px 32px 12px 12px;
    font-size: 16px;
    line-height: 20px;
    border: 0;
    background: transparent;
    border-bottom: 1px solid #C8C3E8;
    color: ${({ theme }) => (theme.color.london)};
    &:focus {
      outline: none;
	}
	&::-webkit-input-placeholder, 
	&:-ms-input-placeholder,
	&::placeholder {
		color: #938DB7;
	}
`;

const CloseButtonStyled = styled.button`
    position: absolute;
    right: 0;
    top: 12px;
    display: flex;
    border: transparent;
    background: transparent;
    font-weight: 900;
    font-size: 24px;
    color: ${({ theme }) => (theme.color.dili)};
    cursor: pointer;
`;


export {
    SearchInputStyled,
    InputStyled,
    CloseButtonStyled
}

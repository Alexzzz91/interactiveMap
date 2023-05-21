import styled from "styled-components";

const InputContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: transparent;
    margin: 8px 0;
`;

const InputStyled = styled.input`
    display: flex;
    padding: 10px 12px;
    width: 100%;
    border: transparent;

    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 8px;

    background: ${({theme}) => theme.color.sofia};
    color: ${({theme}) => theme.color.london};

    &::placeholder {
        color: ${({theme}) => theme.color.axum};
    }
`;

const TextAreaStyled = styled.textarea`
    display: flex;
    padding: 10px 12px;
    min-width: 290px;
    min-height: 180px;
    border: transparent;

    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 8px;

    background: ${({theme}) => theme.color.sofia};
    color: ${({theme}) => theme.color.london};

    &::placeholder {
        color: ${({theme}) => theme.color.axum};
    }
`;

const TipStyled = styled.span`
    font-family: sans-serif;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;

    color: ${({theme}) => theme.color.axum};
`;

const EditorContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 12px;
    min-width: 290px;
    min-height: 280px;
    border: transparent;

    font-family: unset;
    font-size: unset;
    line-height: unset;
    letter-spacing: unset;
    text-align: unset;
    margin-bottom: 8px;

    background: ${({theme}) => theme.color.sofia};
    border: 1px solid ${({theme}) => theme.color.nitra};
    color: ${({theme}) => theme.color.london};

    &::placeholder {
        color: ${({theme}) => theme.color.axum};
    }

    a {
        color: ${({theme}) => theme.color.kabul};
        font-weight: 600;
        text-decoration: underline;
    }
`;


const SelectStyled = styled.div`
    position: relative;
    display: block;
    padding: 10px 12px;
    padding-right: 28px;
    width: 100%;
    min-width: 150px;
    min-height: 42px;
    margin-bottom: 8px;
    border: 1px solid transparent;
    background: ${({theme}) => theme.color.sofia};
    color: ${({theme}) => theme.color.london};

    &:hover {
        border: 1px solid ${({theme}) => theme.color.mexico};
    }
`;

type SelectHeadProps = {
    isOpen: boolean;
}

const SelectHeadStyled = styled.div<SelectHeadProps>`
    width: 100%;
    max-width: 100%;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    min-width: 150px;
    min-height: 20px;
    color: ${({theme}) => theme.color.london};
    cursor: pointer;

    &::after {
        width: 10px;
        height: 6px;
        background: #FFF url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.50495 5.78413L0.205241 1.25827C-0.0684138 0.970375 -0.0684138 0.503596 0.205241 0.215836C0.478652 -0.0719461 0.922098 -0.071946 1.19549 0.215837L5.00007 4.22052L8.80452 0.215953C9.07805 -0.0718292 9.52145 -0.0718292 9.79486 0.215953C10.0684 0.503736 10.0684 0.970492 9.79486 1.25839L5.49508 5.78425C5.35831 5.92814 5.17925 6 5.00009 6C4.82085 6 4.64165 5.928 4.50495 5.78413Z' fill='%23ED266A'/%3E%3C/svg%3E%0A") no-repeat center / cover;
        position: absolute;
        right: 8px;
        bottom: 50%;
        transform: ${({ isOpen }) => isOpen ? 'translateY(50%) rotate(180deg)' : 'translateY(50%)'};
        content: '';
        display: block;
        transition: .2s ease-in;
    }
`;

const UlListStyled = styled.ul<SelectHeadProps>`
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({theme}) => theme.color.sofia};
    box-shadow: 0 4px 4px rgb(0 0 0 / 20%);
    border-radius: 2px;
    margin-top: 5px;
    max-height: 205px;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 100;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: ${({theme}) => theme.color.london};
    scrollbar-color: dark;
    scrollbar-width: thin;
    overscroll-behavior: contain;

    &::-webkit-scrollbar {
        width: 7px;
        background-color: #F8F9FA;
        padding: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #D9D9D9;
    }
`;

const LiListStyled = styled.li`
    position: relative;
    border-top: 1px solid ${({theme}) => theme.color.mexico};
    padding: 10px 15px;
    cursor: pointer;
    list-style-type: none;
    text-align: left;
    
    &:hover {
        background-color: ${({theme}) => theme.color.mexico};
    }
`;

export {
    InputContainerStyled,
    InputStyled,
    TextAreaStyled,
    EditorContainerStyled,
    TipStyled,
    SelectStyled,
    SelectHeadStyled,
    UlListStyled,
    LiListStyled
}

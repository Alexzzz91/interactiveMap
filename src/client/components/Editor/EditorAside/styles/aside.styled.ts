import styled from "styled-components";

const AsideStyled = styled.aside`
    display: flex;
    transition: transform 1s, opacity 1s, -webkit-transform 1s;
    position: absolute;
    top: 0;
    bottom: unset;
    right: 0;
    width: 340px;
    height: 100%;
    min-height: 100vh;
    transform: translateX(0%);
    bottom: unset;
    padding: 16px 0;
`;

const ListInnerStyled = styled.div`
    background: ${({ theme }) => (theme.color.santiago)};
    display: flex;
    flex-direction: column;
    height: inherit;
    width: 100%;
    height: 100%;
    flex: 1;
    // padding: 12px;
    padding: 24px;
    padding-bottom: 6px;
    transition: transform 1s, opacity 1s, -webkit-transform 1s;
`;

export {
    AsideStyled,
    ListInnerStyled,
}

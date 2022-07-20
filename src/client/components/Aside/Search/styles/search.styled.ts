import styled from "styled-components";

type ISearchStyledProps = {
    focused: boolean;
};

const SearchStyled = styled.div<ISearchStyledProps>`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => (theme.color.london)};
    transition: all 0.5s ease-out;
    box-shadow: ${({ focused }) => focused ? '0px 16px 32px 0px rgb(37 33 63 / 16%)' : '0px 0px 0px 0px transparent'};
    z-index: 100;
`;

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export {
    SearchStyled,
    ListStyled,
}

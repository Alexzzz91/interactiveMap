import styled from "styled-components";

const GroupButtonListStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: inherit;
`;

const NoActionsStyled = styled.div`
    display: flex;
    color: ${({ theme }) => theme.color.london};
    font-family: iviSans;
    font-size: 13px;
    line-height: 16px;
    width: 100%;
`;


export {
    GroupButtonListStyled,
    NoActionsStyled,
}

import styled from "styled-components";

type Props = {
    disable: boolean;
};

const GroupButtonStyled = styled.div<Props>`
    display: flex;
    padding: 12px;
    background-color: ${({ theme }) => theme.color.nara};
    color: ${({ theme }) => theme.color.london};
    font-family: iviSans;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0px;
    font-weight: meduim;
    text-align: left;
    justify-content: space-between;
    cursor: ${({ disable }) => disable ? 'not-allowed' : 'pointer'};
    opacity: ${({ disable }) => disable ? 0.32 : 1};

    & + & {
        margin-top: 4px;
    }
`;

export {
    GroupButtonStyled,
}

import styled from "styled-components";

type ContainerProps = {
    hasPaddingTop?: boolean;
    isTooltip?: boolean;
};

const ContainerStyled = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: ${({ hasPaddingTop }) => hasPaddingTop ? '24px' : 0};
    padding-bottom: 12px;
    color: ${({ isTooltip, theme }) => isTooltip ? theme.color.sydney : 'inherit'};
`;

const ImageStyled = styled.img`
    display: inline-block;
    vertical-align: middle;
    height: auto;
    width: 100%;
    background: #1a143b;
    margin-bottom: 20px;
`;

const IconsListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 30px;
    grid-gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const IconsRowStyled = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.london};
    font-family: iviSans;
    font-size: 13px;
    line-height: 16px;
    align-items: center;
    justify-content: center;

    > svg {
        width: 25px;
        height: 25px;
        fill: ${({ theme }) => theme.color.london};
    }

`;

export {
    ContainerStyled,
    ImageStyled,
    IconsListStyled,
    IconsRowStyled,
}
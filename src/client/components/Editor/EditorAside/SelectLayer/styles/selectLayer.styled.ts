import styled from "styled-components";
import { Eye } from '../../../../../../common/components/icons';

const ContainerStyled = styled.div`
    position: relative;
`;

const TitleStyled = styled.h5`
    color: ${({ theme }) => theme.color.london};
    font-family: sans-serif;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0px;
    font-weight: meduim;
`;

const LayersListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

type LayerItemProps = {
    current: boolean;
};

const LayerItemStyled = styled.li<LayerItemProps>`
    background-color: ${({ theme }) => theme.color.nara};
    color: ${({ theme }) => theme.color.london};
    display: flex;
    font-family: sans-serif;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0px;
    font-weight: ${({current}) => current ? 'bold' : 'meduim'};
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    opacity: ${({current}) => current ? 1 : 0.32};
    
    & + & {
        margin-top: 1px;
    }
`;

const EyeStyled = styled(Eye)`
    fill: ${({ theme }) => theme.color.london};
    margin-right: 4px;
    display: none;
`;

export {
    ContainerStyled,
    TitleStyled,
    LayersListStyled,
    LayerItemStyled,
    EyeStyled,
}
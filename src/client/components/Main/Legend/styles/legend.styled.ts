import styled from 'styled-components';
import { device } from "../../../../styles/device";

type ContainerProps = {
    expanded?: boolean;
};

const ContainerStyled = styled.div<ContainerProps>`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: auto;
    grid-template-rows: auto;
    position: absolute;
    width: 100%;
    bottom: 16px;
    left: 32px;
    margin-right: 32px;
    transition: .4s;
    color: ${({ theme }) => (theme.color.london)};
    background: ${({ theme }) => (theme.color.sofia)};
    border-color: ${({ theme }) => (theme.color.sofia)};
    border-style: solid; 
    border-width: 1px;
    justify-items: center;

    @media ${device.mobileS} { 
        left: 0px;
        bottom: 0px;
        margin-right: 2px;
        border-width: 0px;
    }

    @media ${device.laptop} { 
        bottom: 16px;
        left: 32px;
        margin-right: 32px;
        border-width: 1px;
    }

`;

const ListStyled = styled.div`
    display: grid;
    overflow: auto;
    width: 100%;
    grid-auto-rows: max-content;
    grid-template-columns: repeat(auto-fill, 136px);
    grid-template-rows: repeat(auto-fill, 20px);
    column-gap: 20px;
    row-gap: 8px;
    color: ${({ theme }) => (theme.color.london)};

    @media ${device.mobileS} { 
        row-gap: 4px;
        column-gap: 2px;
        grid-template-columns: repeat(auto-fill, 90px);
        grid-template-rows: repeat(auto-fill, 14px);
    }

    @media ${device.laptop} { 
        column-gap: 20px;
        row-gap: 8px;
        grid-template-columns: repeat(auto-fill, 130px);
        grid-template-rows: repeat(auto-fill, 18px);
    }

`;

const RowStyled = styled.div`
    display: flex;
    font-family: sans-serif;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0px;

    @media ${device.mobileS} { 
        font-size: 9px;
        line-height: 11px;
    }

    @media ${device.laptop} { 
        font-size: 12px;
        line-height: 14px;
    }

`;

const IconBlockContainerStyled = styled.div`
    margin-right: 3px; 

    @media ${device.mobileS} { 
        margin-right: 1px; 
    }

    @media ${device.laptop} { 
        margin-right: 3px; 
    }
`;

const IconLabelStyled = styled.span`
    margin-left: 3px; 

    @media ${device.mobileS} { 
        margin-left: 1px; 
    }
    
    @media ${device.laptop} { 
        margin-left: 3px; 
    }
`;

export {
    ContainerStyled,
    ListStyled,
    RowStyled,
    IconBlockContainerStyled,
    IconLabelStyled,
}
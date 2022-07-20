import { Link } from "react-router-dom";
import styled from "styled-components";
import { ExternalLink } from "../../../../client/components/Aside/Staff/assets";
import { Link as PortalLinkSvg } from "../../../../client/components/Aside/User/assets/img";

const CopyLinkStyled = styled(ExternalLink)`
    opacity: 0;
    align-self: baseline;
    margin-top: 6px;
    transition: .2s all;

    * {
        transition: .2s all;
    }

    &:hover {
        * {
            fill:  ${({ theme }) => (theme.color.tanga)};
        }
    }
`;

const PortalLinkStyled = styled(PortalLinkSvg)`
    opacity: 0;
    align-self: baseline;
    margin-top: 6px;
    margin-right: 16px;
    transition: .2s all;

    * {
        transition: .2s all;
    }

    &:hover {
        * {
            fill:  ${({ theme }) => (theme.color.tanga)};
        }
    }
`;


type IContainerProps = {
    activeelem: string;
    withoutImage?: boolean;
}

const ContainerStyled = styled(Link)<IContainerProps>`
    display: flex;
    width: 100%;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    padding-left: ${({ withoutImage }) => withoutImage ? 40 : 12}px;
    background: ${({ theme, activeelem }) => activeelem === '1' ? theme.color.nara : 'transparent'};
    transition: 1s all;

    &: hover {
        background: ${({ theme }) => theme.color.nara };

        ${CopyLinkStyled},
        ${PortalLinkStyled} {
            opacity: 1;
        }
    }
`;

const PersonInfoBlockStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 100%;
    overflow: hidden;
    justify-content: space-evenly;
`;

const PersonNameStyled = styled.div`
    font-family: iviSans;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;

    color: ${({ theme }) => (theme.color.london)};
`;

const PersonPositionStyled = styled(PersonNameStyled)`
    opacity: 0.56;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const ImageContainerStyled = styled.div`
    display: flex;
    height: 48px;
    width: 48px;
    background: radial-gradient(50% 50% at 50% 50%, #E7E3FF 0%, #DCD9F2 100%);
    border-radius: 39px;
    margin-right: 12px;
    align-items: center;
    justify-content: center;
`;

type ImageStyledProps = {
    round?: boolean; 
    hasContainer?: boolean;
}

const ImageStyled = styled.img<ImageStyledProps>`
    display: inline-block;
    vertical-align: middle;
    height: ${({ hasContainer }) => hasContainer ? '100%' : '28px' };
    width: ${({ hasContainer }) => hasContainer ? '100%' : '28px' };
    border-radius: ${({ hasContainer, round }) => hasContainer || round ? '50%' : 0 };
`;

export {
    ContainerStyled,
    PersonInfoBlockStyled,
    PersonNameStyled,
    PersonPositionStyled,
    ImageContainerStyled,
    ImageStyled,
    CopyLinkStyled,
    PortalLinkStyled,
}
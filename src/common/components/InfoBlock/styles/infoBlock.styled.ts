import styled from "styled-components";
import { LevelIcon } from "../assets/img";

const InfoBlockStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1;
`;

type InfoBlockLineProps = {
    row?: boolean;
};

const InfoBlockLineStyled = styled.div<InfoBlockLineProps>`
    display: flex;
    flex-direction: ${({ row }) => row ? 'row' : 'column'};
    width: 100%;
    flex: 1;
    overflow: visible;
    
    & + & {
        margin-top: 8px;
    } 
`;

type TitleProps = {
    isTooltip?: boolean;
};

const TitleStyled = styled.span<TitleProps>`
    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    font-weight: 500;
    margin-right: 6px;
    cursor: default;
    flex: 1;

    color: ${({ isTooltip, theme }) => isTooltip ? theme.color.sofia : theme.color.tanga};
`;

const InfoTextStyled = styled.span`
    font-family: sans-serif;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: auto;
    max-width: 85%;
    cursor: default;

    opacity: 0.56;
    color: ${({ theme }) => theme.color.london};

    a {
        font-weight: 600;
        text-decoration: underline;
        outline: none;
    }
`;

const ImageStyled = styled.img`
    display: inline-block;
    vertical-align: middle;
    height: auto;
    width: 100%;
    background: #1a143b;
    margin-bottom: 20px;
`;

type LevelIconProps = {
    level?: string;
};

const LevelIconStyled = styled(LevelIcon)<LevelIconProps>`
    min-width: 40px;
    height: 40px;
    display: flex;

    ${TitleStyled} + & {
        margin-left: 6px;
    }
    
    fill: ${({ theme, level }) => {
        let fill;

        switch (level?.toString()) {
            case '1':
                fill = theme.color.beirut
            break;
            case '2':
                fill = theme.color.kano
            break;
            case '3':
                fill = theme.color.muar
            break;
            case '4':
                fill = theme.color.alexandria
            break;
            case '5':
                fill = theme.color.york
            break;
            case '6':
                fill = theme.color.rome
            break;
            default:
                fill = theme.color.beirut
            break;
        }

        return fill;
    }};
`;

export {
    InfoBlockStyled,
    InfoBlockLineStyled,
    TitleStyled,
    InfoTextStyled,
    LevelIconStyled,
    ImageStyled
}
import * as React from 'react';
import { 
    InfoBlockStyled,
    InfoBlockLineStyled,
    TitleStyled,
    LevelIconStyled,
    InfoTextStyled,
} from './styles/infoBlock.styled';

type InfoBlockProps = {
    name: string;
    level?: string;
    info?: string;
    isTooltip?: boolean;
}

const InfoBlock: React.FC<InfoBlockProps> = (props) => {
    const { 
        name,
        level,
        info,
        isTooltip,
    } = props;

    const html = React.useMemo(() => {
        if (info) {
            return { __html: info };
        }

    }, [info]);

    return (
        <InfoBlockStyled>
            <InfoBlockLineStyled>
                <InfoBlockLineStyled>
                    <TitleStyled isTooltip={isTooltip}>
                        {name}
                    </TitleStyled>
                </InfoBlockLineStyled>
                {(!!info && !isTooltip) && (
                    <InfoBlockLineStyled >
                        <InfoTextStyled dangerouslySetInnerHTML={html} />
                    </InfoBlockLineStyled>
                )}
            </InfoBlockLineStyled>
            {!isTooltip && (
                <LevelIconStyled level={level}/>
            )}
        </InfoBlockStyled>
    );
};

export { InfoBlock };

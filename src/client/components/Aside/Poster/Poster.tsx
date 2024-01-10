// @ts-nocheck
import React from 'react'
import { useParams } from 'react-router-dom';
import { IParamsProps } from '../../app';
import { useIsClientDetection } from '../../../../common/hooks/useIsClientDetection';
import { Loading } from '../../../../common/components/Loading';
// import { InfoBlock } from '../../../../common/components/InfoBlock/InfoBlock';

import { 
    ContainerStyled,
    ImageStyled,
    LoadingContainerStyled,
} from './styles/poster.styled';

type IPosterProps = {}

const Poster: React.FC<IPosterProps> = () => {
    const { idPoster, floorIndex } = useParams<IParamsProps>();
    const isClient = useIsClientDetection();

    const [posterSrc, setPosterSrc]  = React.useState('');

    React.useEffect(() => {
        setPosterSrc('');

        const target = document.querySelector(`[data-posterid="${idPoster}"]`);
    
        if (!target) {
            return null;
        }
    
        const fillAttr = target?.attributes['fill']?.nodeValue;
        let patternId = fillAttr.match(/url\(#(\w+)\)/);
    
        if (!patternId) {
          return null;
        }
    
        patternId = patternId[1];
    
        const pattern = document.getElementById(patternId);
        
        if (!pattern) {
          return null;
        }
    
        const image = pattern.firstElementChild;
        const imageHref = image?.attributes['xlink:href']?.nodeValue;
        const fullImageHref = imageHref.replace('.jpg', '-full.jpg');
        
        const img = document.createElement('img');
        img.src = fullImageHref;

        img.onload = function() {
            setPosterSrc(fullImageHref);
        };

        img.onerror = function() {
            alert("Ошибка во время загрузки изображения");
        };
    }, [idPoster, setPosterSrc]);

    if (!isClient) {
        return null;
    }

    return (
        <ContainerStyled>
            {!!posterSrc &&  (
                <ImageStyled src={posterSrc} />
            )}
            {!posterSrc && (
                <LoadingContainerStyled>
                    <Loading transparent={true}/>
                </LoadingContainerStyled>
            )}
            {/* <InfoBlock 
                name={'Постер «Теория Большого Взрыва»'}
                level={floorIndex}
                info={'какое то описание к этому постеру'}
            /> */}
        </ContainerStyled>
    );
};

export { Poster };

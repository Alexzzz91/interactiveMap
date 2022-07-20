import * as React from 'react';
import { 
    LoadingContainerStyled,
    LoadingStyled,
    DotStyled,
} from './styles/loading.styled';

type ILoadingProps = {
    transparent?: boolean;
};

const Loading: React.FC<ILoadingProps> = ({ transparent }) => {
    return (
        <LoadingContainerStyled transparent={transparent} >
            <LoadingStyled>
                Гружу инфу 
            </LoadingStyled>
            <DotStyled center={false}>
                &bull;
            </DotStyled>
            <DotStyled center={true}>
                &bull;
            </DotStyled>
            <DotStyled center={false}>
                &bull;
            </DotStyled>
        </LoadingContainerStyled>
    );
};

export { Loading };

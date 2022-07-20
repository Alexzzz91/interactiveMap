import * as React from 'react';
import { 
    BackButtonStyled,
    ArrowStyled,
} from './styles/backButton.styled';

    // @ts-ignore
const BackButton = ({ floorIndex }) => (
    <BackButtonStyled to='/'>
        <ArrowStyled />

        {floorIndex} этаж
    </BackButtonStyled>
);

export { BackButton };

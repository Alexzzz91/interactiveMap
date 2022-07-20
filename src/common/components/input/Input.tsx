
import * as React from 'react';
import {
    InputContainerStyled,
    InputStyled,
    TipStyled
} from './styles/input.styled';

type Props = {
    name: string;
    value?: string; 
    tip?: string;
    type?: string;
    placeholder?: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<Props> = (props) => {
    const {
        value = '',
        tip,
        placeholder="Название",
        onChange,
        ...rest
    } = props;

    return (
        <InputContainerStyled>
            <InputStyled 
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
            {tip && (
                <TipStyled>
                    {tip}
                </TipStyled>
            )}
        </InputContainerStyled>
    );
};

export { 
    Input
};

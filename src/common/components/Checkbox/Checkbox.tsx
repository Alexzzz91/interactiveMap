import React from 'react'
import {
    CheckboxContainerStyled,
    CheckboxStyled,
    HiddenCheckboxStyled,
    IconStyled 
} from './styles/checkbox.styled';

type Props = {
    checked: boolean;
    name?: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const Checkbox: React.FC<Props> = ({checked, name, onChange}) => {
    return (
        <CheckboxContainerStyled>
            <HiddenCheckboxStyled
                checked={checked} 
                name={name}
                onChange={onChange}
            />
            <CheckboxStyled  checked={checked}>
                <IconStyled viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </IconStyled>
            </CheckboxStyled>
        </CheckboxContainerStyled>
    );
};

export { Checkbox };

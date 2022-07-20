import * as React from 'react';
import {
    InputContainerStyled,
    TextAreaStyled,
    TipStyled
} from './styles/input.styled';

type Props = {
    name: string;
    value?: string; 
    defaultValue?: string; 
    tip?: string;
    placeholder?: string;
    onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const TextArea: React.FC<Props> = (props) => {
    const {
        value = '',
        defaultValue = '',
        tip,
        placeholder="Название",
        onChange,
        ...rest
    } = props;

    return (
        <InputContainerStyled>
            <TextAreaStyled 
                value={value}
                defaultValue={defaultValue}
                placeholder="Описание места. Например, «Большой диван на 8 мест, столик, кресло-мешок.»"
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
    TextArea
};

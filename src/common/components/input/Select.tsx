
import * as React from 'react';
import {
    InputContainerStyled,
    LiListStyled,
    SelectStyled,
    SelectHeadStyled,
    TipStyled,
    UlListStyled
} from './styles/input.styled';

type Item = {
    value: string;
    title: string;
}

type Props = {
    name: string;
    value?: string; 
    tip?: string;
    type?: string;
    placeholder?: string;
    items: Item[];
    onChange(newValue: string): void;
}

const Select: React.FC<Props> = (props) => {
    const {
        value = '',
        tip,
        placeholder="Название",
        onChange,
        items = [],
        ...rest
    } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleHeadClick = React.useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const handleItemClick = React.useCallback((event: React.MouseEvent<HTMLLIElement>) => {
        setIsOpen(false);

        if (!inputRef.current) {
            return;
        }

        const element = event.target as HTMLElement;
        const value = element.dataset['value'];
        
        if (!value) {
            return;
        }

        inputRef.current.value = value;

        onChange(value);
    }, [inputRef]);

    const title = React.useMemo(() => {
        if (!items.length) {
            return ;
        }

        const find =  items.find((item) => item.value === value);

        return find?.title;

    }, [items, value]);

    if (!items.length) {
        return <div />;
    }

    return (
        <InputContainerStyled>
            <SelectStyled>
                <input
                    type="hidden" 
                    value={value}
                    placeholder={placeholder}
                    ref={inputRef}
                    {...rest}
                />
                <SelectHeadStyled 
                    isOpen={isOpen}
                    onClick={handleHeadClick}
                > 
                    {!!value && title}
                    {!value && placeholder}
                </SelectHeadStyled>
                <UlListStyled isOpen={isOpen}>
                    {items.map(({ value, title }) => (
                        <LiListStyled 
                            key={value}
                            data-value={value}
                            onClick={handleItemClick}
                        >
                            {title}
                        </LiListStyled>
                    ))}
                </UlListStyled>
            </SelectStyled>

            {tip && (
                <TipStyled>
                    {tip}
                </TipStyled>
            )}
        </InputContainerStyled>
    );
};

export { 
    Select
};

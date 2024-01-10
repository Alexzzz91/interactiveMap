// @ts-nocheck
import React from 'react'
import {
    GroupButtonStyled,
} from './styles/groupButton.styled';
import { Add, Pen } from '../../../../../../common/components/icons';

enum ButtonType {
    Staff = 'staff',
    Department = 'department',
    Place = 'place',
};

type Props = {
    type: ButtonType;
    count: number;
    disable?: boolean;
    onClick(type: string): void;
}

const GroupButton: React.FC<Props> = (props) => {
    const {
        type,
        count,
        disable = false,
        onClick,
    } = props;

    let text = '';

    switch (type) {
        case ButtonType.Staff: 
        text = 'Добавить сотрудников';
        break;
        case ButtonType.Department: 
        text = 'Добавить отделы';
        break;
        case ButtonType.Place: 
        text = 'Указать место';
        break;
    }

    const handleOnClick = React.useCallback(() => {
        if (disable) {
            return;
        }

        return onClick(type);
    }, [disable, onClick, type]);

    const icon = !!count ? 'pen' : 'add';

    return (
        <GroupButtonStyled
            onClick={handleOnClick}
            disable={disable}
        >
            <span> { text } {!!count && `• ${count}`}
            </span>
            { icon === 'pen' && (
                <Pen />
            )}
            { icon === 'add' && (
                <Add />
            )}
        </GroupButtonStyled>
    );
};

export { 
    GroupButton,
    ButtonType,
};

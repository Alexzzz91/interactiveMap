// @ts-nocheck
import * as React from 'react';
import { Close } from '../../../../../common/components/icons';
import {
    SearchInputStyled,
    CloseButtonStyled,
    InputStyled,
} from './styles/fastSearch.styled';

type ISearchInputProps = {
    searchValue?: string;
    displayOnly?: boolean;
    disableModeScreen?: boolean;
    handleSearchClick?: (value: string) => void;
    handleClearClick: (event: React.MouseEvent) => void;
};

const FastSearch: React.FC<ISearchInputProps> = ({
    handleSearchClick,
    handleClearClick,
    displayOnly = false, 
    disableModeScreen = false,
    searchValue,
}) => {

    const handleSearch = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (displayOnly) {
            return;
        }

        handleSearchClick(event.target.value);
        return;
    }, [handleSearchClick, displayOnly]);

    const handleClick = React.useCallback((event: React.MouseEvent) => {
        if (!searchValue || displayOnly) {
            handleClearClick(event);
            return;
        }

        handleSearchClick('');
    }, [searchValue, handleClearClick, handleSearchClick, displayOnly]);

    return (
        <SearchInputStyled>
            <InputStyled
                placeholder="Поиск сотрудника, места"
                onChange={handleSearch}
                disabled={displayOnly}
                value={searchValue}
            />
            
            {((!!searchValue || !disableModeScreen) || displayOnly) && (
                <CloseButtonStyled
                    type="button"
                    onClick={handleClick}
                >
                    <Close />
                </CloseButtonStyled>
            )}
        </SearchInputStyled>
    );
};

export { FastSearch };

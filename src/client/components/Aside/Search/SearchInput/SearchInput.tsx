// @ts-nocheck
import * as React from 'react';
import { Close } from '../../../../../common/components/icons';

import {
    SearchInputStyled,
    CloseButtonStyled,
    InputStyled,
} from './styles/searchInput.styled';

type ISearchInputProps = {
    searchValue?: string;
    handleSearchClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClearClick: (event: React.MouseEvent) => void;
};

const SearchInput: React.FC<ISearchInputProps> = ({
    handleSearchClick,
    handleClearClick,
    searchValue,
}) => (
    <SearchInputStyled>
        <InputStyled
            placeholder="Поиск сотрудника, места"
            onChange={handleSearchClick}
            value={searchValue}
        />

        {searchValue.length > 0 && (
            <CloseButtonStyled
                type="button"
                onClick={handleClearClick}
            >
                <Close />
            </CloseButtonStyled>
        )}
    </SearchInputStyled>
);

export { SearchInput };

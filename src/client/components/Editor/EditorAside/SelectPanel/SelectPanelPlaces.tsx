// @ts-nocheck
import React from 'react'
import { Virtuoso } from 'react-virtuoso';
import {
    SelectPanelStyled,
    ListContainerStyled,
    HeaderStyled,
    // CustomResultItemStyled,
} from './styles/selectPanel.styled';
import { ButtonType } from './GroupButton/GroupButton';
import { FastSearch } from '../FastSearch/FastSearch';
import { placeNames } from '../../../../../common/commonValues';
import { PlaceEditForm } from './PlaceEditForm/PlaceEditForm';
import { CustomResultItem } from './CustomResultItem/CustomResultItem';
import { IDbPlace } from '../../../../IndexedDB/places/loadPlaces';

type Props = {
    placeInThisArea?: IDbPlace;
    mode: ButtonType;
    mapid: number;
    onCloseClick(): void;
}

const SelectPanelPlaces: React.FC<Props> = (props) => {
    const { 
        onCloseClick, 
        mapid, 
        placeInThisArea,
    } = props;
    const [searchValue, setSearchValue] = React.useState('');
    const [selectedType, setSelectedType] = React.useState(null);

    React.useEffect(() => {
        let type = null;

        if(placeInThisArea) {
            type = placeInThisArea.type;
        }

        // @ts-ignore
        setSelectedType(type);
    }, [setSelectedType, placeInThisArea]);

    const virtuoso = React.useRef(null);
    const handleChecked = React.useCallback((id) => setSelectedType(id), [setSelectedType]);
    const handleClearClick = React.useCallback(() => onCloseClick(), [onCloseClick]);
    const handleBackClick = React.useCallback(() => setSelectedType(null), [setSelectedType]);

    return (
        <SelectPanelStyled>
            {!selectedType && (
                <>
                    <HeaderStyled >
                        <FastSearch 
                            searchValue={searchValue}
                            handleSearchClick={setSearchValue}
                            handleClearClick={handleClearClick}
                        />
                    </HeaderStyled>
                    <ListContainerStyled>
                        <Virtuoso
                            data={Object.entries(placeNames)}
                            ref={virtuoso}
                            itemContent={(index, [key, place]) => (
                                <CustomResultItem 
                                    key={key + index}
                                    onClick={handleChecked}
                                    value={key}
                                    caption={place}
                                />
                            )}
                        />
                    </ListContainerStyled>
                </>
            )}
            {selectedType && (
                <PlaceEditForm 
                    mapid={mapid}
                    place={placeInThisArea}
                    // @ts-ignore
                    selectedType={selectedType} 
                    onCloseClick={handleBackClick}
                />
            )}
        </SelectPanelStyled>
    );
};

export { 
    SelectPanelPlaces
};

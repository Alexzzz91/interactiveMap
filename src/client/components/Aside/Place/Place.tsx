import * as React from 'react';
import { InfoBlock } from '../../../../common/components/InfoBlock/InfoBlock';
import { IDbPlace } from '../../../IndexedDB/places/loadPlaces';
import { placeСompositionIcons, placeСompositionNames } from '../../../../common/commonValues';
import * as PlaceIcons from '../../../../common/components/icons/placeIcons';

import { 
    ContainerStyled,
    ImageStyled,
    IconsListStyled,
    IconsRowStyled,
} from './styles/place.styled';

type IPlaceProps = {
    place: IDbPlace;
    isTooltip?: boolean;
}

const CapacityIcon = PlaceIcons['Capacity'];

const Place: React.FC<IPlaceProps> = ({ place, isTooltip }) => {
    const {
        capacity,
        showCapacity,
        hasAppleTv,
        hasBoard,
        hasCoffeeMachine,
        hasFridge,
        hasMicrowave,
        hasTable,
        hasTv,
        hasWindowsPc,
        hasSink,
        hasArmchair,
        hasChair,
        hasCooler,
    } = place;

    const icons = {
        hasAppleTv,
        hasBoard,
        hasCoffeeMachine,
        hasFridge,
        hasMicrowave,
        hasTable,
        hasTv,
        hasWindowsPc,
        hasSink,
        hasArmchair,
        hasChair,
        hasCooler,
    };

    return (
        <ContainerStyled 
            hasPaddingTop={!!place.image}
            isTooltip={isTooltip}
        >
            {(!!place.image && !isTooltip) && (
                <ImageStyled src={place.image}/>
            )}

            <InfoBlock
                name={place.name}
                level={place?.level}
                info={place?.textDescription}
                isTooltip={isTooltip}
            />
            
            {(showCapacity && capacity && capacity > 0 && !isTooltip) && (
                <IconsRowStyled title={placeСompositionNames['capacity']}>
                    <CapacityIcon />
                    {placeСompositionNames['capacity']} - {capacity}
                </IconsRowStyled>
            )}

            {!isTooltip && (
                <IconsListStyled>
                    {Object.entries(icons).map(([key, checked]) => {
                        if (!checked) {
                            return null;
                        }

                        // @ts-ignore
                        const iconName = placeСompositionIcons[key];
                        // @ts-ignore
                        const IconComponent = iconName && PlaceIcons[iconName];

                        if (!IconComponent) {
                            return null;
                        }

                        return (
                            <IconsRowStyled 
                                key={key}
                                // @ts-ignore
                                title={placeСompositionNames[key]}
                            >
                                <IconComponent />
                            </IconsRowStyled>
                        );
                    })}
                </IconsListStyled>
            )}
        </ContainerStyled>
    );
};

export { Place };

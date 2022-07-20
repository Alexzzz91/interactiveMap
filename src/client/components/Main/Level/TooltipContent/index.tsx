import React from 'react';
import { useParams } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { UserData } from '../../../../gql/usersGql';
import { IDbPlace } from '../../../../IndexedDB/places/loadPlaces';
import { searchPlacesByFloorAndPlace } from '../../../../IndexedDB/places/searchPlaces';
import { searchStaffByFloorAndWorkplace } from '../../../../IndexedDB/staff/searchStaff';
import { IParamsProps } from '../../../app';
import { Place } from '../../../Aside/Place/Place';
import { Workplace } from '../../../Aside/Workplace/Workplace';
import { TooltipInnerStyled } from './styles/tooltipContent.styled';

const TooltipContent: React.FC<{tooltipContent: string;}> = ({ tooltipContent }) => {
    const [persons, setPersons] = React.useState<UserData[]>([]);
    const [places, setPlaces] = React.useState<IDbPlace[]>([]);

    const { floorIndex } = useParams<IParamsProps>();

    const getPersons = React.useCallback(async ({floorIndex, idWorkplace }: {floorIndex: string, idWorkplace: string }) => {
        const persons = await searchStaffByFloorAndWorkplace({level: floorIndex, workplaceid: idWorkplace});

        setPersons(persons);
    }, [setPersons]);

    const getPlaces = React.useCallback(async ({floorIndex, idPlace }: {floorIndex: string, idPlace: string }) => {
        const places = await searchPlacesByFloorAndPlace({level: floorIndex, mapid: idPlace});

        setPlaces(places);
    }, [setPlaces]);


    React.useEffect(() => {
        const match = tooltipContent.match(/(^.+)=(\d+$)/);

        if (!match) {
            return;
        }

        const [, type, value] = match;

        if (type === 'workplaceid') {
            getPersons({floorIndex, idWorkplace: value });
        } else {
            setPersons([]);
        }

        if (type === 'mapid') {
            getPlaces({floorIndex, idPlace: value });
        } else {
            setPlaces([]);
        }
    }, [floorIndex, tooltipContent]);

    if (!persons.length && !places.length) {
        return <div/>;
    }

    return (
        <ReactTooltip
            delayHide={500}
            delayShow={500}
        >
            <TooltipInnerStyled>
                {places.map((place) => (
                    <Place
                        key={place.id}
                        place={place}
                        isTooltip={true}
                    />
                ))}
                <Workplace
                    persons={persons}
                    isTooltip={true}
                />
            </TooltipInnerStyled>
      </ReactTooltip>
    );
};

export { TooltipContent };

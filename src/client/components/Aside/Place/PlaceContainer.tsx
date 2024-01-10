
import React from 'react'
import { useParams } from 'react-router-dom';
import { searchPlacesByFloorAndPlace } from '../../../IndexedDB/places/searchPlaces';
import { IParamsProps } from '../../app';
import { Place } from './Place';
import { IDbPlace } from '../../../IndexedDB/places/loadPlaces';

const PlaceContainer: React.FC = () => {
    const { floorIndex, idPlace } = useParams<IParamsProps>();
    const [places, setPlaces] = React.useState<IDbPlace[]>([]);

    const getPlaces = React.useCallback(async ({floorIndex, idPlace }: {floorIndex: string, idPlace: string }) => {
        const places = await searchPlacesByFloorAndPlace({level: floorIndex, mapid: idPlace});

        setPlaces(places);
    }, [setPlaces]);

    React.useEffect(() => {
        if (floorIndex && idPlace) {
            getPlaces({floorIndex, idPlace });
        }
    }, [floorIndex, idPlace ]);

    return (
        <>
            {places.map((place) => (
                <Place
                    key={place.id}
                    place={place} 
                />
            ))}
        </>
    );
};

export { PlaceContainer };

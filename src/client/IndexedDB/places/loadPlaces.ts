import { mapAppDb } from "..";
import { PlaceData } from "../../gql/placesGql";

type IDbPlace = Omit<PlaceData, 'level' | 'mapid'> & {
    mapid?: string;
    level?: string;
}

const loadToDBPlaces = async (places: PlaceData[]) => {
    await mapAppDb.open();
    await mapAppDb.table('places').clear();

    const dbPlaces = places.map((place) => {
        const dbPlace: IDbPlace = {
            ...place,
            mapid: place.mapid?.toString(),
            level: place.level?.fl.toString(),
        };

        return dbPlace;
    });

    await mapAppDb.table('places').bulkAdd(dbPlaces);
};

const updatePlace = async (place: IDbPlace) => {
    const result = await mapAppDb.table('places').update(place.id, {...place});
    
    try {
        if (result) {
            console.log ("places update"); 
        }
        else {
            console.log ("places didn't update");
        }   
    } catch (error) {
        console.error(error);
    }
};

export {
    loadToDBPlaces,
    updatePlace,
}

export type {
    IDbPlace,
}
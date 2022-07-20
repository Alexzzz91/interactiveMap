import { mapAppDb } from "..";
import { IDbPlace } from "./loadPlaces";

const getPlaces = async () => {
    const results = await mapAppDb
        .table('places')
        .toArray();

    return results as IDbPlace[];
};

const searchPlacesByName = async (starts: string) => {
    const results = await mapAppDb
        .table('places')
        .where('name')
        .startsWithAnyOfIgnoreCase(starts)
        .toArray();

    return results as IDbPlace[];
};

const searchPlacesByFloor = async ({level}: {level: string}) => {
    const results = await mapAppDb
        .table('places')
        .where('level').equals(level)
        .toArray();

    return results as IDbPlace[];
};

const searchPlacesByFloorAndPlace = async ({level, mapid}: {level: string, mapid:string }) => {
    const results = await mapAppDb
        .table('places')
        .where('[level+mapid]').equals([level, mapid])
        .toArray();

    return results as IDbPlace[];
};

export {
    searchPlacesByName,
    searchPlacesByFloor,
    searchPlacesByFloorAndPlace,
    getPlaces,
}
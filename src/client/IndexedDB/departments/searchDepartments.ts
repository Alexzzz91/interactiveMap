import { mapAppDb } from "..";
import { IDbDepartment } from "./loadDepartments";

const getDepartments = async () => {
    const results = await mapAppDb
        .table('departments')
        .toArray();

    return results as IDbDepartment[];
};

const searchDepartmentsByName = async (starts: string) => {
    const results = await mapAppDb
        .table('departments')
        .where('name')
        .startsWithAnyOfIgnoreCase(starts)
        .toArray();

    return results as IDbDepartment[];
};

const searchDepartmentsByFloor = async ({level}: {level: string }) => {
    const results = await mapAppDb
        .table('departments')
        .where('level').equals(level)
        .toArray();

    return results as IDbDepartment[];
};

const searchDepartmentsByFloorAndPlace = async ({level, mapid}: {level: string, mapid:string }) => {
    const results = await mapAppDb
        .table('departments')
        .where('[level+mapid]').equals([level, mapid])
        .toArray();

    return results as IDbDepartment[];
};

export {
    searchDepartmentsByName,
    searchDepartmentsByFloor,
    searchDepartmentsByFloorAndPlace,
    getDepartments
}
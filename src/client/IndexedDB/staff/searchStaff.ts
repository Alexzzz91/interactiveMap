import { mapAppDb } from "..";
import { IDbUser } from "./loadStaff";

const getStaff = async () => {
    const results = await mapAppDb
        .table('staff')
        .toArray();

    return results as IDbUser[];
};

const searchStaffByName = async (starts: string) => {
    const results = await mapAppDb
        .table('staff')
        .where('name')
        .equalsIgnoreCase(starts)
        .toArray();

    return results as IDbUser[];
};

const searchStaffByUserName = async (starts: string) => {
    const results = await mapAppDb
        .table('staff')
        .where('username')
        .equalsIgnoreCase(starts)
        .first();

    return results as IDbUser;
};

const searchStaffById = async (id: string) => {
    const result = await mapAppDb.table('staff').get(id);

    return result as IDbUser;
};

const searchStaffByFloor = async ({level}: {level: string }) => {
    const results = await mapAppDb
        .table('staff')
        .where('floor').equals(Number(level))
        .toArray();
    
    return results as IDbUser[];
};

const searchStaffByFloorAndPlace = async ({level, mapid}: {level: string, mapid:string }) => {
    const results = await mapAppDb
        .table('staff')
        .where('[floor+mapid]').equals([Number(level), mapid])
        .toArray();

    return results as IDbUser[];
};

const searchStaffByFloorAndWorkplace = async ({level, workplaceid}: {level: string, workplaceid:string }) => {
    const results = await mapAppDb
        .table('staff')
        .where('[floor+workplaceid]').equals([Number(level), workplaceid])
        .toArray();

    return results as IDbUser[];
};

const searchStaffHasBDay = async () => {
    const results = await mapAppDb
        .table('staff')
        .where('isBirthday')
        .equals(1)
        .toArray();

    return results as IDbUser[];
};

const searchStaffInVacation = async () => {
    const results = await mapAppDb
        .table('staff')
        .where('inVacation').equals(1)
        .toArray();

    return results as IDbUser[];
};

export {
    getStaff,
    searchStaffByName,
    searchStaffByUserName,
    searchStaffById,
    searchStaffByFloor,
    searchStaffByFloorAndPlace,
    searchStaffByFloorAndWorkplace,
    searchStaffHasBDay,
    searchStaffInVacation,
}
import { mapAppDb } from "..";
import { DepartmentData } from "../../gql/departmentsGql";
import { IDbUser, userDefaultAvatars } from '../staff/loadStaff';

type IDbDepartment = Omit<DepartmentData, 'staff' | 'level'> & {
    staff: IDbUser[];
    level?: string;
}

const loadToDBDepartments = async (departments: DepartmentData[]) => {
    await mapAppDb.open();
    await mapAppDb.table('departments').clear();
    let currentAvatar = 0;

    const dbDepartments = departments.map((dep) => {
        const dbDep: IDbDepartment = {
            ...dep,
            level: dep.level?.fl.toString(),
            staff: dep.staff.map((user) => {
                const newUser: IDbUser = {...user};

                currentAvatar++;
                if (currentAvatar > userDefaultAvatars.length - 1) {
                    currentAvatar = 0;
                }

                return newUser;
            }),
        };

        return dbDep;
    });

    await mapAppDb.table('departments').bulkAdd(dbDepartments);
};

export {
    loadToDBDepartments,
}

export type {
    IDbDepartment,
}
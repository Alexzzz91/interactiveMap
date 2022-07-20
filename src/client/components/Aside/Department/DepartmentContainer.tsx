import * as React from 'react';
import { useParams } from 'react-router-dom';
import { IParamsProps } from '../../app';
import { Department } from './Department';
import { searchDepartmentsByFloorAndPlace } from '../../../IndexedDB/departments/searchDepartments';
import { searchStaffByFloorAndPlace } from '../../../IndexedDB/staff/searchStaff';
import { IDbDepartment } from '../../../IndexedDB/departments/loadDepartments';

const DepartmentContainer: React.FC = () => {
    const [departments, setDepartments] = React.useState<IDbDepartment[]>([]);

    const { floorIndex, idPlace } = useParams<IParamsProps>();

    const getDepartments = React.useCallback(async ({floorIndex, idPlace }: {floorIndex: string, idPlace: string }) => {
        let departments = await searchDepartmentsByFloorAndPlace({level: floorIndex, mapid: idPlace});
        
        departments = departments.map((dep) => {
            dep.staff = dep.staff.filter((person) => {

                if (!person.floor) {
                    return true;
                }

                return person.floor.toString() === floorIndex
            });
            
            return dep;
        });
        
        const persons = await searchStaffByFloorAndPlace({level: floorIndex, mapid: idPlace});

        persons.forEach((person) => {
            const personDepartment = {
                ...person.department,
            }

            // @ts-ignore
            delete person.department;

            personDepartment.staff = [person];

            const depIndex = departments.findIndex((dep) => dep.id === personDepartment.id);
            const dep = departments[depIndex];

            if (!dep) {
                // @ts-ignore
                departments.push(personDepartment);
                return;
            }
            dep.staff = [...dep.staff, ...personDepartment.staff];

            departments[depIndex] = dep;
        });
        setDepartments(departments);
    }, [setDepartments]);

    React.useEffect(() => {
        if (floorIndex && idPlace) {
            getDepartments({floorIndex, idPlace });
        }
    }, [floorIndex, idPlace ]);

    if (!departments.length) {
        return null;
    }

    return (
        <>
            {
                departments.map((department) => (
                    <Department 
                        key={department.id} 
                        department={department} 
                    />
                ))
            }
        </>
    );
};

export { DepartmentContainer };

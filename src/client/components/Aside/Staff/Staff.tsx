// @ts-nocheck
import { GroupedVirtuoso } from 'react-virtuoso';
import { useParams } from 'react-router-dom';
import { toast, ToastOptions } from 'react-toastify';
import React from 'react'
import { 
    ContainerStyled,
    DepartmentNameStyled,
} from './styles/staff.styled';
import { Person } from '../../../../common/components/Person/Person';
import { IParamsProps, toastOptions } from '../../app';
import { searchStaffByFloor } from '../../../IndexedDB/staff/searchStaff';
import { searchDepartmentsByFloor } from '../../../IndexedDB/departments/searchDepartments';
import { IDbDepartment } from '../../../IndexedDB/departments/loadDepartments';
import { mapAppDb } from '../../../IndexedDB';

type GroupContent = {
    name: string;
    level?: number;
    mapId?: string;
};

const Staff = (_props) => {
    const virtuoso = React.useRef(null)
    const { 
        floorIndex, 
        idPlace,
    } = useParams<IParamsProps>();

    const [departments, setDepartments] = React.useState<IDbDepartment[]>([]);

    const getDepartments = React.useCallback(async ({floorIndex }) => {
        let departments = await searchDepartmentsByFloor({level: floorIndex});
        
        departments = departments.map((dep) => {
            dep.staff = dep.staff.filter((person) => {

                if (!person.floor) {
                    return true;
                }

                return person.floor.toString() === floorIndex
            });
            
            return dep;
        });
        
        const persons = await searchStaffByFloor({level: floorIndex});
        // const existIds = [];

        persons.forEach((person) => {
            const personDepartment = {
                ...person.department,
                mapid: person?.department?.mapid ?? person.mapid,
            }
            
            delete person.department;

            personDepartment.staff = [person];

            const depIndex = departments.findIndex((dep) => dep.id === personDepartment.id);
            const dep = departments[depIndex];

            if (!dep) {
                // @ts-ignore
                departments.push(personDepartment);
                return;
            }
            const fullStaffArray =  [...dep.staff, ...personDepartment.staff];
            
            dep.staff = fullStaffArray;
            
            // dep.staff = fullStaffArray.filter((value) => {
            //     if (existIds.includes(value.id)) {
            //         return false
            //     }

            //     existIds.push(value.id);
            //     return true;
            // });

            departments[depIndex] = dep;
        });

        setDepartments(departments);
    }, [setDepartments]);

    React.useEffect(() => {
        getDepartments({floorIndex});
    }, [floorIndex]);

    React.useEffect(() => {
        const updateDepartments = () => getDepartments({floorIndex});

        mapAppDb.departments.hook('creating', updateDepartments);
        mapAppDb.departments.hook('updating', updateDepartments);
        mapAppDb.staff.hook('creating', updateDepartments);
        mapAppDb.staff.hook('updating', updateDepartments);

        return () => {
            mapAppDb.departments.hook('creating').unsubscribe(updateDepartments);
            mapAppDb.departments.hook('updating').unsubscribe(updateDepartments);
            mapAppDb.staff.hook('creating').unsubscribe(updateDepartments);
            mapAppDb.staff.hook('updating').unsubscribe(updateDepartments);
        };
    }, [floorIndex]);

    const [groupCounts, groupContent, persons] = React.useMemo(() => {
        if (!departments) {
            return [[0], [], []];
        }

        const departmentsCount: number[] = [];
        const departmentGroud: GroupContent[] = [];
        let persons = [];
        const existPersonId = [];

        departments.forEach((dep) => {
            const staff = dep.staff.filter((user) => {
                if (!user.floor || existPersonId.includes(user.id)) {
                    return false;
                }

                existPersonId.push(user.id);

                return true
            });
            departmentsCount.push(staff.length);
            departmentGroud.push({
                name: dep.name,
                mapId: dep.mapid,
                level: dep?.level?.fl
            });
            persons = persons.concat(staff);
        });

        return [departmentsCount, departmentGroud, persons];
    }, [departments]);

    React.useEffect(() => {
        if (!idPlace) {
            return;
        }

        let needIndex: number;

        const departments = [];

        groupContent.forEach((dep, i) => {
            if(dep?.mapId === idPlace) {
                if (!needIndex) {
                    needIndex = i;
                }

                departments.push(dep.name);
            };
        });

        if (!needIndex) {
            return;
        }

        toast(departments.join(', '), toastOptions as ToastOptions);

        const indexes = groupCounts
        .reduce(
          ({ firstItemsIndexes, offset }, count) => {
            return {
              firstItemsIndexes: [...firstItemsIndexes, offset],
              offset: offset + count,
            }
          },
          { firstItemsIndexes: [], offset: 0 });

          virtuoso.current.scrollToIndex({
            index: indexes.firstItemsIndexes[needIndex],
            align: "start",
            behavior: "smooth",
          });
    }, [idPlace, virtuoso, groupCounts, groupContent]);

    if (!persons.length) {
        return null;
    }

    return (
        <ContainerStyled>
             <GroupedVirtuoso
                ref={virtuoso}
                groupCounts={groupCounts}
                groupContent={index => {
                    const link = groupContent[index]?.level && groupContent[index]?.mapId ?
                        `/fl${groupContent[index]?.level}place${groupContent[index]?.mapId}` : 
                        '#';
                        
                    return (
                        <DepartmentNameStyled 
                            to={link}
                            $active={groupContent[index]?.mapId === idPlace || false}
                        >
                            {groupContent[index].name}
                        </DepartmentNameStyled>
                    )
                }}

                itemContent={index => {
                    if (persons[index]) {
                        return (
                            <Person
                                key={persons[index]?.id}
                                person={persons[index]}
                            />
                        )
                    }

                    return null;
                }}
            />
        </ContainerStyled>
    );
};

export { Staff };

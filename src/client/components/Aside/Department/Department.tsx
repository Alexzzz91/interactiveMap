import * as React from 'react';
import { useParams } from 'react-router-dom';
import { 
    ContainerStyled,
    DepartmentNameStyled,
    DepartmentStaffStyled,
} from './styles/department.styled';
import { Person } from '../../../../common/components/Person/Person';
import { IDbDepartment } from '../../../IndexedDB/departments/loadDepartments';

type IParamsProps = {
    idPlace?: string,
};

type IDepartmentProps = {
    department: IDbDepartment;
};

const Department: React.FC<IDepartmentProps> = ({ department }) => {
    const { idPlace } = useParams<IParamsProps>();

    const staff = React.useMemo(() => {
        return department.staff.filter((user, index, self) => {
            const isUnigue = self.findIndex((selfUser) => selfUser.username === user.username) === index;

            return (user.mapid || user.workplaceid) && isUnigue;
        })
    },
    [department]);

    return (
        <ContainerStyled>
            <DepartmentNameStyled active={department?.mapid === idPlace}>
                {department.name}
            </DepartmentNameStyled>

            <DepartmentStaffStyled>
                {staff.map((person) => (
                    <Person
                        key={person.id}
                        person={person}
                    />
                ))}
            </DepartmentStaffStyled>
        </ContainerStyled>
    );
};

export { Department };

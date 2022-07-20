import * as React from 'react';
import { Person } from '../../../../common/components/Person/Person';
import { UserData } from '../../../gql/usersGql';

import { 
    WorkplaceContainerStyled,
    DepartmentNameStyled,
} from './styles/wordplaceContainer';

type IProps = {
    persons: UserData[];
    isTooltip?: boolean;
}

const Workplace: React.FC<IProps> = ({ persons, isTooltip }) => {

    return (
        <>
            {persons.map((person) => (
                <WorkplaceContainerStyled key={person.id}>
                    {!!person?.department?.name && (
                        <DepartmentNameStyled isTooltip={isTooltip}>
                            {person.department.name}
                        </DepartmentNameStyled>
                    )}
                    <Person 
                        checked={true}
                        person={person}
                    />
                </WorkplaceContainerStyled>
            ))}
        </>
    );
};

export { Workplace };

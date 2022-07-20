// @ts-nocheck
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { searchStaffById, searchStaffByUserName } from '../../../IndexedDB/staff/searchStaff';
import { IParamsProps } from '../../app';
import { Person } from '../../../../common/components/Person/Person';
import { UserData } from '../../../gql/usersGql';

import { 
    PersonContainerStyled,
    DepartmentNameStyled,
    EmptyPlaceContainerStyled,
    EmptyPlaceNotiveStyled,
} from './styles/personContainer';

const PersonContainer: React.FC = () => {
    const { userId } = useParams<IParamsProps>();
    const [person, setPerson] = React.useState<UserData>(null);
    const [chief, setChief] = React.useState<UserData>(null);

    const getPerson = React.useCallback(async (userId) => {
        const person = await searchStaffById(userId);

        setPerson(person);
    }, [setPerson]);

    const getChief = React.useCallback(async (userId) => {
        const chief = await searchStaffByUserName(userId);

        setChief(chief);
    }, [setPerson]);

    React.useEffect(() => {
        getPerson(userId);
    }, [userId ]);

    React.useEffect(() => {
        if (!person || person.mapid) {
            return;
        }

        if (!person.chief) {
            return ;
        }

        // TODO: не понимаю в чем прикол, нужно время между запросами??
        // setTimeout(() => 
            getChief(person.chief)
        // , 500);
    }, [person ]);

    if (!person) {
        return null;
    }

    const emptyPlace = !person.mapid;

    return (
        <PersonContainerStyled>
            {!!person?.department?.name && (
                <DepartmentNameStyled>
                    {person.department.name}
                </DepartmentNameStyled>
            )}
            <Person 
                checked={true}
                person={person}
            />
            {emptyPlace && person.chief && (
                <EmptyPlaceContainerStyled>
                    <EmptyPlaceNotiveStyled>
                        У сотрудника нет места в офисе. Возможно он работает удалённо. Уточните у руководителя.
                    </EmptyPlaceNotiveStyled>
                    {chief && (
                        <Person 
                            checked={false}
                            person={chief}
                        />
                    )}
                </EmptyPlaceContainerStyled>
            )}
        </PersonContainerStyled>
    );
};

export { PersonContainer };

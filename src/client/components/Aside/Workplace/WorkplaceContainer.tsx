import * as React from 'react';
import { useParams } from 'react-router-dom';
import { searchStaffByFloorAndWorkplace } from '../../../IndexedDB/staff/searchStaff';
import { IParamsProps } from '../../app';
import { UserData } from '../../../gql/usersGql';

import { Workplace } from './Workplace';

const WorkplaceContainer: React.FC = () => {
    const [persons, setPersons] = React.useState<UserData[]>([]);

    const { floorIndex, idWorkplace } = useParams<IParamsProps>();

    const getPersons = React.useCallback(async ({floorIndex, idWorkplace }: {floorIndex: string, idWorkplace: string }) => {
        const persons = await searchStaffByFloorAndWorkplace({level: floorIndex, workplaceid: idWorkplace});

        setPersons(persons);
    }, [setPersons]);

    React.useEffect(() => {
        if (floorIndex && idWorkplace) {
            getPersons({floorIndex, idWorkplace });
        }
    }, [floorIndex, idWorkplace ]);

    return (
        <Workplace persons={persons}/>
    );
};

export { WorkplaceContainer };

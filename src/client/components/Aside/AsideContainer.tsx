import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
    moreUsersQuery,
    MoreUsersQueryData,
} from '../../gql/usersGql';
import { Loading } from '../../../common/components/Loading';
import { departmentsQuery, DepartmentsQueryData } from '../../gql/departmentsGql';
import { placesQuery, PlacesQueryData } from '../../gql/placesGql';
import { loadToDBDepartments } from '../../IndexedDB/departments/loadDepartments';
import { loadToDBStaff } from '../../IndexedDB/staff/loadStaff';
import { loadToDBPlaces } from '../../IndexedDB/places/loadPlaces';
import { Error } from '../../../common/components/Error';

const limit = 40;

// @ts-ignore
const AsideContainer = ({ children }) => {
    const { loading, error, data: usersData, fetchMore } = useQuery<MoreUsersQueryData>(moreUsersQuery, {
        variables: { limit },
    });

    React.useEffect(() => {
        if (!loading && !error && usersData?.moreUsers?.pageInfo?.hasNext) {
            fetchMore({
                variables: { 
                    limit,
                    cursor: usersData?.moreUsers?.pageInfo?.nextCursor,
                },
            });
        }
        if (!loading && !error && !usersData?.moreUsers?.pageInfo?.hasNext) {
            loadToDBStaff(usersData?.moreUsers?.results || []);
        }
    }, [loading, error, usersData, fetchMore]);

    const { 
        loading: departmentsLoading,
        error: departmentsError,
        data: departmentsData,
    } = useQuery<DepartmentsQueryData>(departmentsQuery);

    const { 
        loading: placesLoading,
        error: placesError,
        data: placesData,
    } = useQuery<PlacesQueryData>(placesQuery);

    React.useEffect(() => {
        if (!departmentsData || !departmentsData.departments) {
            return;
        }

        const { departments } = departmentsData;

        loadToDBDepartments(departments);
    }, [departmentsData]);

    React.useEffect(() => {
        if (!placesData || !placesData.places) {
            return;
        }

        const { places } = placesData;

        loadToDBPlaces(places);
    }, [placesData]);

    if (loading || departmentsLoading || placesLoading) {
        return (
            <Loading />
        );
    };

    if (error || departmentsError || placesError) {
        return (
            <Error />
        );
    };

    return children;
};

export { 
    AsideContainer,
};

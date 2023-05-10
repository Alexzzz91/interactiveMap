import * as React from 'react';
import { Main } from './Main';

import { useQuery } from '@apollo/react-hooks';
import { moreFloorQuery, FloorsQueryData } from '../../gql/floorGql';
import { Loading } from '../../../common/components/Loading';
import { Error } from '../../../common/components/Error';
import { addressQuery, AddressQueryData } from '../../gql/addressGql';

const MainContainer: React.FC = (_props) => {
  const { loading, error, data, fetchMore } = useQuery<FloorsQueryData>(moreFloorQuery, {
    variables: { limit: 1 },
  });

  React.useEffect(() => {
    if (!loading && !error && data?.moreFloors?.pageInfo?.hasNext) {
      fetchMore({
        variables: { 
          limit: 1,
          cursor: data?.moreFloors?.pageInfo?.nextCursor,
        },
      });
    }
  }, [loading, error, data, fetchMore]);

  if (loading || !data) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
        <Error />
    );
  }

  const { moreFloors } = data;

  return (
    <Main 
      floors={moreFloors?.results ?? []} 
    />
  );
};

export { MainContainer };

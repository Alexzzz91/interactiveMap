import React from 'react'
import { NewMain } from './NewMain';

import { useQuery } from '@apollo/react-hooks';
import { moreFloorQuery, FloorsQueryData } from '../../gql/floorGql';
import { Loading } from '../../../common/components/Loading';
import { Error } from '../../../common/components/Error';
import { ParamsContext } from '../app';

const MainContainer: React.FC = (_props) => {
  const { currentCity, currentAddress } = React.useContext(ParamsContext);

  const { loading, error, data, fetchMore, refetch } = useQuery<FloorsQueryData>(moreFloorQuery, {
    variables: { 
      limit: 1,
      city: currentCity,
      address: currentAddress,
    },
  });

  React.useEffect(() => {
    if (!loading && !error && data?.moreFloors?.pageInfo?.hasNext) {
      fetchMore({
        variables: { 
          limit: 1,
          cursor: data?.moreFloors?.pageInfo?.nextCursor,
          city: currentCity,
          address: currentAddress,
        },
      });
    }
  }, [loading, error, data, fetchMore, currentCity, currentAddress]);

  React.useEffect(() => {
    if (currentCity && currentAddress) {
      refetch({
        limit: 1,
        city: currentCity,
        address: currentAddress,
      });
    }
  }, [refetch, currentCity, currentAddress]);

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
    <NewMain floors={moreFloors?.results ?? []} />
  );
};

export { MainContainer };

// @ts-nocheck
import * as React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { floorByIndexQuery, FloorByIndexQueryData } from '../../gql/floorGql';
import { Loading } from '../../../common/components/Loading';
import { IParamsProps, ParamsContext } from '../app';
import { UploadFile } from './UploadFile';
import { editorAddRoute } from '../../../common/routerPaths';
import { initialLevel } from './initialLevel';
import { CityAddressRow } from '../common/CityAddressRow';

const Editor = React.lazy(() => import('./Editor'));

const defaultLayersName = {
  Common: 'Общий слой',
  Areas: 'Зоны',
  WorkPlaces: 'Рабочие столы',
  Posters: 'Постеры',
};

const EditorContainer: React.FC = () => {
  const { currentCity, currentAddress } = React.useContext(ParamsContext);
  const location = useLocation();
  // const { floorIndex } = useParams<IParamsProps>();
  const [searchParams] = useSearchParams();
  const floorIndex = searchParams.get("fl"); // is the string "Jonathan Smith".

  console.log('floorIndex', floorIndex)
  console.log('Number(floorIndex)', Number(floorIndex))

  const { loading, error, data, refetch } = useQuery<FloorByIndexQueryData>(floorByIndexQuery, {
    variables: { 
      index: floorIndex || '1',
      city: currentCity,
      address: currentAddress,
    }
  });

  React.useEffect(() => {
    if (currentCity && currentAddress) {
      refetch({
        index: floorIndex || '1',
        city: currentCity,
        address: currentAddress,
      });
    }
  }, [refetch, currentCity, currentAddress, floorIndex]);

  console.log('error', error);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return <p>Error :(</p>
  };

  // @ts-ignore
  const { floorByIndex } = data;

  if (!floorIndex && !location?.pathname.includes(editorAddRoute)) {
    return <UploadFile />
  }

  return (
    <React.Suspense fallback={<Loading />}>
      <CityAddressRow />
      <Editor 
        initialSvgContent={floorByIndex?.levelSchema || initialLevel} 
        currentCity={currentCity}
        currentAddress={currentAddress}
      />
    </React.Suspense>
  );
};

export { EditorContainer, defaultLayersName };

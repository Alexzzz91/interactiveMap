// @ts-nocheck
import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { floorByIndexQuery, FloorByIndexQueryData } from '../../gql/floorGql';
import { Loading } from '../../../common/components/Loading';
import { IParamsProps } from '../app';
import { UploadFile } from './UploadFile';
import { editorAddRoute } from '../../../common/routerPaths';
import { initialLevel } from './initialLevel';
import { CityAdressRow } from '../common/CityAdressRow';


const Editor = React.lazy(() => import('./Editor'));

const defaultLayersName = {
  Common: 'Общий слой',
  Areas: 'Зоны',
  WorkPlaces: 'Рабочие столы',
  Posters: 'Постеры',
};

const EditorContainer: React.FC = () => {
  const location = useLocation();
  const { floorIndex } = useParams<IParamsProps>();

  const { loading, error, data } = useQuery<FloorByIndexQueryData>(floorByIndexQuery, {
    variables: { 
      index: floorIndex || '1' 
    }
  });

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
      <CityAdressRow />
      <Editor initialSvgContent={floorByIndex?.levelSchema || initialLevel} />
    </React.Suspense>
  );
};

export { EditorContainer, defaultLayersName };

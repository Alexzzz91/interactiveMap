import React from 'react'

import { Level } from './Level/Level';
import { FloorData } from '../../gql/floorGql';
import { Loading } from '../../../common/components/Loading';

import { NewMainContainerStyled } from './styles/newmain.styled';

type MainProps = {
    floors: FloorData[]
};

const NewMain: React.FC<MainProps>  = ({ floors }) => {
  return (
    <React.Suspense fallback={<Loading />}>
        {floors?.[0] && (
          <NewMainContainerStyled>
            <Level
              key={floors[0].id}
              levelId={floors[0].id}
              level={1}
              activeLevel={1}
              svg={floors[0].levelSchema}
            />

            {/* {floorIndex && (
              <Legend />
            )} */}
          </NewMainContainerStyled>
        )}
      </React.Suspense>
  );
};

export { NewMain };

// @ts-nocheck
import * as React from 'react';

import { AddressRowContainer } from '../AddressSelect';
import { CityRowContainer } from '../CitySelect';

import { RowStyled } from './styles/cityAdressRow.styled';

const CityAdressRow: React.FC = () => {
  return (
      <RowStyled>
        <CityRowContainer />
        <AddressRowContainer />
      </RowStyled>
  );
};

export { CityAdressRow };

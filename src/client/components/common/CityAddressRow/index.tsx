// @ts-nocheck
import React from 'react'

import { AddressRowContainer } from '../AddressSelect';
import { CityRowContainer } from '../CitySelect';

import { RowStyled } from './styles/cityAddressRow.styled';

const CityAddressRow: React.FC = () => {
  return (
      <RowStyled>
        <CityRowContainer />
        <AddressRowContainer />
      </RowStyled>
  );
};

export { CityAddressRow };

import * as React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { addressQuery, AddressQueryData } from '../../../gql/addressGql';
import { 
  AddressSelectStyled,
  NoAddressMesageLinkStyled,
  NoAddressMesageStyled,
} from './styles/addressSelect.styled';

const AddressRowContainer: React.FC = (_props) => {
  const { data: addressData } = useQuery<AddressQueryData>(addressQuery);
 
  const handleSelectValue = React.useCallback((eventType: string) => {
    console.log(eventType)
  }, []);

  return (
    <>
        {!addressData?.addresses.length && !addressData?.addresses[0] && (
          <>
            <NoAddressMesageStyled>
                Нет адреса, <NoAddressMesageLinkStyled> Добавить адрес? </NoAddressMesageLinkStyled>
            </NoAddressMesageStyled>
          </>
        )}
        {!!addressData?.addresses.length && (
            <AddressSelectStyled
                // value={address?.addresses[0].name}
                onChange={handleSelectValue}
                name={addressData?.addresses[0].name}
                placeholder='Тип события'
                items={addressData?.addresses.map((address) => ({title: address.name, value: address.id}))}
            />
        )}
    </>
  );
};

export { AddressRowContainer };

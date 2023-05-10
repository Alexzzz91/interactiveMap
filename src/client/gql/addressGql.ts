import gql from 'graphql-tag';
import { CityData } from './cityGql';

const addressQuery = gql`
    query GetAddresses {
        addresses {
            id
            name
            textDescription
            city {
                id
            }
        }
    }
`;

const createAddress = gql`
  mutation CreateAddress(
    $name: String!, 
    $textDescription: String!,
    $city: String!,
  ) {
    createAddress(
      name: $name,
      textDescription: $textDescription,
      city: $city,
    ) {
      id
      name
      textDescription
      city {
        id
        name
      }
    }
  }
`;

interface AddressData {
    __typename: 'Address';
    id: string;
    name: string;
    textDescription?: string;
    city?: CityData;
}
  
interface AddressQueryData {
    addresses: AddressData[];
}

export {
    addressQuery,
    createAddress,
};

export type {
    AddressData,
    AddressQueryData,
};
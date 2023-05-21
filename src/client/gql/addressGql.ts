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

const getAddressesByCity = gql`
  query GetAddressesByCity($city: String) {
    getAddressesByCity( city: $city) {
      id
      name
      textDescription
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

interface GetAddressesByCityQueryData {
    getAddressesByCity: AddressData[];
}

export {
    addressQuery,
    createAddress,
    getAddressesByCity,
};

export type {
    AddressData,
    AddressQueryData,
    GetAddressesByCityQueryData,
};
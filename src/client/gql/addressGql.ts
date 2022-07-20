import gql from 'graphql-tag';

const addressQuery = gql`
    query GetAddresses {
        addresses {
            id
            name
            textDescription
        }
    }
`;

interface AddressData {
    __typename: 'Address';
    id: string;
    name: string;
    textDescription?: string;
}
  
interface AddressQueryData {
    addresses: AddressData[];
}

export {
    addressQuery,
};

export type {
    AddressData,
    AddressQueryData,
};
import gql from 'graphql-tag';

const cityQuery = gql`
    query GetCities {
        cities {
            id
            name
            textDescription
        }
    }
`;

const createCity = gql`
  mutation CreateCity(
    $name: String!, 
    $textDescription: String!,
  ) {
    createCity(
      name: $name,
      textDescription: $textDescription,
    ) {
      id
      name
      textDescription
    }
  }
`;

interface CityData {
    __typename: 'City';
    id: string;
    name: string;
    textDescription?: string;
}
  
interface CityQueryData {
    cities: CityData[];
}

export {
    cityQuery,
    createCity,
};

export type {
    CityData,
    CityQueryData,
};

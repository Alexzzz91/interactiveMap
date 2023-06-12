import gql from 'graphql-tag';

const floorQuery = gql`
{
  floors {
    id
    name
    fl
    levelSchema
  }
}
`;

const moreFloorQuery = gql`
  query MoreFloors($cursor: String, $limit: Int!, $city: String, $address: String) {
    moreFloors(cursor: $cursor, limit: $limit, city: $city, address: $address) {
      results {
        id
        name
        fl
        levelSchema
      }
      pageInfo {
        hasNext
        nextCursor
      }
    }
  }
`;

const floorByIndexQuery = gql`
  query FloorByIndex($index: String!, $city: String, $address: String) {
    floorByIndex(index: $index, city: $city, address: $address) {
      levelSchema
    }
  }
`;

const updateLevelSchema = gql`
  mutation UpdateLevelSchema($index: String!, $levelSchema: String!, $name: String, $city: String, $address: String) {
    updateLevelSchema(index: $index, levelSchema: $levelSchema, name: $name, city: $city, address: $address) {
      id
      name
      fl
      levelSchema
    }
  }
`;

interface FloorData {
  __typename: 'Floor';
  id: string;
  name: string;
  fl: number;
  levelSchema: string;
}

interface FloorsQueryData {
  moreFloors: {
    pageInfo: {
      hasNext: boolean;
      nextCursor?: string;
    },
    results: FloorData[];
  }
}

interface FloorByIndexQueryData {
  floorByIndex: FloorData;
}

export {
  floorQuery,
  moreFloorQuery,
  floorByIndexQuery,
  updateLevelSchema,
}

export type {
  FloorData,
  FloorsQueryData,
  FloorByIndexQueryData,
}
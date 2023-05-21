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
  query FloorByIndex($index: String!) {
    floorByIndex(index: $index) {
      levelSchema
    }
  }
`;


const updateLevelSchema = gql`
  mutation updateLevelSchema($index: String!, $levelSchema: String!, $name: String) {
    updateLevelSchema(index: $index, levelSchema: $levelSchema, name: $name) {
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
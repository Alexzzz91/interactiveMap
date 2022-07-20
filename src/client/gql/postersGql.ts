import gql from 'graphql-tag';
import { FloorData } from './floorGql';

const posterQuery = gql`
    query GetPosters {
        posters {
            id
        }
    }
`;

const updateOrCreatePoster = gql`
  mutation UpdateOrCreatePoster($id: String, $name: String!, $floorIndex: String!, $posterid: String!, $image: String, $textDescription: String) {
    updateOrCreatePoster(id: $id, name: $name, floorIndex: $floorIndex, posterid: $posterid, image: $image, textDescription: $textDescription) {
        id
        name
        textDescription
        image
        posterid
        textDescription
        level {
            id
            fl
        }
    }
  }
`;

interface PosterData {
    __typename: 'Poster';
    id: string;
    name: string;
    textDescription?: string;
    image: string;
    posterid: number;
    level?: FloorData; 
}
  
interface PosterQueryData {
    posters: PosterData[];
}

export {
    posterQuery,
    updateOrCreatePoster,
};

export type {
    PosterData,
    PosterQueryData,
};
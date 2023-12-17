import gql from 'graphql-tag';
import { FloorData } from './floorGql';
import { placesType } from '../../common/commonValues';

type PlacesType = keyof typeof placesType;

const placesQuery = gql`
{
    places {
        id
        name
        mapid
        image
        location
        type
        showCapacity
        capacity
        hasTv
        hasWindowsPc
        hasTable
        hasAppleTv
        hasBoard
        hasCoffeeMachine
        hasMicrowave
        hasFridge
        hasSink
        hasArmchair
        hasChair
        hasCooler
        textDescription
        level {
            id
            fl
        }
    }
} 
`;

const updateOrCreatePlace = gql`
    mutation UpdateOrCreatePlace(
        $id: String, 
        $name: String!, 
        $floorIndex: String!, 
        $mapid: String!, 
        $image: String, 
        $textDescription: String, 
        $type: String!,
        $showCapacity: Boolean,
        $capacity: String,
        $hasTv: Boolean,
        $hasWindowsPc: Boolean,
        $hasTable: Boolean,
        $hasAppleTv: Boolean,
        $hasBoard: Boolean,
        $hasCoffeeMachine: Boolean,
        $hasMicrowave: Boolean,
        $hasFridge: Boolean,
        $hasSink: Boolean,
        $hasArmchair: Boolean,
        $hasChair: Boolean,
        $hasCooler: Boolean
    ) {
        updateOrCreatePlace(
            id: $id,
            name: $name, 
            floorIndex: $floorIndex, 
            mapid: $mapid, 
            image: $image, 
            textDescription: $textDescription, 
            type: $type,
            showCapacity: $showCapacity,
            capacity: $capacity,
            hasTv: $hasTv,
            hasWindowsPc: $hasWindowsPc,
            hasTable: $hasTable,
            hasAppleTv: $hasAppleTv,
            hasBoard: $hasBoard,
            hasCoffeeMachine: $hasCoffeeMachine,
            hasMicrowave: $hasMicrowave,
            hasFridge: $hasFridge,
            hasSink: $hasSink,
            hasArmchair: $hasArmchair,
            hasChair: $hasChair,
            hasCooler: $hasCooler
        ) {
            id
            name
            mapid
            image
            showCapacity
            capacity
            type
            textDescription
            capacity
            hasTv
            hasWindowsPc
            hasTable
            hasAppleTv
            hasBoard
            hasCoffeeMachine
            hasMicrowave
            hasFridge
            hasSink
            hasArmchair
            hasChair
            hasCooler
            level {
                id
                fl
            }
        }
    }
`;

const placeUploadImage = gql`
    mutation PlaceUploadImage($file: Upload!) {
        placeUploadImage(file: $file) {
            filename
            mimetype
            encoding
            url
        }
    }
`;

const deletePlace = gql`
    mutation DeletePlace($id: String!) {
        deletePlace(id: $id)
    }
`;


interface PlaceData {
    __typename: 'Place';
    id: string;
    name: string;
    mapid?: number;
    image?: string;
    location?: string;
    showCapacity?: boolean;
    capacity?: number;
    type?: PlacesType;
    hasTv?: boolean;
    hasWindowsPc?: boolean;
    hasTable?: boolean;
    hasAppleTv?: boolean;
    hasBoard?: boolean;
    hasCoffeeMachine?: boolean;
    hasMicrowave?: boolean;
    hasFridge?: boolean;
    hasSink?: boolean;
    hasArmchair?: boolean;
    hasChair?: boolean;
    hasCooler?: boolean;
    level?: FloorData; 
    textDescription?: string;
}

interface PlacesQueryData {
    places: PlaceData[];
}

export {
    placesQuery,
    updateOrCreatePlace,
    placeUploadImage,
    deletePlace,
}

export type {
    PlaceData,
    PlacesQueryData,
}
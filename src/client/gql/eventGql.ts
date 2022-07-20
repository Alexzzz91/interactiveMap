import gql from 'graphql-tag';
import { UserData } from './usersGql';

const eventsQuery = gql`
  query GetEvents {
    events {
      id
      name
      location
      mapid
      workplaceid
      description
      eventType
      lastActiveAt
      isActual
      floorIndex
      author
    }
  }
`;

const eventSubscription = gql`
  subscription OnEventCreated {
    eventCreated {
      id
      name
      location
      mapid
      workplaceid
      description
      eventType
      lastActiveAt
      isActual
      floorIndex
      author
    }
  }
`;

const createEvent = gql`
  mutation CreateEvent(
    $name: String!, 
    $location: String!,
    $mapid: String,
    $workplaceid: String,
    $description: String!,
    $eventType: String!,
    $floorIndex: String,
    $author: String,
  ) {
    createEvent(
      name: $name,
      location: $location,
      mapid: $mapid,
      workplaceid: $workplaceid,
      description: $description,
      eventType: $eventType,
      floorIndex: $floorIndex,
      author: $author,
    ) {
      id
      name
      location
      mapid
      workplaceid
      description
      eventType
      lastActiveAt
      isActual
      floorIndex
      author
    }
  }
`;


interface EventData {
  __typename: 'Event';
  id: string;
  name: string;
  location: string;
  mapid: number;
  workplaceid: string;
  description: string;
  author: string;
  user: UserData[];
  lastActiveAt: string;
  eventType: string;
  isActual: boolean;
  floorIndex: string; 
}

export type {
  EventData,
}

export {
  eventsQuery,
  eventSubscription,
  createEvent,
}
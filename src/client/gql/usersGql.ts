import gql from 'graphql-tag';
import { DepartmentData } from './departmentsGql';

const usersQuery = gql`
  query usersQuery {
    users {
      id
      name
      department {
        id
        mapid
        name
      }
      avatar
      username
      position
      chief
      mapid
      workplaceid
      isRemote
      isChief
      birthday
      entryDate
      vacationDates
      floor
    }
  }
`;

const moreUsersQuery = gql`
  query MoreUsers($cursor: String, $limit: Int!) {
    moreUsers(cursor: $cursor, limit: $limit) {
      results {
        id
        name
        department {
          id
          mapid
          name
        }
        avatar
        username
        position
        chief
        mapid
        workplaceid
        isRemote
        isChief
        birthday
        entryDate
        vacationDates
        floor
      }
      pageInfo {
        hasNext
        nextCursor
      }
    }
  }
`;

const userByNameQuery = gql`
  query userByName($username: String!) {
    userByName(username: $username) {
      id
      name
      avatar
      department {
        id
        mapid
        name
        level {
          id
          fl
        }
      }
      mapid
      vacationLeft
      workplaceid
      isChief
      floor
    }
  }
`;

const userSetMapId = gql`
  mutation UserSetMapId($id: String!, $mapid: String, $workplaceid: String) {
    userSetMapId(id: $id, mapid: $mapid, workplaceid: $workplaceid) {
      id
      mapid
      workplaceid
    }
  }
`;

const userSetFloor = gql`
  mutation UserSetFloor($id: String!, $floor: Int!) {
    userSetFloor(id: $id, floor: $floor) {
      id
      floor
    }
  }
`;

const updateUser = gql`
  mutation UpdateUser($id: String!, $floorIndex: String!, $mapid: String, $workplaceid: String) {
    updateUser(id: $id, floor: $floorIndex, mapid: $mapid, workplaceid: $workplaceid) {
        id
        name
        department {
          id
          mapid
          name
          level {
            id
            fl
          }
        }
        avatar
        username
        position
        mapid
        workplaceid
        floor
    }
  }
`;

const removeUserWorkplaceId = gql`
  mutation RemoveUserWorkplaceId($id: String!) {
    removeUserWorkplaceId(id: $id)
  }
`;

const removeUserMapId = gql`
  mutation RemoveUserMapId($id: String!) {
    removeUserMapId(id: $id)
  }
`;

const createFCMToken = gql`
  mutation CreateFCMToken($id: String!,  $token: String!) {
    createFCMToken(id: $id, token: $token) {
      id
    }
  }
`;

interface UserData {
    __typename: 'User';
    id: string;
    name: string;
    department: DepartmentData;
    avatar?: string; 
    username: string;
    position: string;
    chief?: string;
    isRemote: boolean;
    isChief: boolean;
    floor: number;
    birthday?: string;
    entryDate?: string;
    vacationDates?: string;
    vacationLeft?: number;
    mapid?: string;
    workplaceid?: string;
}
  
interface UsersQueryData {
  users: UserData[];
}

interface MoreUsersQueryData {
  moreUsers: {
    pageInfo: {
      hasNext: boolean;
      nextCursor?: string;
    },
    results: UserData[];
  }
}

export {
    usersQuery,
    moreUsersQuery,
    userByNameQuery,
    userSetMapId,
    userSetFloor,
    updateUser,
    removeUserWorkplaceId,
    removeUserMapId,
    createFCMToken,
};

export type {
  UserData,
  UsersQueryData,
  MoreUsersQueryData,
};
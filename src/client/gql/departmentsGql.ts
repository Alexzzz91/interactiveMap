import gql from 'graphql-tag';
import { FloorData } from './floorGql';
import { UserData } from './usersGql';

const departmentsQuery = gql`
  {
    departments {
      id
      name
      division
      mapid
      level {
        id
        fl
      }
      staff {
        id
        name
        avatar
        name
        email
        position
        username
        mapid
        workplaceid
        floor
        isRemote
      }
    }
  }
`;

const departmentSetMapId = gql`
  mutation DepartmentSetMapId($id: String!, $mapid: String!, $floorIndex: Number) {
    departmentSetMapId(id: $id, mapid: $mapid, floorIndex: $floorIndex) {
      id
      mapid
      level
    }
  }
`;

const updateDepartment = gql`
  mutation UpdateDepartment($id: String!, $mapid: String!, $floorIndex: String!) {
    updateDepartment(id: $id, mapid: $mapid, floorIndex: $floorIndex) {
      id
      mapid
      level {
        id
        fl
      }
    }
  }
`;

interface DepartmentData {
  __typename: 'Department';
  id: string;
  name: string;
  division?: string; 
  mapid?: string;
  level: FloorData; 
  username: string;
  staff: UserData[];
}

interface DepartmentsQueryData {
  departments: DepartmentData[];
}

export {
  departmentsQuery,
  departmentSetMapId,
  updateDepartment,
}

export type {
  DepartmentData,
  DepartmentsQueryData,
}
import React from 'react';
import renderer from 'react-test-renderer';
import { UserData } from '../../../../gql/usersGql';
import { SearchItem } from './SearchItem';

test('SearchItem has coorect link', () => {

  const testData: UserData = {
    __typename: 'User',
    id: 'best_1337',
    name: 'testname',
    department: {
      __typename: 'Department',
      id: 'string',
      name: 'string',
      level: {
        __typename: 'Floor',
        id: 'string',
        name: 'string',
        fl: 5,
        levelSchema: 'string',
      },
      username: 'string',
      staff: [],
    },
    avatar: 'testnameAvatar',
    username: 'testPsername',
    position: 'testPosition',
    chief: 'abelikov',
    isRemote: false,
    isChief: false,
    floor: 5,
    mapid: '7',
    workplaceid: '1337',
  };


  const tree = renderer
    .create(
      <SearchItem 
        onClick={() => {}}
        data={testData}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
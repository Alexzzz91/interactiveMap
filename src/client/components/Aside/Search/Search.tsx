import React from 'react'
import { UserData } from '../../../gql/usersGql';
import { Search } from '../../../services/search';
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchItem } from "./SearchItem/SearchItem";
import { getStaff } from '../../../IndexedDB/staff/searchStaff';
import { throttle } from '../../../../common/utils/throttle';

import {
    SearchStyled,
    ListStyled
} from './styles/search.styled';
import { mapAppDb } from '../../../IndexedDB';

const SearchBlock: React.FC = () => {
  const [users, setUsers] = React.useState<UserData[]>([]);

  const getUsers = React.useCallback(async () => {
      const persons = await getStaff();

      setUsers(persons);
  }, [setUsers]);

  React.useEffect(() => {
    const debounceGetUsers = throttle(() => getUsers(), 2000);
    mapAppDb.staff.hook('creating', debounceGetUsers);
    mapAppDb.staff.hook('updating', debounceGetUsers);
    getUsers();
      
    return () => {
      mapAppDb.staff.hook('creating').unsubscribe(debounceGetUsers);
      mapAppDb.staff.hook('updating').unsubscribe(debounceGetUsers);
    };
  }, [getUsers]);

  const [searchResult, setSearchResult] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const search = React.useMemo(() => new Search(users), [users]);

  const handleSearchClick = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(event.target.value);

    if (!value) {
      return setSearchResult([]);
    }

    search.search(event.target.value).then((results) => {
      if (results.length > 15) {
        console.log('results', results);
      }

      setSearchResult(results);
    })
  }, [search, setSearchResult, setSearchValue]);

  const handleClearClick = React.useCallback(() => {
    setSearchValue('');
    setSearchResult([]);
  }, [setSearchValue]);

  return (
    <SearchStyled focused={!!searchValue}>
        <SearchInput
          handleSearchClick={handleSearchClick}
          handleClearClick={handleClearClick}
          searchValue={searchValue}
        />

        <ListStyled>
          {searchResult.map((foundItem: UserData) => (
            <SearchItem
                key={foundItem.id}
                onClick={handleClearClick}
                data={foundItem}
            />
          ))}
        </ListStyled>
    </SearchStyled>
  );
};

export { SearchBlock };

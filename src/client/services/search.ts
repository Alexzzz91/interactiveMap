// @ts-ignore
import levenshtein from 'damerau-levenshtein';
import { UserData } from "../gql/usersGql";
import { searchDepartmentsByName } from '../IndexedDB/departments/searchDepartments';
import { searchPlacesByName } from '../IndexedDB/places/searchPlaces';

class Search {
  users: UserData[];
  resultsCount = 10;

  private PERCENTAGE_OF_SIMILARITY = 0.72;

  constructor(users: UserData[], params?: {
    resultsCount: number,
  }) {
    this.users = users;

    if (params?.resultsCount) {
      this.resultsCount = params.resultsCount;
    }
  }

  search = async (keyString: string) => {
    const targetUserList = keyString.split(' ')
                                    .map((item) => this.findMostSuitableUsers(item));

    let mostSimilarList = targetUserList[0];

    if (targetUserList.length > 1) {
      for (let i = 1; i < targetUserList.length; i++) {
        if (targetUserList[i].length !== 0 && targetUserList[i].length < mostSimilarList.length ||
            mostSimilarList.length === 0 && targetUserList[i].length > 0
        ) {
          mostSimilarList = targetUserList[i];
        }
      }
    }

    let res =  mostSimilarList.reduce((acc, item) => {
      // @ts-ignore
      acc.push(item.user);

      return acc;
    }, []);

    if (res.length) {
      return res;
    }

    // @ts-ignore
    res = await searchPlacesByName(keyString);

    if (res.length) {
      return res.splice(res.length - this.resultsCount);
    }
    
    // @ts-ignore
    res = await searchDepartmentsByName(keyString);

    if (res.length) {
      return res.splice(res.length - this.resultsCount);
    }

    return [];
  }

  // @ts-ignore
  private getMostSimilarKey = (searchWordOptions)  => {
    if (searchWordOptions.length === 1) {
      return searchWordOptions[0];
    }

    let mostSuitableOption = searchWordOptions[0];

    for (let i = 1; i < searchWordOptions.length; i++) {
      if (searchWordOptions[i].similarity > mostSuitableOption.similarity) {
        mostSuitableOption = searchWordOptions[i];
      }
    }

    return mostSuitableOption;
  }

  private findMostSuitableUsers = (keyString: string) => {
    // @ts-ignore
    const targetUserList = this.users.reduce((acc, item) => {
      let searchKey = keyString;
      let kitOfSearchingKeys = item.name.split(' ');

      if (item.username) {
        kitOfSearchingKeys.push(item.username);
      }

      const searchWordOptions = kitOfSearchingKeys.map((key) => {
        const searchingPartOfWord = key.substr(0, searchKey.length + 1)
                                       .toLowerCase();

        return levenshtein(searchingPartOfWord, searchKey.toLowerCase());
      });

      const user = this.getMostSimilarKey(searchWordOptions);

      if (user.similarity >= this.PERCENTAGE_OF_SIMILARITY) {
        acc.push({
          // @ts-ignore
          user: item,
          ...user,
        });
      }

      return acc;
    }, []);

    // @ts-ignore
    targetUserList.sort((a, b) => b.similarity - a.similarity);
    targetUserList.splice(this.resultsCount, targetUserList.length - this.resultsCount);

    // @ts-ignore
    return targetUserList;
  };
}

export { Search };

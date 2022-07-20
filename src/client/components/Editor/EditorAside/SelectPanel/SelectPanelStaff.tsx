// @ts-nocheck
import * as React from 'react';
import { Virtuoso } from 'react-virtuoso';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { Person } from '../../../../../common/components/Person/Person';
import {
    removeUserMapId,
    removeUserWorkplaceId,
    updateUser,
    UserData,
} from '../../../../gql/usersGql';
import {
    getStaff,
    searchStaffByFloorAndPlace,
    searchStaffByFloorAndWorkplace,
} from '../../../../IndexedDB/staff/searchStaff';
import {
    SelectPanelStyled,
    ListContainerStyled,
    HeaderStyled,
    FooterStyled,
    ButtonStyled,
} from './styles/selectPanel.styled';
import { FastSearch } from '../FastSearch/FastSearch';
import { Search } from '../../../../services/search';
import { toastOptions } from '../../../app';

type Props = {
    floorIndex: string;
    mapid?: string;
    workplaceid?: string; 
    onCloseClick(): void;
    disableModeScreen: boolean;
}

const SelectPanelStaff: React.FC<Props> = (props) => {
    const { 
        onCloseClick,
        disableModeScreen,
        floorIndex,
        mapid,
        workplaceid,
    } = props;
    const [searchValue, setSearchValue] = React.useState('');
    const initialCheckedIds = React.useRef({});
    const [checked, setChecked] = React.useState({});

    const virtuoso = React.useRef(null);
    const [persons, setPersons] = React.useState<UserData[]>([]);
    const [searchResult, setSearchResult] = React.useState(persons);

    const [updateUserMutation] = useMutation(updateUser);
    const [removeWorkplaceIdMutation] = useMutation(removeUserWorkplaceId);
    const [removeMapIdMutation] = useMutation(removeUserMapId);

    const getPersons = React.useCallback(async (args) => {
        const {
            floorIndex,
            mapid,
            workplaceid
        } : {
            floorIndex: string;
            mapid?: string;
            workplaceid?: string;
        } = args;

        let personsOnWorkplace = [];
        let personsOnPlace = [];

        if (workplaceid && !mapid) {
            personsOnWorkplace = await searchStaffByFloorAndWorkplace({level: floorIndex, workplaceid});
        }

        if (!workplaceid && mapid) {
            personsOnPlace = await searchStaffByFloorAndPlace({level: floorIndex, mapid});
        }

        const checkedIds = {};
        const existPersons = [].concat(personsOnWorkplace).concat(personsOnPlace);

        existPersons.forEach((person) => {
            checkedIds[person.id] = true;
        });

        let persons = (await getStaff())
            .filter((person) => !checkedIds[person.id])
            .sort((aPerson, bPerson) => {
                if (!aPerson.name) {
                    return 1;
                }

                if(aPerson.name < aPerson.name) { 
                    return -1; 
                }
                if(aPerson.name > bPerson.name) { 
                    return 1; 
                }
                return 0;
            });

        persons = existPersons.concat(persons);

        setPersons(persons);
        setSearchResult(persons);
        setChecked(checkedIds);
        initialCheckedIds.current = checkedIds;
    }, [setPersons, setSearchResult, setChecked]);

    const search = React.useMemo(() => new Search(persons, {resultsCount: 20}), [persons]);

    const handleSearchClick = React.useCallback((value: string) => {
        setSearchValue(value);

        if (!value) {
            return setSearchResult(persons);
          }
      
          search.search(value).then((results) => {
            setSearchResult(results);
          })
      }, [setSearchValue, setSearchResult, persons]);

    React.useEffect(() => {
        getPersons({floorIndex, mapid, workplaceid});
    }, [floorIndex, mapid, workplaceid]);

    const handleChecked = React.useCallback((id) => {
        setChecked((prevState) => ({
            ...prevState,
            // @ts-ignore
            [id]: !prevState[id],
        }));
    }, [setChecked]);

    const handleClearClick = React.useCallback(() => onCloseClick(), [onCloseClick]);

    const handleClickSave = React.useCallback(() => {
        const ids = Object.entries(checked).map(([id, value]) => {
            if (value) {
                return id;
            }}
        ).filter(Boolean);

        ids.forEach((id) => {
            updateUserMutation({
                variables: {
                    id,
                    mapid,
                    floorIndex,
                    workplaceid,
                }
            }).then(() => {
                setChecked({});
                // @ts-ignore
                toast.info(`Изменение сохранено`, toastOptions);
            })
        });

        const idsForRemoveRelation = Object.keys(initialCheckedIds.current).filter((key) => !checked[key]);
        idsForRemoveRelation.forEach((id) => {
            if (mapid && !workplaceid) {
                removeMapIdMutation({
                    variables: {
                        id,
                    }
                });
            } else if (!mapid && workplaceid) {
                removeWorkplaceIdMutation({
                    variables: {
                        id,
                    }
                });
            }
        });
    }, [
        checked,
        setChecked,
        updateUserMutation,
        removeWorkplaceIdMutation,
        removeMapIdMutation,
        floorIndex,
        mapid,
        workplaceid,
    ]);

    const hideFooter = !Object.values(checked).filter(Boolean).length;

    return (
        <SelectPanelStyled>
            <HeaderStyled >
                <FastSearch 
                    searchValue={searchValue}
                    handleSearchClick={handleSearchClick}
                    handleClearClick={handleClearClick}
                    disableModeScreen={disableModeScreen}
                />
            </HeaderStyled>
            <ListContainerStyled>
                <Virtuoso
                    data={searchResult}
                    ref={virtuoso}
                    itemContent={(index, person) => (
                        <Person 
                            key={person.id + index}
                            person={person}
                            // @ts-ignore
                            checked={!!checked[person?.id]}
                            onChecked={handleChecked}
                            hideCopyLink={true}
                        />
                    )}
                />
            </ListContainerStyled>
            <FooterStyled hide={hideFooter}>
                <ButtonStyled onClick={handleClickSave}>
                    Сохранить
                </ButtonStyled>
            </FooterStyled>
        </SelectPanelStyled>
    );
};

export { 
    SelectPanelStaff
};

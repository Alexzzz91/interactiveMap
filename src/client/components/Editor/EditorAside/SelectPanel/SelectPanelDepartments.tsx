// @ts-nocheck
import * as React from 'react';
import { Virtuoso } from 'react-virtuoso';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import {
    getDepartments,
    searchDepartmentsByFloorAndPlace,
} from '../../../../IndexedDB/departments/searchDepartments';
import {
    SelectPanelStyled,
    ListContainerStyled,
    HeaderStyled,
    FooterStyled,
    ButtonStyled,
} from './styles/selectPanel.styled';
import { ButtonType } from './GroupButton/GroupButton';
import { FastSearch } from '../FastSearch/FastSearch';
import { Search } from '../../../../services/search';
import { toastOptions } from '../../../app';
import { CustomResultItem } from './CustomResultItem/CustomResultItem';
import { IDbDepartment } from '../../../../IndexedDB/departments/loadDepartments';
import { updateDepartment } from '../../../../gql/departmentsGql';

type Props = {
    mode: ButtonType;
    mapid: number;
    floorIndex: number;
    onCloseClick(): void;
}

const SelectPanelDepartments: React.FC<Props> = (props) => {
    const { onCloseClick, mapid, floorIndex } = props;
    const [searchValue, setSearchValue] = React.useState('');
    
    const [checked, setChecked] = React.useState({});

    const virtuoso = React.useRef(null);
    const [departments, setDepartments] = React.useState<IDbDepartment[]>([]);
    const [searchResult, setSearchResult] = React.useState(departments);

    const [updateDepartmentMutation] = useMutation(updateDepartment);

    const getDeps = React.useCallback(async (args) => {
        const {
            floorIndex,
            mapid
        } : {
            floorIndex: string;
            mapid?: string
        } = args;

        let depsOnPlace: IDbDepartment[] = [];

        if (mapid) {
            depsOnPlace = await searchDepartmentsByFloorAndPlace({level: floorIndex, mapid});
        }

        const checkedIds = {};

        depsOnPlace.forEach((dep) => {
            checkedIds[dep.id] = true;
        });

        let departments: IDbDepartment[] = (await getDepartments())
            .filter((dep: IDbDepartment) => !checkedIds[dep.id])
            .sort((aDep: IDbDepartment, bDep: IDbDepartment) => {
                if(aDep.name < bDep.name) { 
                    return -1; 
                }

                if(aDep.name > bDep.name) { 
                    return 1; 
                }

                return 0;
            });

        departments = depsOnPlace.concat(departments);

        setDepartments(departments);
        setSearchResult(departments);
        setChecked(checkedIds);
    }, [setDepartments, setSearchResult, setChecked]);

    const search = React.useMemo(() => new Search(departments, {resultsCount: 20}), [departments]);

    const handleSearchClick = React.useCallback((value: string) => {
        setSearchValue(value);

        if (!value) {
            return setSearchResult(departments);
          }
      
          search.search(value).then((results) => {
            setSearchResult(results);
          })
      }, [setSearchValue, setSearchResult, departments]);

    React.useEffect(() => {
        getDeps({ floorIndex, mapid });
    }, [floorIndex, mapid]);

    const handleChecked = React.useCallback((id) => {
        setChecked((prevState) => ({
            ...prevState,
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
            updateDepartmentMutation({
                variables: {
                    id,
                    mapid,
                    floorIndex,
                }
            }).then(() => {
                setChecked({});
                // @ts-ignore
                toast.info(`Изменение сохранено`, toastOptions);
            })
        });
    }, [
        checked, 
        setChecked, 
        updateDepartmentMutation, 
        mapid, 
        floorIndex,
    ]);

    const hideFooter = !Object.values(checked).filter(Boolean).length;

    return (
        <SelectPanelStyled>
            <HeaderStyled >
                <FastSearch 
                    searchValue={searchValue}
                    handleSearchClick={handleSearchClick}
                    handleClearClick={handleClearClick}
                />
            </HeaderStyled>
            <ListContainerStyled>
                <Virtuoso
                    data={searchResult}
                    ref={virtuoso}
                    itemContent={(index, department) => (
                        <CustomResultItem
                            key={department.id + index}
                            onClick={handleChecked}
                            value={department.id}
                            caption={department.name}
                            checked={!!checked[department.id]}
                            subCaption={department.division}
                            withCheckbox={true}
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
    SelectPanelDepartments
};

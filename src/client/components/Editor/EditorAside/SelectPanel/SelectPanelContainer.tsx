// @ts-nocheck
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { GroupButton, ButtonType } from './GroupButton/GroupButton';
import { SelectPanelDepartments } from './SelectPanelDepartments';
import { SelectPanelPlaces } from './SelectPanelPlaces';
import { SelectPanelStaff } from './SelectPanelStaff';
import { IParamsProps } from '../../../app';

import { searchDepartmentsByFloorAndPlace } from '../../../../IndexedDB/departments/searchDepartments';
import { IDbDepartment } from '../../../../IndexedDB/departments/loadDepartments';
import { searchStaffByFloorAndPlace } from '../../../../IndexedDB/staff/searchStaff';
import { searchPlacesByFloorAndPlace } from '../../../../IndexedDB/places/searchPlaces';
import { IDbPlace } from '../../../../IndexedDB/places/loadPlaces';
import { UserData } from '../../../../gql/usersGql';
import { placesType } from '../../../../../common/commonValues';
import { PlaceList } from './PlaceList';

import { GroupButtonListStyled, NoActionsStyled } from './styles/selectPanelContainer.styled';

type Props = {
    currentElem: any;
}

const SelectPanelContainer: React.FC<Props> = ({ currentElem }) => {
    const { floorIndex } = useParams<IParamsProps>();

    const workplaceid = currentElem?.dataset?.workplaceid;
    const isPoster = currentElem?.dataset?.posterid;
    const mapid = currentElem?.dataset?.mapid;
    const [mode, setMode] = React.useState(!!workplaceid ? ButtonType.Staff : null);

    const [staffInThisArea, setStaffInThisArea] = React.useState<UserData[]>([]);
    const [departmentsInThisArea, setDepartmentsInThisArea] = React.useState<IDbDepartment[]>([]);
    const [placeInThisArea, setPlaceInThisArea] = React.useState<IDbPlace[]>([]);

    React.useEffect(() => {
        if (workplaceid || !mapid || isPoster) {
            return;
        }

        const loadData = async () => {
            const departments = await searchDepartmentsByFloorAndPlace({level: floorIndex, mapid});
            const persons = await searchStaffByFloorAndPlace({level: floorIndex, mapid});
            const places = await searchPlacesByFloorAndPlace({level: floorIndex, mapid});

            setPlaceInThisArea(places);
            setDepartmentsInThisArea(departments);
            setStaffInThisArea(persons);
        };

        loadData();
    }, [
        floorIndex, 
        workplaceid, 
        isPoster, 
        mapid, 
        setPlaceInThisArea, 
        setDepartmentsInThisArea, 
        setStaffInThisArea,
    ]);

    if (isPoster) {
        return (
            <NoActionsStyled>
                нет действий
            </NoActionsStyled>
        );
    }

    return (
        <>
            {!mode && (
                <GroupButtonListStyled>
                    <GroupButton
                        type={ButtonType.Staff}
                        count={staffInThisArea.length}
                        onClick={setMode}
                        disable={!!placeInThisArea.length && placeInThisArea[0].type !== placesType.TopManager}
                    />
                    <GroupButton 
                        type={ButtonType.Department}
                        count={departmentsInThisArea.length}
                        onClick={setMode}
                        disable={!!placeInThisArea.length || !!workplaceid}
                    /> 
                    <GroupButton 
                        type={ButtonType.Place}
                        count={placeInThisArea.length}
                        onClick={setMode}
                        disable={!!workplaceid ? true : false}
                    /> 
                    {placeInThisArea.length > 1 && ( 
                        <PlaceList places={placeInThisArea}/>
                    )}
                </GroupButtonListStyled>
            )}
            {(mode && mode === ButtonType.Staff) && (
                <SelectPanelStaff 
                    mode={mode}
                    floorIndex={floorIndex}
                    mapid={mapid}
                    workplaceid={workplaceid}
                    staffInThisArea={staffInThisArea}
                    onCloseClick={setMode}
                    disableModeScreen={!!workplaceid}
                />
            )}
            {(mode && mode === ButtonType.Department) && (
                <SelectPanelDepartments 
                    onCloseClick={setMode}
                    floorIndex={floorIndex}
                    mapid={mapid}
                    departmentsInThisArea={departmentsInThisArea}
                />
            )}
            {(mode && mode === ButtonType.Place) && (
                <SelectPanelPlaces
                    onCloseClick={setMode}
                    floorIndex={floorIndex}
                    mapid={mapid}
                    placeInThisArea={placeInThisArea.length ? placeInThisArea[0] : undefined}
                />
            )}
        </>
    );
};

export { 
    SelectPanelContainer
};


import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { IParamsProps, toastOptions } from '../../app';
import {
    UserData,
    updateUser,
} from '../../../gql/usersGql';
import { updateDepartment } from '../../../gql/departmentsGql';
import { ImageStyled } from '../../../../common/components/Person/styles/person.styled';
import { 
    ContainerStyled,
    ActionStyled,
    UserBlockStyled,
    DepartmentBlockStyled,
    DepartmentImageStyled,
} from './styles/user.styled';
import { IDbPlace } from '../../../IndexedDB/places/loadPlaces';
import { searchPlacesByFloorAndPlace } from '../../../IndexedDB/places/searchPlaces';
import { placesType } from '../../../../common/commonValues';

type IProps = {
    user: UserData;
}

const User: React.FC<IProps> = ({ user }) => {
    const { 
        floorIndex,
        idWorkplace, 
        idPlace, 
    } = useParams<IParamsProps>();

    const [updateDepartmentMigration] = useMutation(updateDepartment);
    const [updateUserMigration] = useMutation(updateUser);

    const [places, setPlaces] = React.useState<IDbPlace[]>([]);

    const getPlaces = React.useCallback(async ({floorIndex, idPlace }: {floorIndex: string, idPlace: string }) => {
        const places = await searchPlacesByFloorAndPlace({level: floorIndex, mapid: idPlace});

        setPlaces(places);
    }, [setPlaces]);

    React.useEffect(() => {
        if (idWorkplace) {
            setPlaces([]);
            return;
        }

        if (floorIndex && idPlace) {
            getPlaces({floorIndex, idPlace });
        }
    }, [floorIndex, idPlace, idWorkplace ]);

    const depatmentMove = React.useCallback(() => {
        if (user?.department?.id) {
            updateDepartmentMigration({
                variables: {
                    id: user.department.id,
                    floorIndex: floorIndex,
                    mapid: idPlace,
                }
            }).then(() =>{
                // @ts-ignore
                toast(`вы привязали на это место ${user.department.name}`, toastOptions);
            });
        }
    }, [floorIndex, idPlace, user, updateDepartmentMigration]);

    const userMove = React.useCallback(() => {
        if (!!places.length) {
            return;
        }

        if (user.id) {
            updateUserMigration({
                variables: {
                    id: user.id,
                    mapid: idPlace,
                    workplaceid: idWorkplace,
                    floorIndex: floorIndex,
                }
            }).then(() => {
                // @ts-ignore
                toast('Ваше место успешно перенесено', toastOptions);
            });
        }
    }, [user, idPlace, idWorkplace, updateUserMigration, places]);

    const isHead = !!user.isChief;
    const isDepartmentsLevel = user?.department?.level?.fl == Number(floorIndex);
    const isUserLevel = user.floor == Number(floorIndex);
    const currentUserPlace = user?.mapid === idPlace && isUserLevel;
    const currentUserWorkplace = user?.workplaceid === idWorkplace && isUserLevel;
    const currentDepartmentPlace = isHead && user?.department?.mapid === idPlace && isDepartmentsLevel;

    let actionText;

    switch (true) {
        case !!places.length: {
            const placesTypeArray = places.map((place) => place?.type).filter(Boolean);

            if (placesTypeArray[0] === placesType.TopManager){

            }

            if (!placesTypeArray.includes(placesType.TopManager)) {
                actionText = 'Это не рабочее место! Hужно выбрать другое место';
            } else {
                actionText = 'Место Топ Менеджера';
            }

            break;
        }
        case currentUserPlace :
            actionText = 'Я не работаю в этом пространстве';

            break;
        case currentUserWorkplace :
            actionText = 'Я не работаю за этим рабочим местом';

            break;

        case !currentUserPlace && !currentUserWorkplace && !!idPlace: {
            actionText = 'Перенести рабочее место в это пространство';

            break;
        }
        case !currentUserPlace && !currentUserWorkplace && !!idWorkplace: {
            actionText = 'Выбрать этот стол как своё рабочее место';

            break;
        }
        default:
            break;
    }

    if (!idWorkplace && !idPlace) {
        return null;
    }

    return (
        <ContainerStyled
            centerMode={!user}
            isHead={isHead}
        >
            <>
                <UserBlockStyled
                    centerMode={!user || !!places.length}
                    onClick={userMove}
                    disabled={!!places.length}
                >
                    {!places.length && (
                        <ImageStyled
                            round={true}
                            src={user.avatar}
                        />
                    )}
                    <ActionStyled bold={(currentUserPlace || currentUserWorkplace && !places.length)}>
                        {actionText}
                    </ActionStyled>
                </UserBlockStyled>
                {isHead && (
                    <DepartmentBlockStyled
                        centerMode={!user}
                        onClick={depatmentMove}
                    >
                        <DepartmentImageStyled/>
                        <ActionStyled bold={currentDepartmentPlace}>
                            {currentDepartmentPlace ?
                                'Отвязать место для отдела'
                            :
                                'Перенести место расположение отдела в это пространство'
                            }
                        </ActionStyled>
                    </DepartmentBlockStyled>
                )}
            </>
        </ContainerStyled>
    );
};

export { User };

import * as React from 'react';
import { useParams } from 'react-router-dom';

import {
    CreateEventContainerStyled, 
    CreateEventStyled,
} from '../styles/events.styled';
import { AuthContext, IParamsProps } from '../../../app';
import { Auth } from '../../../../../common/auth/auth.h';
import { CreateEventForm } from './CreateEventForm';

function CreateEvent() {
    const {
        floorIndex,
        idWorkplace,
        idPlace,
    } = useParams<IParamsProps>();
    const auth = React.useContext<Auth | null>(AuthContext);

    const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
    React.useEffect(() => setIsEditMode(false), [floorIndex, idWorkplace, idPlace]);
    const handleChangeMode = React.useCallback(() => setIsEditMode((prev) => !prev), [setIsEditMode]);

    if (!auth) {
        return <div />;
    }

    return (
        <CreateEventContainerStyled>
            {!!isEditMode && (
                <CreateEventForm changeEditMode={handleChangeMode} />
            )}
            {!isEditMode && (
                <CreateEventStyled onClick={handleChangeMode}>
                    создать событие
                </CreateEventStyled>
            )}
        </CreateEventContainerStyled>
    );
};

export {
    CreateEvent,
}
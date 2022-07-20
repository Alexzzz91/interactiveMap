import * as React from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { createEvent, EventData } from "../../../../gql/eventGql";
import {
    CreateEventStyled,
} from '../styles/events.styled';
import { Input } from '../../../../../common/components/input/Input';
import { Select } from '../../../../../common/components/input/Select';
import { AuthContext, IParamsProps, toastOptions } from '../../../app';
import { eventsName } from '../../../../../common/commonValues';
import { Auth } from '../../../../../common/auth/auth.h';
import { toast } from 'react-toastify';

type NewEvent = Partial<Omit<EventData, 'mapid'> & {mapid?: string}> ;

function CreateEventForm({ changeEditMode }: { changeEditMode(status: boolean): void }) {
    const {
        floorIndex,
        idWorkplace,
        idPlace,
    } = useParams<IParamsProps>();
    const auth = React.useContext<Auth | null>(AuthContext);

    const [newEvent, setNewEvent] = React.useState<NewEvent>({
        floorIndex,
        mapid: idPlace,
        workplaceid: idWorkplace,
        author: auth?.preferred_username,
    });

    const [createEventMigration] = useMutation(createEvent);
    const handlerCreateNewEvent = React.useCallback(async () => {
        try {
            await createEventMigration({
                variables: { ...newEvent }
            });

            changeEditMode(false);

            // @ts-ignore
            toast.info(`Событие успешно создано`, toastOptions);
        } catch (error) {
            
        }
    }, [createEventMigration, newEvent]);

    const setValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();
        const { currentTarget } = event;

        // @ts-ignore
        const fieldName = currentTarget?.attributes['name']?.value!;
        
        if (!fieldName) {
            return;
        }

        setNewEvent((prevState) => ({
            ...prevState,
            [fieldName]: currentTarget.value,
        }));
    }, [setNewEvent]);

    const handleSelectValue = React.useCallback((eventType: string) => {
        setNewEvent((prevState) => ({
            ...prevState,
            eventType,
        }));
    }, [setNewEvent]);

    const eventsForSelect = React.useMemo(() => Object.entries(eventsName)?.map(([value, title]) => ({value, title})), []);

    return (
        <>
            <Input 
                value={newEvent.name || ''}
                type="text"
                name="name"
                onChange={setValue}
            />
            <Input
                value={newEvent.description || ''}
                name="description"
                placeholder='Подробности к события'
                onChange={setValue}
            />
            <Input
                value={newEvent.location || ''}
                name="location"
                placeholder='Подробности к месту, где будет событие'
                onChange={setValue}
            />

            <Select
                name="eventType"
                placeholder='Тип события'
                value={newEvent.eventType || ''}
                items={eventsForSelect}
                onChange={handleSelectValue}
            />
            <CreateEventStyled onClick={handlerCreateNewEvent}>
                создать событие
            </CreateEventStyled>
        </>
    );
};

export {
    CreateEventForm,
}
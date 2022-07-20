import * as React from 'react';
import { useParams } from 'react-router-dom';
import { IParamsProps } from '../../app';
import { useApolloClient } from '@apollo/react-hooks';
import { eventsQuery, EventData } from '../../../gql/eventGql';
import { Event } from './Event';

function CheckEvent() {
    const {
        floorIndex,
        idWorkplace,
        idPlace,
    } = useParams<IParamsProps>();

    const client = useApolloClient();
    const eventsQueryResult = client.readQuery({ query: eventsQuery });

    if (!eventsQueryResult) {
        return <div />;
    }

    const { events } = eventsQueryResult;

    if (!events) {
        return <div />;
    }

    const currentEvents = events.filter((event: EventData) => {
        if (!event.isActual || event.floorIndex != floorIndex) {
            return false;
        }

        return (idPlace && event?.mapid?.toString() === idPlace) || event.workplaceid === idWorkplace;
    });

    return (
        <>
            {currentEvents.map((event: EventData) => (
                <Event 
                    key={event.id} 
                    event={event}
                />
            ))}
        </>
    );
};

export {
    CheckEvent,
}
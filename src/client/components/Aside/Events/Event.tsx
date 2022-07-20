import * as React from 'react';
import { EventData } from '../../../gql/eventGql';

import { EventContainerStyled, AsLink } from './styles/events.styled';

function Event({ event }: {event: EventData}) {
    let link = `/fl${event.floorIndex}`;

    if (!!event.floorIndex && !!event.workplaceid) {
        link = `/fl${event.floorIndex}wp${event.workplaceid}`;
    } else if (!!event.floorIndex && !event.workplaceid && !!event.mapid) {
        link = `/fl${event.floorIndex}place${event.mapid}`;
    }

    return (
        <EventContainerStyled>
            <AsLink to={link} >
                <div>
                    {event.name}
                </div>
                <span>
                    {event.description}
                </span>
            </AsLink>
        </EventContainerStyled>
    );
};

export {
    Event,
}
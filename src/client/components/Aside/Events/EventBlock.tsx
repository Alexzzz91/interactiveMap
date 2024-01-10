import React from 'react'
import { CheckEvent } from './CheckEvent';
import { CreateEvent } from './CreateEvent';

import {
    CreateEventContainerStyled, 
} from './styles/events.styled';

function EventBlock() {
    return (
        <CreateEventContainerStyled>
            <CheckEvent />
            <CreateEvent />
        </CreateEventContainerStyled>
    );
};

export {
    EventBlock,
}
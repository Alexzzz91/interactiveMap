import React from 'react'
import { useApolloClient, useQuery } from '@apollo/client';

import { eventsQuery, eventSubscription } from "../../../gql/eventGql";
import {
    BellStyled,
    ContainerStyled,
    TongueStyled,
    BellContainerStyled,
    NotificationListContainerStyled,
    NotificationListInnerStyled,
} from './styles/events.styled';
import { AuthContext } from '../../app';
import { EventData } from '../../../gql/eventGql';
import { userByNameQuery, UserData } from '../../../gql/usersGql';
import { Auth } from '../../../../common/auth/auth.h';
import { NotificationsRequest } from './NotificationsRequest';

import { Event } from './Event';

function Events() {
    const {data, loading, subscribeToMore } = useQuery(eventsQuery, {
        fetchPolicy: "network-only",
        nextFetchPolicy: "cache-first"
    });

    React.useEffect(() => {
        subscribeToMore({
            document: eventSubscription,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) {
                    return prev;
                }

                const prevEvents = prev.events || [];

                return {
                    events: [
                        ...prevEvents,
                        subscriptionData.data.eventCreated,
                    ],
                };
             },
        });
    }, [subscribeToMore]);

    // @ts-ignore
    const [user, setUser] = React.useState<UserData>(null);
    const client = useApolloClient();

    const auth = React.useContext<Auth | null>(AuthContext);

    React.useEffect(() => {
        if (!auth) {
            return;
        }

        const getUser = async () => {
            try {
                const { preferred_username: username } = auth;

                const { data } = await client.query({
                    query: userByNameQuery,
                    variables: { username }
                });

                const { userByName } = data;

                if (userByName) {
                    setUser(userByName);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getUser();
    }, [auth, client, setUser]);

    const bellActive = !!data?.events?.length;
    const [listActive, setListActive] = React.useState(false);

    if (!user) {
        return <div />;
    }

    return (
        <ContainerStyled>
            <BellContainerStyled
                onClick={() => setListActive(!listActive)}
                active={bellActive}
            >
                {bellActive && !!data && data.events.length}
                <BellStyled active={bellActive}>
                    <TongueStyled active={bellActive}/>
                </BellStyled>
            </BellContainerStyled>
            <NotificationListContainerStyled active={listActive}>
                <NotificationListInnerStyled>
                    {!loading && !!data && data.events.map((event: EventData) => (
                        <Event
                            key={event.id} 
                            event={event}
                        />
                    ))}
                    {!!user && (
                        <NotificationsRequest user={user}/>
                    )}
                </NotificationListInnerStyled>
            </NotificationListContainerStyled>
        </ContainerStyled>
    );
};

export {
    Events,
}
import { useMutation } from '@apollo/client';
import * as React from 'react';
import { createFCMToken, UserData } from '../../../gql/usersGql';
import {
    getCanRequest,
    initFirebaseMessagingRegistration,
    isSubscriptionDenied,
    isSubscriptionGranted,
} from './initFirebaseMessagingRegistration';

import { 
    NotificationsRequestContainerStyled,
    NotificationAlreadyStyled,
    NotificationActionStyled,
    NotificationDisabledStyled,
} from './styles/events.styled';

function NotificationsRequest({ user }: { user: UserData}) {
    const [isSubscribed, setIsSubscribed] = React.useState(isSubscriptionGranted())
    const [createFCMTokenMutation] = useMutation(createFCMToken);

    const subscribeButtonOnClick = React.useCallback(async () => {
        await initFirebaseMessagingRegistration((token: string) => createFCMTokenMutation({
            variables: {
                id: user.id,
                token,
            }
        }));
        setIsSubscribed(true);
    }, [setIsSubscribed, createFCMTokenMutation, user]);

    const canRequest = React.useMemo(() => getCanRequest(), []);
    const isDenied = React.useMemo(() => isSubscriptionDenied(), []);

    let component = null;

    switch (true) {
        case isSubscribed: {
            component = (
                <NotificationAlreadyStyled>
                    Вы подписаны на уведомления
                </NotificationAlreadyStyled>
            );
            break;
        }
        case canRequest: {
            component =  (
                <NotificationActionStyled onClick={subscribeButtonOnClick}>
                    Подписаться на уведомления
                </NotificationActionStyled>
            );
            break;
        }
        case isDenied: {
            component = (
                <NotificationDisabledStyled>
                    Отправка уведомлений заблокирована, нужно изменить параметры отправки уведомлений
                </NotificationDisabledStyled>
            );
            break;
        }
        default:
            break;
    }

    return (
        <NotificationsRequestContainerStyled>
            { component }
        </NotificationsRequestContainerStyled>
    );
}

export {
    NotificationsRequest
}
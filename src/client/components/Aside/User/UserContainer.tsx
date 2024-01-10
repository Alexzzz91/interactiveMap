
import { useApolloClient } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Auth } from '../../../../common/auth/auth.h';
import { userByNameQuery, UserData } from '../../../gql/usersGql';
import { AuthContext, IParamsProps, toastOptions } from '../../app';
import { LoginButtonStyled } from './styles/user.styled';
import { User } from './User';

const UserContainer: React.FC = () => {
    // @ts-ignore
    const [user, setUser] = React.useState<UserData>(null);
    const client = useApolloClient();

    const { floorIndex } = useParams<IParamsProps>();

    const auth = React.useContext<Auth | null>(AuthContext);

    const loginOnClick = React.useCallback(() => {
        const { protocol, hostname } = window.location;
        
        const action = !!auth ? 'logout' : 'login';

        window.location.replace(`${protocol}//${hostname}/${action}`);
    }, [auth]);

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
                })

                const { userByName } = data;

                if (userByName) {
                    setUser(userByName);

                    // проверяем что отпуск больше 14 дней, значит надо напомнить ему об походе в отпуск
                    if (userByName.vacationLeft > 14) {
                        toast.warn(
                            `У тебя накоплен отпуск больше чем на 2 недели(${userByName.vacationLeft} дн), нужно идти в отпуск!`, 
                            {
                                ...toastOptions,
                                autoClose: 13000,
                                position: 'top-center'
                            });
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        getUser();
    }, [auth, client, setUser]);

    if (!user || !floorIndex) {
        return (
            <LoginButtonStyled
                bold={true}
                onClick={loginOnClick}
            >
                {!!auth ? 'Выйти' : 'Войти'}
            </LoginButtonStyled>
        );
    }

    return (
        <User user={user} />
    );
};

export { UserContainer };

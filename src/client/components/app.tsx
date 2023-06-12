import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ToastOptions, ToastPosition } from 'react-toastify';
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import { MainContainer } from './Main';
import { Aside } from './Aside/Aside';
import { AsideContainer } from './Aside/AsideContainer';
import { administrationRoute, editorRoutes, allRoutes } from '../../common/routerPaths';
import { ContainerStyled } from './styles/app.styled';
import { EditorContainer } from './Editor';
import { useLocalStorage } from '../../common/hooks/useLocalStorage';
// import { origin } from '../../common/config/url';
import { Auth } from '../../common/auth/auth.h';
import { AdminPage } from './AdminPage';

type MapToastPosition = ToastPosition | 'bottom-right-with-aside';

type MapToastOptions = Omit<ToastOptions, 'position'> & {
    position: MapToastPosition;
}

const toastOptions: MapToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

type IParamsProps = {
  floorIndex: string;
  idPlace?: string;
  idWorkplace?: string;
  idPoster?: string;
  userId?: string;
};

type CurrentAppParamsType = {
  currentCity: string;
  setCurrentCity: (newCity: string) => void; 
  currentAddress: string;
  setCurrentAddress: (newAddress: string) => void; 
}

const defaultAppParams = {
  currentCity: '',
  setCurrentCity: (_newCity: string) => {}, 
  currentAddress: '', 
  setCurrentAddress: (_newAddress: string) => {},
};

const AuthContext = React.createContext<Auth | null>(null);
const ParamsContext = React.createContext<CurrentAppParamsType>(defaultAppParams);

const App = () => {
  const [currentCity, setCurrentCity] = useLocalStorage('currentCity', '');
  const [currentAddress, setCurrentAddress] = useLocalStorage('currentAddress', '');
  const [auth, setAuth] = React.useState<Auth | null>({
    name: 'admin',
    preferred_username: 'admin',
    given_name: 'admin',
    family_name: 'admin',
    email: 'admin@admin.admin',
    realm_access: {
      roles: ['admin'],
    },
  });

  const currentParams = React.useMemo(() => {
    return {
      currentCity,
      setCurrentCity,
      currentAddress,
      setCurrentAddress,
    };
  }, [currentCity, currentAddress]);

  React.useEffect(() => {
    const checkSso = async() => {
      try {
        // const response = await fetch(`${origin()}/check-sso`);
        // const auth = await response.json() as Auth;
        // setAuth(auth);
      } catch (error) {
        console.error('error', error);
      }
    };

    checkSso()
  }, [setAuth]);

  return (
    <AuthContext.Provider value={auth}>
      <ParamsContext.Provider value={currentParams}>
        <ContainerStyled>
          <Routes>
            <Route
              path={administrationRoute}
              element={ <AdminPage /> }
            />
            <Route
              path={editorRoutes}
              element={ <EditorContainer /> }
            />

            <Route 
              path='*'
              element={(
                <>
                  <MainContainer />
                  <AsideContainer> 
                    <Aside />
                  </AsideContainer>
                </>
              )}
            />
          </Routes>
        </ContainerStyled>
      </ParamsContext.Provider>
    </AuthContext.Provider>
  );
};

const hotComponent = hot(module)(App);

export { 
  App,
  hotComponent as default,
  AuthContext,
  ParamsContext,
  toastOptions,
};

export type {
  IParamsProps,
  MapToastOptions,
  CurrentAppParamsType,
}

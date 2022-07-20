import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ToastOptions, ToastPosition } from 'react-toastify';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MainContainer } from './Main';
import { Aside } from './Aside/Aside';
import { AsideContainer } from './Aside/AsideContainer';
import { administrationRoute, allEditorRoutes, allRoutes } from '../../common/routerPaths';
import { ContainerStyled } from './styles/app.styled';
import { EditorContainer } from './Editor';
import { origin } from '../../common/config/url';
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

const AuthContext = React.createContext<Auth | null>(null);

const App = () => {
  const [auth, setAuth] = React.useState<Auth | null>(null);

  React.useEffect(() => {
    const checkSso = async() => {
      try {
        const response = await fetch(`${origin()}/check-sso`);
        const auth = await response.json() as Auth;
        setAuth(auth);
      } catch (error) {
        console.error('error', error);
      }
    };

    checkSso()
  }, [setAuth]);

  return (
    <AuthContext.Provider value={auth}>
      <ContainerStyled>
        <Router>
          <Route
            path={administrationRoute}
            exact={true}
          >
            <AdminPage />
          </Route>
          <Route
            path={allEditorRoutes}
            exact={true}
          >
            <EditorContainer />
          </Route>

          <Route 
            path={allRoutes}
            exact={true}
          >
            <>
              <MainContainer />
              <AsideContainer> 
                <Aside />
              </AsideContainer>
            </>
          </Route>
        </Router>
      </ContainerStyled>
    </AuthContext.Provider>
  );
};

const hotComponent = hot(module)(App);

export { 
  App,
  hotComponent as default,
  AuthContext,
  toastOptions,
};

export type {
  IParamsProps,
  MapToastOptions,
}

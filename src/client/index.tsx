import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  ApolloClient,
  NormalizedCacheObject,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { createUploadLink } from 'apollo-upload-client';
// import { initializeApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { CachePersistor, LocalStorageWrapper } from 'apollo3-cache-persist';

import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from './Theme';
import {
  origin,
  WSorigin
} from '../common/config/url';

import '../../assets/styles/fontFace.css';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

import { App } from './components/app';
import { GlobalStyle } from './styles/Global.styled';
import { Loading } from '../common/components/Loading';
import { cache } from './InMemoryCache';

import { ToastContainerStyled } from './styles/toast.styles';
import { toast } from 'react-toastify';
import { firebaseConfig } from '../common/config/env';
import { BrowserRouter } from 'react-router-dom';
import { useClearAll } from '../common/utils/clearAll';
import { CacheBehaviour } from '../common/utils/CacheBehaviour';
import { ThemeChanger } from './components/ThemeChanger';

const httpLink = new createUploadLink({
  uri: `${origin()}/graphql`
});

const wsLink = new WebSocketLink({
  uri: `${WSorigin()}/subscriptions`,
  options: {
    reconnect: true
  }
});

const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


const Root = () => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeName>(ThemeName.MAIN);
  const [client, setClient] = React.useState<ApolloClient<NormalizedCacheObject>>();
  const [_persistor, setPersistor] = React.useState<CachePersistor<NormalizedCacheObject>>();
  
  React.useEffect(() => {
    const cacheBehaviour = new CacheBehaviour(window.localStorage);

    const cacheDays = cacheBehaviour.getDaysFromFirstVisit();

    if (cacheDays) {
      useClearAll();
    }

    const getClient = async () => {
      let newPersistor = new CachePersistor({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
        key: 'interactive_map-cache',
        trigger: 'write',
        debug: true,
        maxSize: false,
      });

      await newPersistor.restore();
      setPersistor(newPersistor);

      const apolloClient = new ApolloClient({
        link: splitLink,
        cache,
        name: 'interactive_map-web-client',
        version: '1.2'
      });

      setClient(apolloClient);
    }
    getClient();
    // Initialize Firebase
    // const apps = getApps();
    // let app;

    // if (!apps.length) {
    //   app = initializeApp(firebaseConfig);
    // } else {
    //   app = apps[0];
    // }

    // getAnalytics(app);
  }, []);

  React.useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      // @ts-ignore
      const wb = window.workbox;
      // add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      wb.addEventListener('installed', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      wb.addEventListener('controlling', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      wb.addEventListener('activated', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })

      const promptNewVersionAvailable = event => {
        const key = `open${Date.now()}`;
        const close = () => {
          console.log(
            'Пользователь отказался перезагрузить веб-приложение, продолжая использовать старую версию. Новая версия будет автоматически загружена, когда пользователь откроет приложение в следующий раз.'
          )
        };

        const confirm = () => {
          wb.addEventListener('controlling', event => {
            console.log('event', event);
            window.location.reload();
          });
          wb.messageSkipWaiting();
        };

        const btn = (
          <div
            onClick={confirm}
          >
            Обновить приложение
          </div>
        );

        toast.info(<div>
          <div> Доступна новая версия приложения. </div>
          Перезагрузить приложение сейчас? (Новая версия будет автоматически загружена, при следующем запуске).
          { btn }
        </div>, {
            position: "top-center",
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            onClose: close,
            toastId: key,
        });
      }

      wb.addEventListener('waiting', promptNewVersionAvailable)

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file
      wb.addEventListener('message', event => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      })

      wb.addEventListener('redundant', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event);
      })
      wb.addEventListener('externalinstalled', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event);
      })
      wb.addEventListener('externalactivated', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event);
      })

      wb.register();
    }
  }, []);

  if (!client) {
    return (
      <ThemeProvider theme={themes[currentTheme]}>
        <Loading />
      </ThemeProvider>
    )
  }
  
  return (
    <React.StrictMode>
      <ThemeProvider theme={themes[currentTheme]}>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ToastContainerStyled />
          <ThemeChanger currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        </ApolloProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);

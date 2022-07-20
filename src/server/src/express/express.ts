import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import multer from 'multer';
import compression from 'compression';
import cors from 'cors';

import { graphqlUploadExpress } from 'graphql-upload';
import { execute, subscribe } from 'graphql';

import { typeDefs } from './apollo/typeDefs';
import { resolvers } from './apollo/resolvers';

import { router as routeMain } from './routes/main';

import Keycloak from 'keycloak-connect';
import session from 'express-session';
import jwt from 'jsonwebtoken';

import { port as defaultPort } from '../../../common/config/url';
import { joinPath } from '../../../common/utils/path';
import { connectDb } from './data/mongo';

import { allRoutes, login, allEditorRoutes } from '../../../common/routerPaths';
import { fork } from 'child_process';
import { Auth } from '../../../common/auth/auth.h';
import { User } from './data/user';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from '@graphql-tools/schema';

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  app.set('trust proxy', 1);
  app.use(cors());
  app.use(express.urlencoded({limit: '50mb', extended: true}));
  app.use(express.json({limit: '50mb'}));
  app.use(compression());
  app.use(express.static('assets'));
  app.use(
    express.static(joinPath('dist'), {
      setHeaders: res => {
        res.set('Service-Worker-Allowed', '/');
      },
    })
  );
  
  const store = new session.MemoryStore();
    
  const secret = 'e6b3abe7-0614-4f06-a153-c73bfefc177b';
  
  app.use(session({
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

  const keycloak = new Keycloak({ store });

  app.use(keycloak.middleware({
    logout: '/logout',
    admin: '/'
  }));
  
  app.get('/check-sso', keycloak.checkSso(), function (req, res) {
    try {
      // @ts-ignore
      const { access_token } = JSON.parse(req.session['keycloak-token']);
      const decoded = jwt.decode(access_token) as Auth;
  
      const {
        name,
        preferred_username,
        given_name,
        family_name,
        email,
        realm_access,
      } = decoded;
  
      res.json({
        name,
        preferred_username,
        given_name,
        family_name,
        email,
        realm_access,
      });
    } catch (error) {
      res.sendStatus(401);
    }
  });
  
  app.get('/login', keycloak.protect(), async (req, res) => {
    try {
      // @ts-ignore
      const { access_token } = JSON.parse(req.session['keycloak-token']);
      const decoded = jwt.decode(access_token) as Auth;
      const {
        name,
        preferred_username,
        email,
      } = decoded;
  
      // @ts-ignore
      const user = await User.userByName(preferred_username);
      if (!user) {
        const newUserFromAD = new User({
          username: preferred_username,
          name,
          email,
        });
  
        await newUserFromAD.save();
      }
  
      res.redirect('/');
    }
    catch (error) {
      res.sendStatus(401);
    }
  });
  
  app.get([...allRoutes, ...allEditorRoutes, login], routeMain);
  
  // Ручка для загрузки новых данных пользователей

  let storage = multer.diskStorage({
    destination: './public/data/uploads/',
    filename: function (_req, file, cb) {
      cb(null, file.fieldname + '.xml')
    }
  });

  let upload = multer({ storage: storage });

  app.post('/uploadUsers', upload.single('stuff'), (req, res) => {
    const file = req.file;

    if (!file) {
      res.sendStatus(400);
    }

    fork(__dirname + '/data/filler/index.js');

    res.send('File uploaded!');
  })

  // не включать если не нужно пересобирать базу данных
  const eraseDatabaseOnSync = false;

  if (eraseDatabaseOnSync) {
    fork(__dirname + '/data/filler/index.js');
  }

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        }
      }
    ],
  });

  const subscriptionServer = SubscriptionServer.create(
    // @ts-ignore
    { schema, execute, subscribe },
    { server: httpServer, path: '/subscriptions' }
  );

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  app.get('/404-1', (_req, res) => {
    res.sendFile(`public/404-1.html`, { root: process.cwd() });
  });

  app.get('/404-2', (_req, res) => {
    res.sendFile(`public/404-2.html`, { root: process.cwd() });
  });

  app.get('/404-3', (_req, res) => {
    res.sendFile(`public/404-3.html`, { root: process.cwd() });
  });

  app.get('/404-4', (_req, res) => {
    res.sendFile(`public/404-4.html`, { root: process.cwd() });
  });

  app.get('/404-5', (_req, res) => {
    res.sendFile(`public/404-5.html`, { root: process.cwd() });
  });

  app.get('/404-best', (_req, res) => {
    res.sendFile(`public/404-best.html`, { root: process.cwd() });
  });

  app.get('*', (_req, res) => {
    const fonFountVariant = Math.floor(Math.random() * 5) + 1;
    res.sendFile(`public/404-${fonFountVariant}.html`, { root: process.cwd() });
  });

  await server.start();

  server.applyMiddleware({ app });

  const port = process.env.PORT || defaultPort;

  await new Promise<void>(resolve => httpServer.listen({ port }, resolve));

  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}

connectDb().then(async () => {
  await startApolloServer();
});

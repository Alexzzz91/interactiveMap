import express from 'express';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import http from 'http';
import multer from 'multer';
import compression from 'compression';
import cors from 'cors';

// import { graphqlUploadExpress } from 'graphql-upload';
import { execute, subscribe } from 'graphql';

import { typeDefs } from './apollo/typeDefs';
import { resolvers } from './apollo/resolvers';

import { router as routeMain } from './routes/main';

// import Keycloak from 'keycloak-connect';
import session from 'express-session';

import memorystore from 'memorystore';
// import jwt from 'jsonwebtoken';

import { port as defaultPort } from '../../../common/config/url';
import { joinPath } from '../../../common/utils/path';
import { connectDb } from './data/mongo';

import { allRoutes, login, allEditorRoutes, administrationRoute } from '../../../common/routerPaths';
import { fork } from 'child_process';
// import { Auth } from '../../../common/auth/auth.h';
// import { User } from './data/user';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import bodyParser from 'body-parser';
import { makeExecutableSchema } from '@graphql-tools/schema';

const { json } = bodyParser;

const MemoryStore = memorystore(session)

interface MyContext {
  token?: String;
}

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
  
  // const store = new session.MemoryStore();
    
  const secret = 'keyboard cat';
  
  app.use(session({
    cookie: { maxAge: 86400000, secure: true},
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret,
}))


  // const keycloak = new Keycloak({ store });

  // app.use(keycloak.middleware({
  //   logout: '/logout',
  //   admin: '/'
  // }));
  
  // app.get('/check-sso', keycloak.checkSso(), function (req, res) {
  //   try {
  //     // @ts-ignore
  //     const { access_token } = JSON.parse(req.session['keycloak-token']);
  //     const decoded = jwt.decode(access_token) as Auth;
  
  //     const {
  //       name,
  //       preferred_username,
  //       given_name,
  //       family_name,
  //       email,
  //       realm_access,
  //     } = decoded;
  
  //     res.json({
  //       name,
  //       preferred_username,
  //       given_name,
  //       family_name,
  //       email,
  //       realm_access,
  //     });
  //   } catch (error) {
  //     res.sendStatus(401);
  //   }
  // });
  
  // app.get('/login', keycloak.protect(), async (req, res) => {
  //   try {
  //     // @ts-ignore
  //     const { access_token } = JSON.parse(req.session['keycloak-token']);
  //     const decoded = jwt.decode(access_token) as Auth;
  //     const {
  //       name,
  //       preferred_username,
  //       email,
  //     } = decoded;
  
  //     // @ts-ignore
  //     const user = await User.userByName(preferred_username);
  //     if (!user) {
  //       const newUserFromAD = new User({
  //         username: preferred_username,
  //         name,
  //         email,
  //       });
  
  //       await newUserFromAD.save();
  //     }
  
  //     res.redirect('/');
  //   }
  //   catch (error) {
  //     res.sendStatus(401);
  //   }
  // });

  app.get('/check-sso', function (_req, res) {
    res.sendStatus(401);
  })
  
  app.get([...allRoutes, ...allEditorRoutes, login, administrationRoute], routeMain);
  
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


  const subscriptionServer = SubscriptionServer.create(
    // @ts-ignore
    { schema, execute, subscribe },
    { server: httpServer, path: '/subscriptions' }
  );

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
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
    // introspection: process.env.NODE_ENV !== 'production'
    introspection: true,
  });

  await server.start();
  
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  // app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  // app.get('/404-1', (_req, res) => {
  //   res.sendFile(`public/404-1.html`, { root: process.cwd() });
  // });

  // app.get('/404-2', (_req, res) => {
  //   res.sendFile(`public/404-2.html`, { root: process.cwd() });
  // });

  // app.get('/404-3', (_req, res) => {
  //   res.sendFile(`public/404-3.html`, { root: process.cwd() });
  // });

  // app.get('/404-4', (_req, res) => {
  //   res.sendFile(`public/404-4.html`, { root: process.cwd() });
  // });

  // app.get('/404-5', (_req, res) => {
  //   res.sendFile(`public/404-5.html`, { root: process.cwd() });
  // });

  // app.get('/404-best', (_req, res) => {
  //   res.sendFile(`public/404-best.html`, { root: process.cwd() });
  // });

  // app.get('*', (_req, res) => {
  //   const fonFountVariant = Math.floor(Math.random() * 5) + 1;
  //   res.sendFile(`public/404-${fonFountVariant}.html`, { root: process.cwd() });
  // });

  app.get('*', (_req, res) => {
    const fonFountVariant = Math.floor(Math.random() * 5) + 1;
    res.sendFile(`public/404-${fonFountVariant}.html`, { root: process.cwd() });
  });

  const port = process.env.PORT || defaultPort;

  await new Promise<void>(resolve => httpServer.listen({ port }, resolve));

  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);

  // console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}

connectDb().then(async () => {
  await startApolloServer();
});

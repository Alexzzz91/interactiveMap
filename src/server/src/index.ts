/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

// process.env.NODE_ENV = 'development';
// console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV === 'production') {
//     try {
//     fs.copyFile(
//       path.join(process.cwd(), '/keycloak.prod.json'),
//       path.join(process.cwd(), '/keycloak.json'),
//       (err: any) => {
//         if (err) {
//           throw err;
//         }
//           console.log('keycloak скопирован');
//         }
//     );
//   } catch (error) {}


//   require('@babel/register');
//   require('@babel/polyfill');
//   require('./express/express');
// } else {
  // try {
  //   fs.copyFile(
  //     path.join(process.cwd(), '/keycloak.dev.json'),
  //     path.join(process.cwd(), '/keycloak.json'),
  //     (err: any) => {
  //       if (err) {
  //         throw err;
  //       }
  //         console.log('keycloak скопирован');
  //       }
  //   );
  // } catch (error) {}

  require('@babel/register');
  require('@babel/polyfill');
  require('./express/express');
// }

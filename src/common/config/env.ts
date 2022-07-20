export const nodeEnv = process.env.NODE_ENV || '';
export const env = nodeEnv || 'development';
export const isDevelopment = env === 'development';

export const isStaging = env === 'staging';
export const isProduction = env === 'production';

export const isServer = typeof document === 'undefined';
export const isClient = !isServer;

export const logDir = 'logs/server';
export const logLevel = 'errors.log';
export const logName = 'info';

export const mongoUrl = 'mongodb://mongo:27017';

export const firebaseConfig = {
  apiKey: "AIzaSyC57sXo54ANx-awXvGs1TZu6UBvQ1XJ_VI",
  authDomain: "findpersoninmap.firebaseapp.com",
  projectId: "findpersoninmap",
  storageBucket: "findpersoninmap.appspot.com",
  messagingSenderId: "916811003939",
  appId: "1:916811003939:web:ec83b1b94d8d1c1e949996"
};

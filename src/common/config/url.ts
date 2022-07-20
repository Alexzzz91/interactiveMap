import { isDevelopment } from './env';

export const port = 80;

export const origin = () => {
  const { 
    hostname,
    protocol
  } = window.location;

  const origin = `${protocol}//${hostname}`;

  if (isDevelopment) {
    return `${origin}`;
  }

  return origin;
};


export const host = () => {
  const { hostname } = window.location;

  return `${hostname}`;
};

export const isSecure = () => {
  const { protocol } = window.location;

  return protocol === 'https:';
};

export const WSorigin = () => {
  const { hostname } = window.location;

  return `${isSecure() ? 'wss': 'ws'}://${hostname}`;
};
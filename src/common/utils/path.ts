/* eslint-disable import/prefer-default-export */

import path from 'path';

// @ts-ignore
export function joinPath(...arg) {
  return path.join(process.cwd(), ...arg);
}

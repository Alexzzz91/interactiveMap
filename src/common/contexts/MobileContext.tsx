
import React from 'react';
import { windowMatchMedia, mobileWidth } from '../hooks/useMatchMedia';

const MobileContext = React.createContext(windowMatchMedia(mobileWidth).matches);

export {
  MobileContext,
}

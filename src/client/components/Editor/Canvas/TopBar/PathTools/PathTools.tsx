// @ts-nocheck
import React from 'react';

import { AttributesTools } from '../AttributesTools/AttributesTools';

const attributes = {
  d: 'readOnly'
};

const PathTools = ({ canvas, selectedElement, handleChange }) => (
  <AttributesTools 
    canvas={canvas}
    selectedElement={selectedElement} 
    handleChange={handleChange}
    attributes={attributes} 
  />
)

export {
  PathTools
}

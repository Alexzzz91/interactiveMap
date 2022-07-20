// @ts-nocheck
import React from 'react';

import { AttributesTools } from '../AttributesTools/AttributesTools';

const attributes = {
  x: 'readOnly',
  y: 'readOnly',
  width: 'readOnly',
  height: 'readOnly',
  stroke: 'readOnly',
  'stroke-width': 'readOnly',
};

const RectTools = ({ canvas, selectedElement, handleChange }) => {
  return ( 
    <AttributesTools
      canvas={canvas}
      selectedElement={selectedElement}
      handleChange={handleChange}
      attributes={attributes}
    />
  );
}

export {
  RectTools
};

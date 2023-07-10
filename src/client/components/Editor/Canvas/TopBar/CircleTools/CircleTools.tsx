// @ts-nocheck
import React from 'react'

import { AttributesTools } from '../AttributesTools/AttributesTools';

const attributes = {
  cx: 'readOnly',
  cy: 'readOnly',
  r: 'readOnly',
};

const CircleTools = ({ canvas, selectedElement, handleChange }) => (
  <AttributesTools
    canvas={canvas}
    selectedElement={selectedElement}
    handleChange={handleChange}
    attributes={attributes}
  />
)

export {
  CircleTools
};

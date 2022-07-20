// @ts-nocheck
import React from 'react';

import { AttributesTools } from '../AttributesTools/AttributesTools';

const TextTools = ({ selectedElement, handleChange }) => (
  <AttributesTools
    selectedElement={selectedElement}
    handleChange={handleChange}
    attributes={{
      x: 'readOnly',
      y: 'readOnly',
      'font-family': ['arial', 'newroman', 'serif', 'sans-serif', 'fantasy', 'monospace'],
      'font-size': 'number',
    }}
  />
)

export {
  TextTools
};

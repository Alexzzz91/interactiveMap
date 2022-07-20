// @ts-nocheck
import React from 'react'

import { IconButton } from '../../IconButton/IconButton'

const GroupTools = ({ canvas, selectedElement, multiselected }) => (
  <>
    {multiselected && (
      <IconButton
        icon="Group"
        onClick={() => {
          canvas.groupSelectedElements()
        }}
      />
    )}
    {selectedElement?.tagName === 'g' && (
      <IconButton
        icon="ungroup"
        onClick={() => {
          canvas.ungroupSelectedElement()
        }}
      />
    )}
  </>
)

export {
  GroupTools
};

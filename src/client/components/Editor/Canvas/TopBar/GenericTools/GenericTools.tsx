// @ts-nocheck
import React from 'react';

import { IconButton } from '../../IconButton/IconButton';
import { DelimiterStyled, TopRightSectionStyled } from '../styles/topBar.styled';

const GenericTools = ({ canvas }) => {
  const onClickUndo = React.useCallback(() => canvas.undoMgr.undo(), [canvas]);
  
  const onClickRedo = React.useCallback(() => canvas.undoMgr.redo(), [canvas]);

  const onClickClone = React.useCallback(() => canvas?.cloneSelectedElements(20, 20), [canvas]);

  const onClickDelete = React.useCallback(() => canvas?.deleteSelectedElements(), [canvas]);

  return (
    <TopRightSectionStyled>
      <IconButton 
        icon="Undo" 
        onClick={onClickUndo}
        useTitle={false}
      />
      <IconButton 
        icon="Redo" 
        onClick={onClickRedo} 
        useTitle={false}
      />
      <DelimiterStyled />
      <IconButton 
        icon="Clone" 
        onClick={onClickClone} 
        useTitle={false}
      />
      <DelimiterStyled />
      <IconButton 
        icon="Delete" 
        onClick={onClickDelete} 
        useTitle={false}
      />
    </TopRightSectionStyled>
  )
}


export {
  GenericTools
}

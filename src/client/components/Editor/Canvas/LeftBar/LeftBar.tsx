// @ts-nocheck
import React from 'react';

import { canvasContext } from '../Context/canvasContext';
import { defaultLayersName } from '../..';

import { IconButton } from '../IconButton/IconButton';
import { LeftBarStyled } from './styles/leftBar.styled';

const LeftBar = () => {
  const [canvasState, canvasStateDispatcher] = React.useContext(canvasContext);
  const { mode, layerName } = canvasState;

  const setMode = React.useCallback((e) => {
    const { mode } = e.currentTarget.dataset;

    return canvasStateDispatcher({ type: 'mode', mode })
  }, [canvasStateDispatcher]);

  return (
    <LeftBarStyled>
      <IconButton
        icon="Select"
        className={mode === 'select' ? 'selected' : ''}
        data-mode='select'
        onClick={setMode} 
      />
      {layerName === defaultLayersName.Areas && (
        <>
          <IconButton
            icon="Circle"
            className={mode === 'circle' ? 'selected' : ''}
            data-mode='circle'
            onClick={setMode} 
          />
          <IconButton
            icon="Ellipse"
            className={mode === 'ellipse' ? 'selected' : ''}
            data-mode='ellipse'
            onClick={setMode} 
          />
          <IconButton 
            icon="Rect" 
            className={mode === 'rect' ? 'selected' : ''} 
            data-mode='rect'
            onClick={setMode} 
          />
          <IconButton 
            icon="Path" 
            className={mode === 'path' ? 'selected' : ''} 
            data-mode='path'
            onClick={setMode} 
          />
        </>
      )}
      {layerName === defaultLayersName.Common && (
        <>
          <IconButton 
            icon="Line" 
            className={mode === 'line' ? 'selected' : ''} 
            data-mode='line'
            onClick={setMode} 
          />
          <IconButton 
            icon="Icon" 
            className={mode === 'icon' ? 'selected' : ''} 
            data-mode='icon'
            onClick={setMode} 
          />
          <IconButton 
            icon="Text" 
            className={mode === 'text' ? 'selected' : ''} 
            data-mode='text'
            onClick={setMode} 
          />
        </>
      )}
      {layerName === defaultLayersName.WorkPlaces && (
        <IconButton 
          icon="Table" 
          className={mode === 'table' ? 'selected' : ''} 
          data-mode='table'
          onClick={setMode} 
        />
      )}
    </LeftBarStyled>
  )
}

export {
  LeftBar
};

// @ts-nocheck
import React from 'react'

import { IconButton } from '../../IconButton/IconButton'
import { DelimiterStyled, TopRightSectionStyled } from '../styles/topBar.styled'

const SaveCloseTools = ({ canvas, canvasUpdated, svgUpdate, onClose }) => {
  const onClickClose = React.useCallback(() => {
    if (canvasUpdated) {
      if (!window.confirm('Есть не сохраненные изменения, точно выйти?')) {
        return
      }
    }
    onClose()
  }, [canvasUpdated, canvas]);

  const onClickSave = React.useCallback(() => {
    const drawing = canvas.getCurrentDrawing();
    let layer = drawing.getNumLayers();

    while (layer--) {
      const layerName = drawing.getLayerName(layer);
      drawing.setLayerOpacity(layerName, 1);
    }

    svgUpdate(canvas.getSvgString());
  }, [svgUpdate, canvas]);

  return (
    <TopRightSectionStyled>
      <IconButton
        icon="Save"
        disabled={!canvasUpdated}
        onClick={onClickSave}
        useTitle={false}
      />
      <DelimiterStyled />
      <IconButton
        icon="Close"
        onClick={onClickClose}
        useTitle={false}
      />
    </TopRightSectionStyled>
  );
};

export {
  SaveCloseTools
}

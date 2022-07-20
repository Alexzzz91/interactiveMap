// @ts-nocheck
import * as React from 'react';
import { SelectLayer } from './SelectLayer/SelectLayer';
import { SelectPanelContainer } from './SelectPanel/SelectPanelContainer';
import SvgCanvas from 'svgedit/editor/svgcanvas';
import {
  AsideStyled,
  ListInnerStyled,
} from './styles/aside.styled';


type EditorAsideProps = {
  canvas: typeof SvgCanvas;
  // очень сложно с типами из svg edit
  currentElem: any;
}

const EditorAside: React.FC<EditorAsideProps> = ({ canvas, currentElem }) => {
  const drawing = canvas.getCurrentDrawing();

  const handleSetCurrentLayer = React.useCallback((name) => {
    const currentDrawing = canvas.getCurrentDrawing();
    let layer = currentDrawing.getNumLayers();

    while (layer--) {
      const layerName = currentDrawing.getLayerName(layer);
      currentDrawing.setLayerOpacity(layerName, layerName !== name ? 0.2 : 1);
    }

    canvas.clearSelection();
    canvas.setCurrentLayer(name);
  }, [canvas]);

  React.useEffect(() => {
    const currentLayerName = canvas.getCurrentDrawing().getCurrentLayerName();

    handleSetCurrentLayer(currentLayerName);
  }, []);

  return (
    <AsideStyled>
      <ListInnerStyled>
        {!currentElem && (
          <SelectLayer 
            drawing={drawing}
            setCurrentLayer={handleSetCurrentLayer}
          />
        )}
        {currentElem && (
          <SelectPanelContainer 
            currentElem={currentElem} />
        )}
        </ListInnerStyled>
    </AsideStyled>
  );
};

export { 
  EditorAside
};

// @ts-nocheck
import React from 'react'
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
  setSvgContent: (newState: string) => void;
}

const EditorAside: React.FC<EditorAsideProps> = ({ canvas, currentElem, setSvgContent }) => {
  const drawing = canvas.getCurrentDrawing();
  const [source, setSource] = React.useState('');

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

  const handleClick = () => {
    canvas.setSvgString(source);
    setSvgContent(source);
  }

  const handleSetSource = (e) => {
    setSource(e.target.value);
  }

  return (
    <AsideStyled>
      <ListInnerStyled>
        <textarea spellCheck="false" rows="5" cols="80" value={source} onChange={handleSetSource}></textarea>
        <button onClick={handleClick} >
          сохранить чего то там
        </button>
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

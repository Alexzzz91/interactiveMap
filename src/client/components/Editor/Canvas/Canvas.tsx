// @ts-nocheck
import React from 'react';
import 'svgedit/editor/jquery.min';
import 'svgedit/editor/jquery-ui/jquery-ui-1.8.17.custom.min';
import SvgCanvas from 'svgedit/editor/svgcanvas';
import { saveOIAttr, restoreOIAttr } from '../services/svg';
import { config } from './editor/config';
import { TopBar } from './TopBar/TopBar';
import { LeftBar } from './LeftBar/LeftBar';
import { BottomBar } from './BottomBar/BottomBar';
import { updateCanvas } from './editor/updateCanvas';
import { EditorAside } from '../EditorAside/EditorAside';
import { AsideContainer } from '../../Aside/AsideContainer';

import { canvasContext, CanvasContextProvider } from './Context/canvasContext';
import { EditorContainerStyled, EditorStyled } from './styles/canvas.styled';

const svgCanvasStyles = { position: 'relative' };
const hiddenInputStyles = { position: 'absolute', left: '-9999px' };

let ticking = false;

const Canvas = React.memo((props) => {
  const { 
    svgContent = '<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg"></svg>',
    // locale,
    svgUpdate,
    onClose,
    setSvgContent,
    log,
  } = props;

  const textRef = React.useRef(null);
  const svgcanvasRef = React.useRef(null);
  const oiAttributes = React.useRef(saveOIAttr(svgContent));
  // const [open, setOpen] = React.useState(true);
  
  const [canvasState, dispatchCanvasState] = React.useContext(canvasContext);
  let elem = canvasState.selectedElement;

  React.useEffect(() => {
    if (canvasState.canvas) {
      console.log('canvasState.canvas.getSvgString()', canvasState.canvas.getSvgString());
    };
  }, [canvasState]);

  // log('Canvas', { locale, canvasState });
  const updateContextPanel = () => {
    let elem = canvasState.selectedElement;
    // If element has just been deleted, consider it null
    if (elem && !elem.parentNode) {
      elem = null
    }

    if (elem) {
      const { tagName } = elem
      if (tagName === 'text') {
        // we should here adapt the context to a text field
        textRef.current.value = elem.textContent
      }
    }
  };

  const selectedHandler = (win, elems) => {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        log('selectedHandler', elems);
    
        const selectedElement = elems.length === 1 || !elems[1] ? elems[0] : null;
        const multiselected = (elems.length >= 2 && !!elems[1]);
    
        dispatchCanvasState({
          type: 'selectedElement',
          selectedElement,
          multiselected,
        });
        ticking = false;
      });
  
      ticking = true;
    }
  };

  const changedHandler = (_win, elems) => {
    log('changedHandler', { elems })
    dispatchCanvasState({ type: 'updated', updated: true })
  };

  const contextsetHandler = (_win, context) => {
    dispatchCanvasState({ type: 'context', context })
  };

  const svgUpdateHandler = (svgString) => {
    const { canvas } = canvasState;

    // oiAttributes.current = `viewBox="0 0 ${canvas.contentW} ${canvas.contentH}"`;
    svgUpdate(restoreOIAttr(svgString, oiAttributes.current));

    dispatchCanvasState({ type: 'updated', updated: false })
  };

  const onKeyUp = (event) => {
    dispatchCanvasState({ type: 'setTextContent', text: event.target.value })
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (
      event.key === 'Backspace' && 
      (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') &&
      !event.target.attributes["contenteditable"]
    ) {
      event.preventDefault(); 
      dispatchCanvasState({ type: 'deleteSelectedElements' })
    }

    if (event.target.attributes["contenteditable"]) {
      return;
    }

    if (event.key === 'ArrowUp') {
      dispatchCanvasState({ type: 'moveSelected', params: { dx: 0, dy: -1, event }, });
    }
    if (event.key === 'ArrowDown') {
      dispatchCanvasState({ type: 'moveSelected', params: { dx: 0, dy: 1, event }, });
    }
    if (event.key === 'ArrowLeft') {
      dispatchCanvasState({ type: 'moveSelected', params: { dx: -1, dy: 0, event }, });
    }
    if (event.key === 'ArrowRight') {
      dispatchCanvasState({ type: 'moveSelected', params: { dx: 1, dy: 0, event }, });
    }
  };

  // unused events -> we just log them in debug mode.
  const eventList = {
    selected: selectedHandler,
    changed: changedHandler,
    contextset: contextsetHandler,
    'extension-added': () => log('extensionAddedHandler'),
    cleared: () => log('clearedHandler'),
    exported: () => log('exportedHandler'),
    exportedPDF: () => log('exportedPDFHandler'),
    message: () => log('messageHandler'),
    pointsAdded: () => log('pointsAddedHandler'),
    saved: () => log('savedHandler'),
    setnonce: () => log('setnonceHandler'),
    unsetnonce: () => log('unsetnonceHandler'),
    transition: () => log('transitionHandler'),
    zoomed: () => log('zoomedHandler'),
    zoomDone: () => log('zoomDoneHandler'),
    updateCanvas: () => log('updateCanvasHandler'),
    extensionsAdded: () => log('extensionsAddedHandler'),
  }
  
  React.useLayoutEffect(() => {
    const editorDom = svgcanvasRef.current;
    const canvas = new SvgCanvas(editorDom, config);
    
    updateCanvas(canvas, svgcanvasRef.current, config, true);
    
    canvas.textActions.setInputElem(textRef.current);

    Object.entries(eventList).forEach(([eventName, eventHandler]) => {
      canvas.bind(eventName, eventHandler);
    })
    dispatchCanvasState({ type: 'init', canvas, svgcanvas: editorDom, config });
    document.addEventListener('keydown', onKeyDown.bind(canvas));

    return () => {
      // cleanup function
      console.log('cleanup');
      document.removeEventListener('keydown', onKeyDown.bind(canvas));
    }
  }, []);

  React.useLayoutEffect(() => {
    if (!canvasState.canvas) {
      return;
    }
    
    oiAttributes.current = saveOIAttr(svgContent);
    canvasState.canvas.clear();

    const success = canvasState.canvas.setSvgString(svgContent.replace(/'/g, "\\'"), true); // true => prevent undo
    updateCanvas(canvasState.canvas, svgcanvasRef.current, config, true);

    if (!success) {
      throw new Error('Error loading SVG');
    }
    
    dispatchCanvasState({ type: 'updated', updated: false });
  }, [svgContent, canvasState.canvas]);

  updateContextPanel();

  if (elem && !elem.parentNode) {
    elem = null
  }

  console.log('setSvgContent', setSvgContent);

  return (
    <>
      <EditorContainerStyled  withAside={true}>
        <TopBar
          svgUpdate={svgUpdateHandler}
          onClose={onClose}
        />
        <LeftBar />
        <BottomBar />

        <EditorStyled role="main">
          <div className="workarea">
            <div 
              ref={svgcanvasRef} 
              className="svgcanvas" 
              style={svgCanvasStyles} 
            />
          </div>
        </EditorStyled>
        {/* below input is intentionnally kept off the visible window and is used for text edition */}
        <input 
          ref={textRef} 
          onKeyUp={onKeyUp} 
          type="text" 
          size={35} 
          style={hiddenInputStyles} 
        />
      </EditorContainerStyled>
      {(canvasState.canvas) && (
        <AsideContainer >
          <EditorAside
            canvas={canvasState.canvas}
            setSvgContent={setSvgContent}
            currentElem={elem}
          />
        </AsideContainer>
      )}
    </>
  )
});

const CanvasWithContext = (props) => (<CanvasContextProvider><Canvas {...props} /></CanvasContextProvider>)

export {
  CanvasWithContext as Canvas
}

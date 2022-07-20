// @ts-nocheck
import * as React from 'react';

import { updateCanvas } from '../editor/updateCanvas';

let iconAddInProcess = false;

const addIcon = async (canvas, icon) => {
  if (iconAddInProcess) {
    return;
  }

  iconAddInProcess = true;
  try {
    const response = await fetch(`/legendIcons/${icon}.svg`)
    const iconString = await response.text();
    
    // canvas.clearSelection();
    canvas.importSvgString(iconString, true);
    canvas.alignSelectedElements('m', 'page');
    canvas.alignSelectedElements('c', 'page');

    iconAddInProcess = false;
  } catch (error) {
    console.error(error);
    iconAddInProcess = false;
  }
};

const reducer = (state, action) => {
  let newMode;
  const { 
    canvas, 
    config, 
    selectedElement, 
    multiselected, 
  } = state;

  switch (action.type) {
    case 'init':
      return { 
        ...state, 
        canvas: action.canvas, 
        svgcanvas: action.svgcanvas, 
        config: action.config 
    };
    case 'mode':
      canvas.setMode(action.mode);

      return { 
        ...state, 
        mode: action.mode,
        iconToPaste: '',
      };
    case 'selectedElement':
      newMode = (canvas?.getMode() === 'select') ? { mode: 'select' } : {};
      
      return {
        ...state,
        selectedElement: action.selectedElement,
        multiselected: action.multiselected,
        layerName: canvas.getCurrentDrawing().getCurrentLayerName(),
        ...newMode,
    };
    case 'zoom':
      canvas.setZoom(action.zoom / 100);
      updateCanvas(canvas, state.svgcanvas, state.config, true);

      return { 
        ...state, 
        zoom: action.zoom 
      };
    case 'context':
      return { 
        ...state, 
        context: action.context, 
        layerName: canvas.getCurrentDrawing().getCurrentLayerName(), 
      };
    case 'color':
      canvas.setColor(action.colorType, action.color, false);
      // no need to memorize state for color
      return state
    case 'deleteSelectedElements':
      canvas.deleteSelectedElements();
      return state
    case 'setTextContent':
      canvas.setTextContent(action.text);
      return state
    case 'updated':
      // let input = document.getElementById('mapid-input');
      // let children;
      // let value;
      // if (input && !input.value) {
      //   children = canvas.getCurrentDrawing().getCurrentLayer().children;
      //   console.log('canvas', canvas);
      //   let lastMapid = 1;
      //   const listMapIds = Object.values(children);
      //   listMapIds.forEach((itemMapId) => {
      //     const { mapid } = itemMapId.dataset;
 
      //     if (mapid && lastMapid < Number(mapid)) {
      //       console.log('mapid', mapid);
      //       lastMapid = Number(mapid);
      //     }
      //   });
      //   value = lastMapid;
      // } else {
      //   input = document.getElementById('workplaceid-input');

      //   if (input && !input.value) {
      //     children = canvas.getCurrentDrawing().getCurrentLayer().children;
      //     const listWorkplaceIds = Object.values(children);

      //     let lastWorkplaceId = 1;
      //     listWorkplaceIds.forEach((itemMapId) => {
      //       const { workplaceid } = itemMapId.dataset;

      //       if (workplaceid && lastWorkplaceId < Number(workplaceid)) {
      //         lastWorkplaceId = Number(workplaceid);
      //       }
      //     });
      //     value = lastWorkplaceId;
      //   }
      // }

      // if (input) {
      //   input.focus();
      //   input.value = value;
      //   input.blur();
      // }

      // newMode = (canvas?.getMode() !== 'textedit') ? { mode: 'select' } : {};
      return { 
        ...state, 
        updated: action.updated, 
      };

    case 'moveSelected':
      let {dx, dy, event} = action.params;

      if (selectedElement || multiselected) {
        event.preventDefault();
        if (config.gridSnapping) {
          const multi = canvas.getZoom() * config.snappingStep;
          dx *= multi;
          dy *= multi;
        }
        canvas.moveSelectedElements(dx, dy);
      };

      return state
    case 'setIconToPaste':
      addIcon(canvas, action.icon);

      return {
          ...state,
          mode: 'select',
          selectedElement: null,
          multiselected: false,
        };
    default:
      throw new Error(`unknown action type: ${action.type}`)
  }
}

const canvasInitialState = {
  mode: 'select',
  selectedElement: null,
  multiselected: false,
  updated: false,
  zoom: 100,
  iconToPaste: '',
  context: null,
  layerName: '',
}

const canvasContext = React.createContext({})

const CanvasContextProvider = ({ children }) => (
  <canvasContext.Provider
    value={React.useReducer(reducer, canvasInitialState)}
  >
    {children}
  </canvasContext.Provider>
)

export { 
  canvasContext, 
  CanvasContextProvider 
};

// @ts-nocheck
import React from 'react'

import { RectTools } from './RectTools/RectTools';
import { EllipseTools } from './EllipseTools/EllipseTools';
import { CircleTools } from './CircleTools/CircleTools';
import { PathTools } from './PathTools/PathTools';
import { TextTools } from './TextTools/TextTools';
import { GenericTools } from './GenericTools/GenericTools';
import { SaveCloseTools } from './SaveCloseTools/SaveCloseTools';
import { GroupTools } from './GroupTools/GroupTools';
import { AttributesTools } from './AttributesTools/AttributesTools';

import { canvasContext } from '../Context/canvasContext';
import {
  TopBarStyled,
  TopBarBlockStyled,
  LeftSectionStyled,
  RightSectionStyled,
} from './styles/topBar.styled';

const TopBar = ({ svgUpdate, onClose }) => {
  const [canvasState, dispatchCanvasState] = React.useContext(canvasContext)
  const { canvas, selectedElement, updated } = canvasState;
  
  const handleChange = (type, newVal) => {

    const elem = selectedElement
    switch (type) {
      case 'font-family':
        canvasState.canvas.setFontFamily(newVal)
        break
      case 'font-size':
        canvasState.canvas.setFontSize(newVal)
        break
      case 'id':
        // if the user is changing the id, then de-select the element first
        // change the ID, then re-select it with the new ID
        canvasState.canvas.clearSelection();
        elem.id = newVal;
        canvasState.canvas.addToSelection([elem], true)
        break
      case 'mapid':
        console.log('a mapid', elem);
        canvasState.canvas.clearSelection();
        elem.setAttribute('data-mapid', newVal);
        elem.setAttribute('stroke', '#C4C4C4');
        elem.setAttribute('stroke-opacity', '0.1');
        elem.setAttribute('fill', '#ffffff');
        elem.setAttribute('fill-opacity', '0.01');
        canvasState.canvas.addToSelection([elem], true);
        dispatchCanvasState({ type: 'updated', updated: true });
        break
      case 'workplaceid':
        canvasState.canvas.clearSelection();
        elem.setAttribute('data-workplaceid', newVal);
        canvasState.canvas.addToSelection([elem], true);
        dispatchCanvasState({ type: 'updated', updated: true });
        break
      case 'posterid':
        canvasState.canvas.clearSelection();
        elem.setAttribute('data-posterid', newVal);
        canvasState.canvas.addToSelection([elem], true);
        dispatchCanvasState({ type: 'updated', updated: true });
        break
      default:
        console.error(`type (${type}) not supported`)
    }
  }

  let ElementTools
  switch (canvasState.selectedElement?.tagName) {
    case 'rect':
      ElementTools = (
        <RectTools
          canvas={canvas}
          canvasUpdated={updated}
          selectedElement={selectedElement}
          svgUpdate={svgUpdate}
          handleChange={handleChange} 
          onClose={onClose}
        />
      )
      break

    case 'circle':
      ElementTools = (
        <CircleTools
          canvas={canvas}
          canvasUpdated={updated}
          selectedElement={selectedElement}
          handleChange={handleChange} 
          svgUpdate={svgUpdate}
          onClose={onClose}
        />
      )
      break

    case 'ellipse':
      ElementTools = (
        <EllipseTools
          canvas={canvas}
          canvasUpdated={updated}
          selectedElement={selectedElement}
          handleChange={handleChange} 
          svgUpdate={svgUpdate}
          onClose={onClose}
        />
      )
      break

    case 'text':
      ElementTools = (
        <TextTools
          selectedElement={selectedElement}
          handleChange={handleChange}
        />
      )
      break

    case 'path':
      ElementTools = (
        <PathTools
          canvas={canvas}
          canvasUpdated={updated}
          selectedElement={selectedElement}
          handleChange={handleChange} 
          svgUpdate={svgUpdate}
          onClose={onClose}
        />
      )
      break

    case 'g':
    case 'image':
    case 'line':
    case 'polygon':
    case 'polyline':
    case 'textPath':
    default:
      ElementTools = selectedElement && (
        <AttributesTools 
          canvas={canvas}
          selectedElement={selectedElement} 
          handleChange={handleChange} 
          attributes={{}} 
        />
      )
  }

  return (
    <TopBarBlockStyled>
      <TopBarStyled>
        <LeftSectionStyled>
          <GenericTools
            canvas={canvas}
            canvasUpdated={updated}
            selectedElement={selectedElement}
            svgUpdate={svgUpdate}
            onClose={onClose}
          />
          <GroupTools 
            canvas={canvas} 
            multiselected={canvasState.multiselected} 
            selectedElement={selectedElement} 
          />
        </LeftSectionStyled>
        <RightSectionStyled>
          <SaveCloseTools 
            canvas={canvas}
            canvasUpdated={updated}
            onClose={onClose}
            svgUpdate={svgUpdate}
          />
        </RightSectionStyled>
      </TopBarStyled>
      <TopBarStyled>
        {ElementTools && ElementTools}
      </TopBarStyled>
    </TopBarBlockStyled>
  )
}

export {
  TopBar
}
// @ts-nocheck
import React from 'react';
import { defaultLayersName } from '../../..';
import { ButtonStyled } from '../styles/topBar.styled';

import { Input } from './Input';
import { AttributesToolsStyled } from './styles/attributeTools.styled';

const AttributesTools = (props) => {
  const {
    canvas,
    selectedElement,
    handleChange,
    attributes,
  } = props;

  const containerRef = React.useRef();
  let currentLayerName;
  
  if (canvas) {
    const drawing = canvas.getCurrentDrawing();
    currentLayerName = drawing.getCurrentLayerName();
  }

  return(
    <AttributesToolsStyled
      ref={containerRef}
    >
      {/* <label key="tagName">
        Tag:
        <input 
          type="text" 
          name="tagName" 
          readOnly 
          value={selectedElement.tagName ?? ''} 
        />
      </label> */}
      {/* <label key="id">
        Id:
        <Input 
          type="text" 
          name="id" 
          defaultValue={selectedElement.id ?? ''} 
          handleChange={handleChange} 
        />
      </label> */}
      { currentLayerName === defaultLayersName.Areas && (
        <label key="mapid">
          mapId(номер выделенный зоны):
          <Input 
            type="text" 
            name="mapid" 
            id="mapid-input"
            defaultValue={selectedElement.dataset.mapid ?? ''} 
            handleChange={handleChange} 
          />
        </label>
      )}
      { currentLayerName === defaultLayersName.WorkPlaces && (
        <label key="workplaceid">
          workplaceID(номер выделенного стола):
          <Input 
            type="text" 
            name="workplaceid" 
            id="workplaceid-input"
            defaultValue={selectedElement.dataset.workplaceid ?? ''} 
            handleChange={handleChange} 
          />
        </label>
      )}
      { currentLayerName === defaultLayersName.Posters && (
        <label key="posterid">
          posterID(номер постера):
          <Input 
            type="text" 
            name="posterid" 
            defaultValue={selectedElement.dataset.posterid ?? ''} 
            handleChange={handleChange} 
          />
        </label>
      )}
      {/* {Object.entries(attributes).map(([attribute, type]) => {
        const round = (val) => {
          if (Number.isNaN(Number(val))) return val
          return Math.round((Number(val) + Number.EPSILON) * 1000) / 1000
        }
        const value = round(selectedElement.getAttribute(attribute)) ?? ''
        if (Array.isArray(type)) {
          // type is a list of values
          return (
            <label key={attribute}>
              {`${attribute}:`}
              <select defaultValue={value} onChange={(e) => handleChange(attribute, e.target.value)} name={attribute}>
                {type.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          )
        }
        if (type === 'text') {
          return (
            <label key={attribute}>
              {`${attribute}:`}
              <input
                type="text"
                name={attribute}
                onChange={(e) => handleChange(attribute, e.target.value)}
                defaultValue={value}
              />
            </label>
          )
        }
        if (type === 'number') {
          return (
            <label key={attribute}>
              {`${attribute}:`}
              <input
                type="number"
                name={attribute}
                onChange={(e) => handleChange(attribute, e.target.value)}
                defaultValue={value}
              />
            </label>
          )
        }
        // 'readonly field
        return (
          <label key={attribute}>
            {`${attribute}:`}
            <input type="text" name={attribute} readOnly value={value} />
          </label>
        )
      })} */}
      <ButtonStyled>
        Сохранить изменения
      </ButtonStyled>
    </AttributesToolsStyled>
  )
}

export {
  AttributesTools
};

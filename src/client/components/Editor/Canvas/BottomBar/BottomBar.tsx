/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck
import React from 'react'

import * as Icons from '../../../../../common/components/icons/legendIcons';
import { tablesMap, iconsTitleMap } from '../../../Main/Legend/Legend';
import {
  IconBlockContainerStyled,
  IconLabelStyled,
} from '../../../Main/Legend/styles/legend.styled';

// import { IParamsProps } from '../../../app';
// import './BottomBar.less'
// import { ColorButton } from '../ColorButton/ColorButton';
// import { Icon } from '../Icon/Icon';

import { canvasContext } from '../Context/canvasContext';
import { BottomBarStyled, IconsBarStyled, HandleRowStyled } from './styles/bottomBar.styled';

const zoomOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

const BottomBar = () => {
  const [canvasState, canvasStateDispatcher] = React.useContext(canvasContext);

  const { 
    // layerName,
    iconToPaste,
    mode,
    zoom,
  } = canvasState;

  const handleZoom = React.useCallback((newZoom) => {
    canvasStateDispatcher({ type: 'zoom', zoom: Number(newZoom) });
  }, [canvasStateDispatcher]);

  const icons = React.useMemo(() => {
    if (mode !== 'table' && mode !== 'icon') {
      return [];
    }

    let iconsNames;

    if (mode === 'table') {
      iconsNames = tablesMap;
    } else if (mode === 'icon') {
      iconsNames = Object.keys(Icons).filter((icon) => !tablesMap.includes(icon));
    }

    console.log('iconsNames', iconsNames);

    return iconsNames.map((icon) => {  
      const IconComponent = Icons[icon];

      return (
        <HandleRowStyled
          current={iconToPaste === icon}
          tableMode={mode === 'table'}
          onClick={() => canvasStateDispatcher({ type: 'setIconToPaste', icon })}
          key={icon}
        >
          <IconBlockContainerStyled>
            <IconComponent />
          </IconBlockContainerStyled>
          <IconLabelStyled>
            {iconsTitleMap[icon]}
          </IconLabelStyled>
        </HandleRowStyled>
      );
    }).filter(Boolean);
  }, [iconToPaste, mode]);

  return (
    <BottomBarStyled>
      <IconsBarStyled tableMode={mode === 'table'}>
        {icons}
      </IconsBarStyled>
      <select
        value={zoom}
        onChange={(e) => handleZoom(e.target.value)}
      >
        {zoomOptions.map((o) => (
          <option 
            key={o} 
            value={o}
          >
            {`${o}%`}
          </option>
        ))}
      </select>
    </BottomBarStyled>
  )
}

export {
  BottomBar
};

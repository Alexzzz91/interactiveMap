// @ts-nocheck
import React from 'react'
import { Layer, LayerItem } from './LayerItem';
import { 
  ContainerStyled,
  TitleStyled,
  LayersListStyled,
  LayerItemStyled,
  EyeStyled,
} from './styles/selectLayer.styled';

type SelectLayerProps = {
  drawing: any;
  setCurrentLayer(layerName: string): void; 
}

const SelectLayer: React.FC<SelectLayerProps> = ({drawing, setCurrentLayer}) => {
  let layer = drawing.getNumLayers();
  const currentLayerName = drawing.getCurrentLayerName();

  const layers: Layer[] = [];

  while (layer--) {
    const name = drawing.getLayerName(layer);
    const visibility = drawing.getLayerVisibility(name);
    layers.push({ name, visibility });
  }

  return (
      <ContainerStyled>
         <TitleStyled>
            Cлои 
          </TitleStyled>
          <LayersListStyled>
            {layers.map((layer) => {
              return (
                <LayerItem
                  key={layer.name}
                  layer={layer}
                  current={currentLayerName === layer.name}
                  setCurrentLayer={setCurrentLayer}
                />
              );
            })}
          </LayersListStyled>
      </ContainerStyled>
  );
};

export { 
    SelectLayer
};

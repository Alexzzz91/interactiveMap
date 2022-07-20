// @ts-nocheck
import * as React from 'react';
import { 
  LayerItemStyled,
  EyeStyled,
} from './styles/selectLayer.styled';

type Layer = {
    name: string;
    visibility: boolean;
}

type LayerItemProps = {
    current: boolean;
    layer: Layer;
    setCurrentLayer(layerName: string): void; 
}

const LayerItem: React.FC<LayerItemProps> = ({current, layer, setCurrentLayer}) => {
    const handleOnClick = React.useCallback(() => {
        setCurrentLayer(layer.name);
    }, [layer, setCurrentLayer])

    return (
        <LayerItemStyled
            current={current}
            onClick={handleOnClick}
        >
            <EyeStyled
                width={16}
                height={16}
                viewBox="0 0 519.578 519.578" 
            />
            {layer.name}
        </LayerItemStyled>
    );
};

export { 
    LayerItem,
};

export type {
    Layer,
}

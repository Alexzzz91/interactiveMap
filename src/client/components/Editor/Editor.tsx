// @ts-nocheck
import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Canvas } from './Canvas/Canvas';
import { updateLevelSchema } from '../../gql/floorGql';
import { IParamsProps } from '../app';
import { ErrorBoundary } from '../../../common/components/ErrorBoundary/ErorrBoundary';
import { editorAddRoute } from '../../../common/routerPaths';

const config = {
  debug: true,
  i18n: 'fr',
  saveHandler: null,
  onCloseHandler: null,
  extensions: [],
  debugPrefix: 'editor',
};

type EditorProps = {
  initialSvgContent: string;
  currentCity?: string;
  currentAddress?: string;
}

const Editor: React.FC<EditorProps> = ({ initialSvgContent, currentCity, currentAddress }) => {
  const { pathname } = useLocation();
  const history = useNavigate();
  const { floorIndex } = useParams<IParamsProps>();
  const [svgContent, setSvgContent] = React.useState(initialSvgContent);
  const [updateLevelSchemaMut] = useMutation(updateLevelSchema);

  const svgUpdate = React.useCallback((svgContent) => {
    const newSvgContent = svgContent;
    
    console.log('1111 svgContent', svgContent);

    setSvgContent(newSvgContent);

    if (config.saveHandler !== null) {
      config.saveHandler(newSvgContent)
    }

    updateLevelSchemaMut({ 
      variables: { 
        name: 'Новая схема офиса',
        index: floorIndex || '1',
        levelSchema: newSvgContent,
        city: currentCity,
        address: currentAddress,
      }
    });

  }, [setSvgContent, updateLevelSchemaMut, floorIndex, currentCity, currentAddress]);

  React.useEffect(() => {
    console.log('svgContent', svgContent);
  }, [svgContent]);

  const onClose = React.useCallback((e) => {
    if (pathname.includes(editorAddRoute)) {
      history('/');

      return;
    }

    history(pathname.replace('/editor', ''));
  }, [history, pathname]);

  const logDebugData = React.useCallback((e) => {
    console.log('logDebugData e', e);
  }, []);

  return (
    <ErrorBoundary>
      <Canvas
        setSvgContent={setSvgContent}
        svgContent={svgContent}
        locale={config.i18n}
        svgUpdate={svgUpdate}
        onClose={onClose}
        log={logDebugData}
      />
    </ErrorBoundary>
  );
};

export {
  Editor as default
};
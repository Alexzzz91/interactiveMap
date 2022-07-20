// @ts-nocheck
import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory, useLocation, useParams } from 'react-router-dom';

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

const Editor = ({ initialSvgContent }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { floorIndex } = useParams<IParamsProps>();
  const [svgContent, setSvgContent] = React.useState(initialSvgContent);
  const [updateLevelSchemaMut] = useMutation(updateLevelSchema);

  const svgUpdate = React.useCallback((svgContent) => {
    const newSvgContent = svgContent;
    
    setSvgContent(newSvgContent);

    if (config.saveHandler !== null) {
      config.saveHandler(newSvgContent)
    }

    updateLevelSchemaMut({ 
      variables: { 
        name: 'Новая схема офиса',
        index: floorIndex || '1',
        levelSchema: newSvgContent,
      }
    });

  }, [setSvgContent, updateLevelSchemaMut, floorIndex]);

  // React.useEffect(() => {
  //   console.log('svgContent', svgContent);
  // }, [svgContent]);

  const onClose = React.useCallback((e) => {
    if (pathname.includes(editorAddRoute)) {
      history.push('/');

      return;
    }

    history.push(pathname.replace('/editor', ''));
  }, [history, pathname]);

  const logDebugData = React.useCallback((e) => {
    console.log('logDebugData e', e);
  }, []);

  return (
    <ErrorBoundary>
      <Canvas
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
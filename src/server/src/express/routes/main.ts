import express from 'express';
import { allRoutes, allEditorRoutes, login } from '../../../../common/routerPaths';

const router = express.Router();

router.get([...allRoutes, ...allEditorRoutes, login], (_req, res) => {
  res.sendFile('dist/index.html', { root: process.cwd() });
});

export {
  router
};

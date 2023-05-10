import express from 'express';
import { allRoutes, allEditorRoutes, login, administrationRoute } from '../../../../common/routerPaths';

const router = express.Router();

router.get([...allRoutes, ...allEditorRoutes, administrationRoute, login], (_req, res) => {
  res.sendFile('dist/index.html', { root: process.cwd() });
});

export {
  router
};

const floorPath = '/fl:floorIndex(\\d+)';
const departmentPath = '/dp:depId';
const userPath = '/us_:userId(\\w+)';
const placePath = 'place:idPlace(\\d+)';
const workplacePath = 'wp:idWorkplace';
const posterPath = 'poster:idPoster(\\d+)';
const login = '/login';

const allRoutes = [
  `${floorPath}`,
  `${floorPath}${departmentPath}`,
  `${floorPath}${workplacePath}`,
  `${floorPath}${placePath}`,
  `${floorPath}${posterPath}`,
  `${floorPath}${departmentPath}${userPath}`,
  `${floorPath}/${placePath}${userPath}`,
  `${userPath}`,
  `${departmentPath}`,
  '/',
];

const editorRoutes = '/editor/*';
const allEditorRoutes = allRoutes.map((route) => `/editor${route}`);

const editorAddRoute = '/editor/add'; 
const administrationRoute = '/administration'; 

// allRoutes.push(administrationRoute);
allEditorRoutes.push(editorAddRoute);

export { 
  floorPath,
  departmentPath,
  userPath, 
  placePath, 
  workplacePath, 
  allRoutes,
  editorRoutes,
  allEditorRoutes,
  editorAddRoute,
  administrationRoute,
  login
};

// @ts-nocheck
const config = {
  canvasName: 'officeMap',
  // The minimum area visible outside the canvas, as a multiple of the image dimensions.
  // The larger the number, the more one can scroll outside the canvas.
  canvas_expansion: 1.5,
  initFill: {
    color: 'ffffff', // solid red
    opacity: 0.01,
  },
  initStroke: {
    width: 1,
    color: 'C4C4C4', // solid black
    opacity: 1,
  },
  text: {
    stroke_width: 0,
    font_size: 24,
    font_family: 'serif',
  },
  initOpacity: 1,
  colorPickerCSS: true,
  initTool: 'select',
  exportWindowType: 'new', // 'same' (todo: also support 'download')
  wireframe: true,
  showlayers: true,
  no_save_warning: true,
  // PATH CONFIGURATION
  // The following path configuration items are disallowed in the URL (as should any future path configurations)
  langPath: 'locale/', // Default will be changed if this is a non-modular load
  extPath: 'extensions/', // Default will be changed if this is a non-modular load
  canvgPath: 'canvg/', // Default will be changed if this is a non-modular load
  jspdfPath: 'jspdf/', // Default will be changed if this is a non-modular load
  imgPath: 'images/',
  jGraduatePath: 'jgraduate/images/',
  extIconsPath: 'extensions/',
  // DOCUMENT PROPERTIES
  // Change the following to a preference (already in the Document Properties dialog)?
  dimensions: [640, 480],
  // EDITOR OPTIONS
  // Change the following to preferences (already in the Editor Options dialog)?
  gridSnapping: true,
  gridColor: 'red',
  baseUnit: 'px',
  snappingStep: 2,
  showRulers: true,
  // EXTENSION-RELATED (GRID)
  userExtensions: ['polygon', 'grid'],
  showGrid: true, // Set by ext-grid.js
}

export {
  config
};

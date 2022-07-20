// @ts-nocheck
// General imports
import React from 'react'

import { themeColors } from '../../../../../common/commonValues';
import { 
  Ellipse, 
  Line,  
  Text, 
  Delete, 
  Undo,
  Redo,
  Clone,
  Close,
  Save,
  Icon as IconIcon,
  Table,
  Circle,
  Rect,
  Square,
  Path,
  Unite,
  Exclude,
  Select,
} from './assets/img';

import group from './images/group_elements.png';
import alignBottom from './images/align-bottom.png';
import alignCenter from './images/align-center.png';
import alignTop from './images/align-top.png';
import alignLeft from './images/align-left.png';
import alignRight from './images/align-right.png';
import alignMiddle from './images/align-middle.png';
import align from './images/align.png';
import moveBottom from './images/move_bottom.png';
import moveTop from './images/move_top.png';
import bold from './images/bold.png';
import italic from './images/italic.png';
import fill from './images/fill.png';
import stroke from './images/stroke.png';
import fontSize from './images/fontsize.png';
import noColor from './images/no_color.png';
import zoom from './images/zoom.png';

const Icon1 = ({ name, ...otherProps }) => {
  switch (name) {
    case 'Select':
      return (
        <Select
          fill={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'Line':
      return (
        <Line
          fill={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'Circle':
      return (
        <Circle
          color={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'Ellipse':
      return (
        <Ellipse
          fill={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'Text':
      return (
        <Text
          fill={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'Delete':
      return (
        <Delete
          color={themeColors.madrid}
          {...otherProps}
        />
      );
    case 'Clone':
      return (
        <Clone
          color={themeColors.madrid}
          {...otherProps}
        />
      );
    case 'Path':
      return (
        <Path
          fill={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'Square':
      return (
        <Square 
          fill={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'Rect':
      return (
        <Rect
          fill={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'Close':
      return (
        <Close
          color={themeColors.madrid}
          {...otherProps}
        />
      );
    case 'Save':
      return (
        <Save
          color={themeColors.madrid}
          {...otherProps}
        />
      );
    case 'Undo':
      return (
        <Undo
          color={themeColors.madrid}
          {...otherProps}
        />
      );
    case 'Redo':
      return (
        <Redo
          color={themeColors.madrid}
          {...otherProps}
        />
      );
    case 'Group':
      return (
        <Unite
          fill={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'Ungroup':
      return (
        <Exclude 
          fill={themeColors.madrid}
          width='20px'
          height='20px'
          {...otherProps}
        />
      );
    case 'AlignBottom':
      return (
        <img 
          src={alignBottom}
          alt="group"
          {...otherProps}
        />
      );
    case 'AlignCenter':
      return (
        <img 
          src={alignCenter}
          alt="group"
          {...otherProps}
        />
      );
    case 'AlignTop':
      return (
        <img 
          src={alignTop}
          alt="group"
          {...otherProps}
        />
      );
    case 'AlignLeft':
      return (
        <img 
          src={alignLeft}
          alt="group"
          {...otherProps}
        />
      );
    case 'AlignRight':
      return (
        <img 
          src={alignRight}
          alt="group"
          {...otherProps}
        />
      );
    case 'AlignMiddle':
      return (
        <img 
          src={alignMiddle}
          alt="group"
          {...otherProps}
        />
      );
    case 'Align':
      return (
        <img 
          src={align}
          alt="group"
          {...otherProps}
        />
      );
    case 'MoveBottom':
      return (
        <img 
          src={moveBottom}
          alt="group"
          {...otherProps}
        />
      );
    case 'MoveTop':
      return (
        <img 
          src={moveTop}
          alt="group"
          {...otherProps}
        />
      );
    case 'Bold':
      return (
        <img 
          src={bold}
          alt="group"
          {...otherProps}
        />
      );
    case 'Italic':
      return (
        <img 
          src={italic}
          alt="group"
          {...otherProps}
        />
      );
    case 'Fill':
      return (
        <img 
          src={fill}
          alt="group"
          {...otherProps}
        />
      );
    case 'Stroke':
      return (
        <img 
          src={stroke}
          alt="group"
          {...otherProps}
        />
      );
    case 'FontSize':
      return (
        <img 
          src={fontSize}
          alt="group"
          {...otherProps}
        />
      );
    case 'NoColor':
      return (
        <img 
          src={noColor}
          alt="group"
          {...otherProps}
        />
      );
    case 'Zoom':
      return (
        <img 
          src={zoom}
          alt="group"
          {...otherProps}
        />
      );
    case 'Icon':
      return (
        <IconIcon 
          {...otherProps}
        />
      );
    case 'Table':
      return (
        <Table 
          {...otherProps}
        />
      );
    default:
      return (
        <img 
          src={group}
          alt="group"
          {...otherProps}
        />
      ); 
  }
}

export {
  Icon1 as Icon
};

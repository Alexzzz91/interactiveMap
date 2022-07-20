import * as React from 'react';
import { IconStyled } from './styles/Icon.styled';

    // @ts-ignore
const Icon = ({ name, ...props }) => (
  <IconStyled {...props}>
    <use xlinkHref={`#icon-${name}`} />
  </IconStyled>
);

export { Icon };

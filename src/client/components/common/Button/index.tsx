import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @ts-ignore
import style from './styles/button.less';

    // @ts-ignore
const Button = ({ children, additionalStyles, small, dark, disabled, ...props }) => (
  <button
    type="button"
    className={cn(style.boxbutton, {
      [additionalStyles]: !!additionalStyles,
      [style.boxbutton__dark]: dark,
      [style.boxbutton__small]: small,
      [style.boxbutton__disabled]: disabled,
    })}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  dark: false,
  small: false,
  disabled: false,
  additionalStyles: null,
};

Button.propTypes = {
  dark: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  additionalStyles: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export { Button };

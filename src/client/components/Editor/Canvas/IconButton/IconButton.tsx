import React, { MouseEvent } from 'react';

import { Icon } from '../Icon/Icon';
import { IconButtonStyled } from './styles/iconButton.styled';

type IconButtonProps = {
  onClick(event?: MouseEvent): void; 
  className?: string; 
  icon: string;
  useTitle?: boolean;
  disabled?: boolean;
};

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { 
    onClick, 
    className = 'button', 
    icon,
    useTitle = true,
    disabled = false,
    ...rest
  } = props;

  return (
    <IconButtonStyled
      type="button" 
      className={className} 
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <Icon name={icon} />
      { useTitle && (
        <>
          <br />
          {icon}
        </>
      )}
    </IconButtonStyled>
  );
}

export {
  IconButton
}

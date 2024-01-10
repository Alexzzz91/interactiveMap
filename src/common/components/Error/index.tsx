import React from 'react'
import { ErorrContainerStyled } from './styles/error.styled';

type ErrorProps = {
  text?: string;
};

const Error: React.FC<ErrorProps> = ({ text = 'Произошла ошибка =(' }) => {

  return (
    <ErorrContainerStyled>
      { text }
    </ErorrContainerStyled>
  );
};

export { 
  Error,
};

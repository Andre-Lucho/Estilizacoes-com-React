import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ variant = 'solid', children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

import React, { ReactNode } from "react";
import { StyledInput, StyledInputContainer } from "./Input.styled";

interface IInput extends Omit<Partial<React.ComponentProps<'input'>>, 'size'> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'lg' | 'sm' | undefined;
  value?: string | undefined | string[];
}

export const Input: React.FC<IInput> = ({ icon, iconPosition = 'right', size, ...otherProps }) => {
  return icon ? (
    <StyledInputContainer iconPosition={iconPosition}>
      <div className="icon">{icon}</div>
      <StyledInput size={size} {...otherProps} />
    </StyledInputContainer>
  ) : (
    <StyledInput size={size} {...otherProps} />
  );
};

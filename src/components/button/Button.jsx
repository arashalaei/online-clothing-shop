import React from 'react';
import {ButtonContainer} from './button.styles';

const Button = ({children, ...otherProps}) => (
    <ButtonContainer {...otherProps}>{children}</ButtonContainer>
);

export default Button;
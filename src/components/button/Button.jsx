import React from 'react';


const Button = ({children, color, ...otherProps}) => (
    <button className={`btn btn--${color}`} {...otherProps}>{children}</button>
);

export default Button;
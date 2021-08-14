import React from 'react';


const Button = ({children, color}) => (
    <button className={`btn btn--${color}`}>{children}</button>
);

export default Button;
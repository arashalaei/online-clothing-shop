import React from 'react';


const FormInput = ({type, label, handleChange , name, ...otherProps}) => (
    <div className="form__group">
        <input type={type} id={label.toLowerCase()} name={name || label.toLowerCase()}className="form__input" placeholder={label} onChange={handleChange} {...otherProps} required />
        <label htmlFor={label} className="form__label">{label}</label>
    </div>
);

export default FormInput;
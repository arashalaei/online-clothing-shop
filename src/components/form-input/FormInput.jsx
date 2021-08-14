import React from 'react';


const FormInput = ({type, label, handleChange}) => (
    <div className="form__group">
        <input type={type} id={label.toLowerCase()} name={label.toLowerCase()}className="form__input" placeholder={label} onChange={handleChange} required />
        <label htmlFor={label} className="form__label">{label}</label>
    </div>
);

export default FormInput;
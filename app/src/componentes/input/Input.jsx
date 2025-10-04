

import style from './input.module.css';
import React from 'react';



const Input = ({ label, type, placeholder, value, onChange, required }) => {
  return (
    <div className={style.input_container}>
      <label className={style.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
export default Input;

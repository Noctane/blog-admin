import React from 'react';

function Input({ className, type, onInputChange, placeholder }) {
  return (
    <input
      className={`${className} p-4 border border-gray-200 rounded-md`}
      type={type}
      onChange={onInputChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
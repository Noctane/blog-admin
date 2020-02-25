import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(({ className, type, onInputChange, placeholder, style }, ref) => (
  <input
    className={`${className} px-4 py-2 border border-gray-200 rounded-md`}
    style={style}
    type={type}
    ref={ref}
    onChange={onInputChange}
    placeholder={placeholder}
  />
));

Input.propTypes = {
  className: PropTypes.string,
  onInputchange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string.isRequired,
}

Input.defaultProps = {
  className: '',
  placeholder: '',
  style: null,
  onInputChange: null,
}

export default Input;
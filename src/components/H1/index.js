import React from 'react';
import PropTypes from 'prop-types';

function H1({ className, style, children }) {
  return <h1 className={`${className} text-2xl font-semibold mb-4`} style={style}>{children}</h1>;
}

H1.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: function(props, propName, componentName) {
    if (!props[propName]) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. You must provide a children to ' + componentName + '.'
      );
    }
  }
};

H1.defaultProps = {
  className: '',
  style: null,
};

export default H1;
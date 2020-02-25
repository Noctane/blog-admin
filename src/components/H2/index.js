import React from 'react';
import PropTypes from 'prop-types';

function H2({ className, style, children }) {
  return <h2 className={`${className} text-xl font-semibold mb-4`} style={style}>{children}</h2>;
}

H2.propTypes = {
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

H2.defaultProps = {
  className: '',
  style: null,
};

export default H2;
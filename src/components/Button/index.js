import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const colors = ['gray', 'blue', 'teal', 'green', 'yellow', 'orange', 'red', 'purple'];

function Button(props) {
  const { busy, to, className, href, onButtonClick, style, type, label, children, bgColor } = props;

  const history = useHistory();

  let btnContent = label || children;
  let finalClassNames = `block bg-${bgColor}-500 py-2 px-4 rounded-md text-white ${className}`;

  const onClick = (event) => {
    if(to) {
      event.preventDefault();
      history.push(to);
    };
    if (onButtonClick) {
      onButtonClick(event);
    }
  }

  if (busy) {
    btnContent = '...'
  }

  if (href) {
    const linkProps = {
      className: finalClassNames,
      href,
      onClick,
      style,
    }
    return (
      <a {...linkProps}>{btnContent}</a>
    )
  }

  return (
    <button
      className={finalClassNames}
      type={type}
      onClick={onClick}
      >
        {btnContent}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  onButtonClick: PropTypes.func,
    bgColor: function(props, propName, componentName) {
      if (!colors.includes(props[propName])) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. You must provide a valid color between ' + colors.map(c => `${c}`) + '.'
        );
      }
    }
}

Button.defaultProps = {
  className: '',
  style: null,
  type: '',
  label: '',
  bgColor: 'blue',
  onButtonClick: null,
}

export default Button;
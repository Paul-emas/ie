import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, disabled, primary, white, light, onClick, children }) => {
  let color = '';

  switch (primary) {
    case light:
      color = 'bg-primary-light active:opacity-80 text-primary-base';
      break;
    case white:
      color = 'bg-white active:opacity-80 text-primary-base';
      break;
    case disabled:
      color =
        'bg-primary-base text-white hover:bg-primary-hover active:bg-primary-active pointer-events-none opacity-70';
      break;
    default:
      color = 'bg-primary-base text-white hover:bg-primary-hover active:bg-primary-active';
  }

  return (
    <button
      onClick={onClick}
      className={`${color} ${className} rounded-lg px-4 py-3 text-xs font-bold uppercase lg:px-6 lg:text-sm`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  primary: true,
  light: false,
  white: false,
};

Button.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;

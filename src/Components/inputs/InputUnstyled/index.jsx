import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

class InputUnstyled extends Component {
  getClassName = () => {
    const { className } = this.props;
    return className ? `${style.wrap} ${className}` : style.wrap;
  }

  render() {
    const { getClassName } = this;
    const { className, ...attributes } = this.props;
    return (
      <input
        className={getClassName()}
        type="text"
        {...attributes}
      />
    );
  }
}

InputUnstyled.propTypes = {
  className: PropTypes.string,
};

InputUnstyled.defaultProps = {
  className: null,
};

export default InputUnstyled;

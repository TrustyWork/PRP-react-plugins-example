import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class InputWrap extends Component {
  getClassName = () => {
    const { className } = this.props;
    return className ? `${style.wrap} ${className}` : style.wrap;
  }

  handleClick = () => {
    const { children } = this.props;
    children.click();
  }

  render() {
    const { getClassName, handleClick } = this;
    const { className, children, ...attributes } = this.props;

    return (
      <div
        className={getClassName()}
        onClick={handleClick}
        {...attributes}
      >
        {children}
      </div>
    );
  }
}

InputWrap.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

InputWrap.defaultProps = {
  className: null,
};

export default InputWrap;

import React, { Component } from 'react';
import Downshift from 'downshift';
import classNames from 'classnames';
import InputWrap from 'Components/inputs/InputWrap';
import InputUnstyled from 'Components/inputs/InputUnstyled';

import style from './style.scss';
import imgArrow from './img/arrow.png';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = (ev) => {
    console.log('ev', ev);
  }

  itemToString = (item) => {
    console.log('item', item);

    if (item) {
      return item.value;
    }
    return '';
  }

  Arrow = (props) => {
    const { isOpen } = props;
    const className = classNames(style.arrow, { [style.open]: isOpen });
    return (
      <div className={className}>
        <img src={imgArrow} alt="" />
      </div>
    );
  }

  stateReducer = (state, changes) => {
    switch (changes.type) {
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      return {
        ...changes,
        isOpen: state.isOpen,
        highlightedIndex: state.highlightedIndex,
      };
    default:
      return changes;
    }
  }

  render() {
    const { handleChange, items } = this.props;
    const { itemToString, Arrow } = this;
    return (
      <Downshift
        onChange={handleChange}
        itemToString={itemToString}
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          getToggleButtonProps,
        }) => (
          <div>
            <div>
              Value: {inputValue}
            </div>
            <div>
              Label: {selectedItem ? selectedItem.label : ''}
            </div>
            <div>
              Search: <input {...getInputProps()} />
            </div>
            <InputWrap
              {...getToggleButtonProps()}
            >
              <InputUnstyled
                defaultValue="RUS"
              />
              <Arrow
                isOpen={isOpen}
              />
            </InputWrap>
            <ul {...getMenuProps()}>
              {isOpen
                ? items
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                        style: {
                          backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item.value}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    );
  }
}

export default Select;

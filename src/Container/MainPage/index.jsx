import React, { Component } from 'react';

import Select from 'Components/inputs/Select';

import 'normalize.css';
import style from './style.scss';


const items = [
  { value: 'rus', label: 'RUS' },
  { value: 'eng', label: 'ENG' },
];

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Select
          items={items}
        />
        <div className={style.placeholder} />
        <br />
      </div>
    );
  }
}

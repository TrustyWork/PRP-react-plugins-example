import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import MainPage from 'Container/MainPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Scrollbars
        style={{ height: '100vh' }}
      >
        <MainPage />
      </Scrollbars>
    );
  }
}

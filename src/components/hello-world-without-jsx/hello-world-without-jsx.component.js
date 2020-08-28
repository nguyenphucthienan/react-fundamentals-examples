import React, { Component } from 'react';

class HelloWorldWithoutJSX extends Component {
  render() {
    return React.createElement(
      'div',
      {},
      React.createElement('h1', {}, 'Hello World!')
    );
  }
}

export default HelloWorldWithoutJSX;

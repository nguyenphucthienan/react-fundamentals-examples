import React, { Component } from 'react';

import './hello.styles.scss';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'KMS Technology'
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState({ name: 'Elsevier' });
  }

  render() {
    const { name } = this.state;
    return (
      <div className='hello-container'>
        <h1>Hello {name}</h1>
        <button className='change-name-button' onClick={this.changeName}>
          Change Name
        </button>
      </div>
    );
  }
}

export default Hello;

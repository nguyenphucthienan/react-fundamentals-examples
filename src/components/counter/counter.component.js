import React, { Component } from 'react';

import './counter.styles.scss';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const { number } = this.state;
    this.setState({ number: number + 1 });
  }

  decrement() {
    const { number } = this.state;
    this.setState({ number: number - 1 });
  }

  render() {
    const { number } = this.state;
    return (
      <div className='counter-container'>
        <button className='action-button' onClick={this.decrement}>
          -
        </button>
        <p className='number'>{number}</p>
        <button className='action-button' onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;

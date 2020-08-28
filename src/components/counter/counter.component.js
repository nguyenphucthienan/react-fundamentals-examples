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

  increase() {
    const { number } = this.state;
    this.setState({ number: number + 1 });
  }

  decrease() {
    const { number } = this.state;
    this.setState({ number: number - 1 });
  }

  render() {
    const { number } = this.state;
    return (
      <div className='counter-container'>
        <button className='action-button' onClick={this.decrease}>
          -
        </button>
        <p className='number'>{number}</p>
        <button className='action-button' onClick={this.increase}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;

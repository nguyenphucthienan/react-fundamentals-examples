import React, { Component } from 'react';

import './lifecycles.styles.scss';

class LifeCycles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };

    this.increase = this.increase.bind(this);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  increase() {
    const { number } = this.state;
    this.setState({ number: number + 1 });
  }

  render() {
    const { number } = this.state;
    return (
      <div className='lifecycles'>
        <p className='number'>{number}</p>
        <button className='action-button' onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}

export default LifeCycles;

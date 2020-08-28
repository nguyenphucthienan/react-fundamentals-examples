import React, { Component } from 'react';

import LifeCycles from '../lifecycles/lifecycles.component';

import './lifecycles-container.styles.scss';

class LifeCyclesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    const { hidden } = this.state;
    this.setState({ hidden: !hidden });
  }

  render() {
    const { hidden } = this.state;
    return (
      <div className='lifecycles-container'>
        <button className='action-button' onClick={this.toggleHidden}>
          Toggle
        </button>
        {hidden ? null : <LifeCycles />}
      </div>
    );
  }
}

export default LifeCyclesContainer;

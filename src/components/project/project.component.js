import React, { Component } from 'react';

class Project extends Component {
  render() {
    const { name } = this.props;
    return <h3>{name}</h3>;
  }
}

export default Project;

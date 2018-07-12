import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div className="list-group-item">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default City;

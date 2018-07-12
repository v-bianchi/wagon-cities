import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';


class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        <p>{this.props.city.name}</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

// function mapStateToProps(state) {
//   return {
//     selectedCity: state.selectedCity
//   };
// }

export default connect(null, mapDispatchToProps) (City);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  render() {
    if (this.props.selectedCity) {
      return (
        <div className="active-city">
          <h3>{this.props.selectedCity.name}</h3>
          <p>{this.props.selectedCity.address}</p>
          <img
            src={`https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`}
            alt={`Le Wagon ${this.props.selectedCity.name}`}
          />
        </div>
      )
    } else {
      return (
        <div className="active-city"></div>
      )
    }
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { selectCities },
//     dispatch
//   );
// }

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps, null) (ActiveCity);

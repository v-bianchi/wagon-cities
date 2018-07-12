import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city';


class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderList = () => {
    return this.props.cities.map((city, index) =>
      <City
        name={city.name}
        key={city.slug}
        address={city.address}
        imageUrl={`https://kitt.lewagon.com/placeholder/cities/${city.slug}`}
      />
    )
  }

  render() {
    return (
      <div className="cities">
        {this.renderList()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CityList);

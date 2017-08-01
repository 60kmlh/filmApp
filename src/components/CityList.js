import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleCity } from '../actions/city'

class CityList extends Component {
  render() {
    return (
      <div>
        {
          this.props.cityList.map((city, inedx) => {
            return (
              <li onClick={() => this.toggleCity(city)} key={city.id} style={{float:'left',listStyle:'none'}}>
                {city.city_name}
              </li>
            )
          })
        }
      </div>
    )
  }
  toggleCity(city) {
    this.props.dispatch(toggleCity(city))
  }
}

const mapStateToProps = (state) => {
  return {cityList: state.city.cityList}
}

export default connect(mapStateToProps)(CityList)
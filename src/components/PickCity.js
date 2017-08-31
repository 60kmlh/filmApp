import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CityPicker } from 'react-weui'
import CnCity from '../constants/CnCity'
import { setCityPanel } from '../actions/city'

class PickCity extends Component {
  render() {
    return (
      <div>
        <CityPicker
         data={CnCity}
         onChange={text => this.changeCity(text)}
         show={this.props.showCity}
        />
      </div>
    )
  }
  changeCity(city) {
    console.log(city)
    this.props.dispatch(setCityPanel(false))
  }
}

const mapStateToProps = (state) => {
  return {showCity: state.city.showPanel}
}

export default connect(mapStateToProps)(PickCity)

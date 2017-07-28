import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Film from './Film/Index'
import Cenimas from './Cinemas/Index'
import Tab from '../components/Tab'
import CityList from '../components/CityList'
import { setCityPanel } from '../actions/city'

class App extends Component {
  render() {
    return (
      <div>
      <span>{this.props.city}</span>
      <span onClick={() => this.toggleCityPanel()}>toggle</span>
        {this.props.showCityList ? <CityList /> : ''}
        <Route path='/film' component={Film}></Route>
        <Route path='/cinemas' component={Cenimas}></Route>
        <Tab />
      </div>
    )
  }
  toggleCityPanel() {
    this.props.dispatch(setCityPanel(true))
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.city.value,
    showCityList: state.city.showPanel
  }
}

export default connect(mapStateToProps, null ,null, {pure:false})(App)

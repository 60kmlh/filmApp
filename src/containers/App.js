import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Film from './Film/Index'
import Cenimas from './Cinemas/Index'
import Tab from '../components/Tab'
import CityList from '../components/CityList'
import { setCityPanel, queryCityList } from '../actions/city'

// import asyncComponent from '../components/asyncComponent'

// const AsyncFilm = asyncComponent(() => import('./Film/Index'))
// const AsyncCenimas = asyncComponent(() => import('./Cinemas/Index'))

class App extends Component {
  render() {
    return (
      <div>
      <span>{this.props.city.city_name}</span>
      <span onClick={() => this.toggleCityPanel()}>toggle</span>
        {this.props.showCityList ? <CityList /> : ''}
        <Route path='/film' component={Film}></Route>
        <Route path='/' component={Film}></Route>
        <Route path='/cinemas' component={Cenimas}></Route>
        <Tab />
      </div>
    )
  }
  componentWillMount() {
    this.props.dispatch(queryCityList())
  }
  toggleCityPanel() {
    this.props.dispatch(setCityPanel(true))
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.city.cur,
    showCityList: state.city.showPanel
  }
}

export default connect(mapStateToProps, null ,null, {pure:false})(App)

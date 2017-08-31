import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Film from './Film/Index'
import Cenimas from './Cinemas/Index'
import CityList from '../components/CityList'
import { setCityPanel, queryCityList } from '../actions/city'

import { TabBar, TabBarItem } from 'react-weui'

import PickCity from '../components/PickCity'

import createHistory from 'history/createHashHistory'

const history = createHistory()

// import asyncComponent from '../components/asyncComponent'

// const AsyncFilm = asyncComponent(() => import('./Film/Index'))
// const AsyncCenimas = asyncComponent(() => import('./Cinemas/Index'))

class App extends Component {
  render() {
    return (
      <div>
      <PickCity />
      <span>{this.props.city.city_name}</span>
      <span onClick={() => this.toggleCityPanel()}>toggle</span>
        {this.props.showCityList ? <CityList /> : ''}
        <Route exact path='/' component={Film}></Route>
        <Route path='/film' component={Film}></Route>
        <Route path='/cinemas' component={Cenimas}></Route>
        <TabBar style={{position: 'fixed', bottom: '0'}}>
          <TabBarItem 
            active={true}
            onClick={() => history.push('/film')}
            label="电影"
          />
          <TabBarItem 
            active={true}
            onClick={() => history.push('/cinemas')}
            label="影院"
          />
        </TabBar>
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

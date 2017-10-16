import React, { Component } from 'react'
import CityList from './CityList'
import { Link } from 'react-router-dom'
import { setCityPanel, queryCityList } from '../actions/city'
import { connect } from 'react-redux'

import '../assets/style/head'

class Head extends Component {
  render() {
    return (
      <div className='head'>
        <span className='cur' onClick={() => this.toggleCityPanel()}>{this.props.city.city_name}</span>
        <Link className='search' to='/film/search'>搜索</Link>
        {this.props.showCityList ? <CityList /> : ''}
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

export default connect(mapStateToProps)(Head)

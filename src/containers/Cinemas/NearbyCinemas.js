import React, { Component } from 'react'
import CinemasList from '../../components/CinemasList'
import Head from '../../components/Head'
import Tab from '../../components/Tab'
import { connect } from 'react-redux'
import { queryNearbyCinemas } from '../../actions/cinemas'

class NearbyCinemas extends Component {
  componentDidMount() {
    // this.props.dispatch(queryNearbyCinemas())
  }
  render() {
    return (
      <div>
        <Head type='cinemas' />
        <CinemasList />
        <Tab />
      </div>
    )
  }
}

export default connect()(NearbyCinemas)

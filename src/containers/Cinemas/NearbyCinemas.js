import React, { Component } from 'react'
import CinemasList from '../../components/CinemasList'
import { connect } from 'react-redux'
import { queryNearbyCinemas } from '../../actions/cinemas'

class NearbyCinemas extends Component {
  componentDidMount() {
    this.props.dispatch(queryNearbyCinemas())
  }
  render() {
    return (
      <div>
        <CinemasList />
      </div>
    )
  }
}

export default connect()(NearbyCinemas)

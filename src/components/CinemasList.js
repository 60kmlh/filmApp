import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CinemasList extends Component {
  render() {
    return (
      <div>
        {
          this.props.cinemasList.map((cinemas, index) => {
            return (
              <div key={cinemas.id}>
                <span>{cinemas.cinemaName}</span>
                <br/>
                <span>{cinemas.address}</span>
                <Link to={{pathname:'/cinemas/online/', search: '?cinemaid=' + cinemas.id}} >详情</Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cinemasList: state.cinemas.cinemasList
  }
}

export default connect(mapStateToProps)(CinemasList)
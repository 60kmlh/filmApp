import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CinemasList extends Component {
  render() {
    return (
      <div className='cinemasList'>
        {
          this.props.cinemasList.map((cinemas, index) => {
            return (
              <li key={cinemas.id}>
                <span className='name'>{cinemas.cinemaName}</span>
                <br/>
                <span className='address'>{cinemas.address}</span>
                <Link className='book buy_btn' to={{pathname:'/cinemas/online/', search: '?cinemaid=' + cinemas.id}} >详情</Link>
              </li>
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
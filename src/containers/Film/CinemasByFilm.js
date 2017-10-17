import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getQueryParams } from '../../lib/utils'
import { film_cinemas_api } from '../../lib/api'
import Back from '../../components/Back'
import '../../assets/style/cinemasByFilm'

class CinemasByFilm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cinemasList: []
    }
  }
  componentDidMount() {
    this.getCinemasByFilm()
  }
  render() {
    return (
      <div className='cinemasList'>
        <Back />
        {
          this.state.cinemasList.map((cinema, index) => {
            return (
              <li key={cinema.cinemaId}>
                <span className='name'>
                  {cinema.cinemaName}
                </span>
                <br/>
                <span className='address'>
                  {cinema.address}
                </span>
                <Link className='book buy_btn' to={{pathname: 'bookticket', search: '?cinemaid=' + cinema.cinemaId + '&movieid=' + getQueryParams(this.props.location.search, 'movieid')}}>购票</Link>
              </li>
            )
          })
        }
      </div>
    )
  }
  getCinemasByFilm() {
    axios.get(film_cinemas_api, {params: {movieId: getQueryParams(this.props.location.search, 'movieid')}}).then(res => {
      this.setState({
        cinemasList: res.data.result
      })
    })
  }
}

export default CinemasByFilm
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getQueryParams } from '../../lib/utils'

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
      <div>
      {
        this.state.cinemasList.map((cinema, index) => {
          return (
            <li key={cinema.cinemaId}>
              cinemaName: {cinema.cinemaName}
              <br/>
              address: {cinema.address}
              <br/>
              <Link to={{pathname: 'bookticket', search: '?cinemaid=' + cinema.cinemaId + '&movieid=' + getQueryParams(this.props.location.search, 'movieid')}}>购票</Link>
            </li>
          )
        })
      }
      </div>
    )
  }
  getCinemasByFilm() {
    axios.get("https://www.easy-mock.com/mock/597596c7a1d30433d83b713a/film/film_cinemas", {params: {movieId: getQueryParams(this.props.location.search, 'movieid')}}).then(res => {
      this.setState({
        cinemasList: res.data.result
      })
    })
  }
}

export default CinemasByFilm
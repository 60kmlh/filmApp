import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TodayFilm from './TodayFilm'
import SearchFilm from './SearchFilm'
import FilmDetail from './FilmDetail'
import CinemasByFilm from './CinemasByFilm'
import BookTicket from '../../components/BookTicket'

class Film extends Component {
  render() {
    return (
      <div>
        <Route exact path='/film' component={TodayFilm}></Route>
        <Route exact path='/film/today' component={TodayFilm}></Route>
        <Route exact path='/film/search' component={SearchFilm}></Route>
        <Route exact path='/film/detail' component={FilmDetail}></Route>
        <Route exact path='/film/cinemasbyfilm' component={CinemasByFilm}></Route>
        <Route exact path='/film/bookticket' component={BookTicket}></Route>
      </div>
    )
  }
}

export default Film

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TodayFilm from './TodayFilm'
import SearchFilm from './SearchFilm'
import FilmDetail from './FilmDetail'
import CinemasByFilm from './CinemasByFilm'
import BookTicket from './BookTicket'

class Film extends Component {
  render() {
    return (
      <div>
        <Route exact path={this.props.match.url} component={TodayFilm}></Route>
        <Route exact path={this.props.match.url+'/today'} component={TodayFilm}></Route>
        <Route exact path={this.props.match.url+'/search'} component={SearchFilm}></Route>
        <Route exact path={this.props.match.url+'/detail'} component={FilmDetail}></Route>
        <Route exact path={this.props.match.url+'/cinemasbyfilm'} component={CinemasByFilm}></Route>
        <Route exact path={this.props.match.url+'/bookticket'} component={BookTicket}></Route>
      </div>
    )
  }
}

export default Film

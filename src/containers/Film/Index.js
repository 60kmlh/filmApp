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
        <Route exact path={this.props.match.path} component={TodayFilm}></Route>
        <Route exact path={this.props.match.path+'/today'} component={TodayFilm}></Route>
        <Route exact path={this.props.match.path+'/search'} component={SearchFilm}></Route>
        <Route exact path={this.props.match.path+'/detail'} component={FilmDetail}></Route>
        <Route exact path={this.props.match.path+'/cinemasbyfilm'} component={CinemasByFilm}></Route>
        <Route exact path={this.props.match.path+'/bookticket'} component={BookTicket}></Route>
      </div>
    )
  }
}

export default Film

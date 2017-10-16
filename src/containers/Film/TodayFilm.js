import React, { Component } from 'react'
import FilmList from '../../components/FilmList'
import { connect } from 'react-redux'
import { queryTodayFilm } from '../../actions/film'

class TodayFilm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmList: []
    }
  }
  render() {
    return (
      <div>
        <FilmList />
      </div>
    )
  }
  componentDidMount() {
    this.queryFilmList()
  }
  queryFilmList() {
    this.props.dispatch(queryTodayFilm())
  }
}

export default connect()(TodayFilm)
import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FilmList from './FilmList'
import CinemasList from './CinemasList'
import { connect } from 'react-redux'
import axios from 'axios'
import { film_search_api, cinemas_search_api } from '../lib/api'
import { getFilm } from '../actions/film'
import { getCinemasList } from '../actions/cinemas'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmList: []
    }
  }
  componentDidMount() {
    this.props.dispatch(getFilm([]))
    this.props.dispatch(getCinemasList([]))
  }
  componentWillUnmount() {
    this.props.dispatch(getFilm([]))
    this.props.dispatch(getCinemasList([]))    
  }
  render() {
    return (
      <div>
        <SearchBar  type='film' cb={this.searchCallBack()} />
        {
          this.renderResult()
        }
      </div>
    )
  }
  searchCallBack(key) {
    var that = this
    if(this.props.match.params.type === 'film') {
      return (key) => {
        axios.get(film_search_api, {params: {title: key}}).then(res => {
          // that.setState({
          //   filmList: res.data.result
          // })
          that.props.dispatch(getFilm(res.data.result))
        })
      }
    }
    if(this.props.match.params.type === 'cinemas') {
      return (key) => {
        axios.get(cinemas_search_api, {params: {title: key}}).then(res => {
          // that.setState({
          //   filmList: res.data.result
          // })
          that.props.dispatch(getCinemasList(res.data.result.data))
        })
      }
    }
  }
  renderResult() {
    if(this.props.match.params.type === 'film') {
      if(this.props.filmList.length !== 0) {
        return (<FilmList />)
      }else{
        return (
          <div className='no_result'>没有相关数据</div>
        )
      }
    }
    if(this.props.match.params.type === 'cinemas') {
      if(this.props.cinemasList.length !== 0) {
        return (<CinemasList />)
      }else{
        return (
          <div className='no_result'>没有相关数据</div>
        )
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    filmList: state.film,
    cinemasList: state.cinemas.cinemasList
  }
}

export default connect(mapStateToProps)(Search)

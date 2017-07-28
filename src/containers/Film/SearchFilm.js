import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar'
import FilmList from '../../components/FilmList'
import axios from 'axios'

class SearchFilm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmList: []
    }
  }
  render() {
    return (
      <div>
        <SearchBar  type='film' cb={this.searchCallBack()} />
        {
          this.state.filmList.length !== 0 ? <FilmList filmList={this.state.filmList}/> : ''
        }
      </div>
    )
  }
  searchCallBack(key) {
    var that = this
    return (key) => {
      axios.get('https://www.easy-mock.com/mock/597596c7a1d30433d83b713a/film/film_search', {params: {title: key}}).then(res => {
        that.setState({
          filmList: res.data.result
        })
      })
    }
  }
}

export default SearchFilm

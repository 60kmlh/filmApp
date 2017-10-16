import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FilmList from './FilmList'
import axios from 'axios'
import { film_search_api } from '../lib/api'

class Search extends Component {
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
          this.state.filmList.length !== 0 ? <FilmList filmList={this.state.filmList}/> : '无匹配'
        }
      </div>
    )
  }
  searchCallBack(key) {
    var that = this
    return (key) => {
      axios.get(film_search_api, {params: {title: key}}).then(res => {
        that.setState({
          filmList: res.data.result
        })
      })
    }
  }
}

export default Search

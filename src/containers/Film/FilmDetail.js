import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getQueryParams } from '../../lib/utils'

class FilmDeatil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: {}
    }
  }
  componentDidMount() {
    this.getFilmDetail()
  }
  getFilmDetail() {
    var that = this
    axios.get('https://www.easy-mock.com/mock/597596c7a1d30433d83b713a/film/film_query',{params:{movieid:getQueryParams(this.props.location.search, 'movieid')}}).then(res => {
      that.setState({
        detail: res.data.result
      })
    })
  }
  render() {
    var detail = this.state.detail
    return (
      <div>
        <table>
        <tbody>
          <tr>
            <td>name</td>
            <td>{detail.title}</td>
          </tr>
          <tr>
            <td>actors</td>
            <td>{detail.actors}</td>
          </tr>
          <tr>
            <td>country</td>
            <td>{detail.country}</td>
          </tr>
          <tr>
            <td>poster</td>
            <td><img src={detail.poster} alt=""/></td>
          </tr>
        </tbody>
        </table>
        <Link to={{pathname: 'cinemasbyfilm', search: '?movieid=' + detail.movieid}} >选影院</Link>
      </div>
    )
  }
}

export default FilmDeatil

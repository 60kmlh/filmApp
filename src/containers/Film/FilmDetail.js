import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getQueryParams } from '../../lib/utils'
import { film_query_api } from '../../lib/api'
import '../../assets/style/filmDetail'

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
    axios.get(film_query_api, {params:{movieid:getQueryParams(this.props.location.search, 'movieid')}}).then(res => {
      that.setState({
        detail: res.data.result
      })
    })
  }
  render() {
    var detail = this.state.detail
    return (
      <div className='filmDetail'>
        <div className='poster'>
          <img src={detail.poster} alt=""/>
        </div>
        <div className='detail'>
          <h2>{detail.title}</h2>
          <div>{detail.genres}</div>
          <div>{detail.country}</div>
          <div>{detail.release_date}上映</div>
        </div>
        <div className='intro'>
          {detail.plot_simple}
        </div>
        <div>
          <Link className='book tab_btn' to={{pathname: 'cinemasbyfilm', search: '?movieid=' + detail.movieid}} >选影院</Link>
        </div>
      </div>
    )
  }
}

export default FilmDeatil

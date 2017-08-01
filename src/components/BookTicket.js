import React, { Component } from 'react'
import axios from 'axios'
import { getQueryParams } from '../lib/utils'

class BookTicket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cinemaInfo: {},
      onlineInfo: []
    }
  }
  componentDidMount() {
    this.getCinemaOnline()
  }
  render() {
    return (
      <div>
        <span>cinemaName: {this.state.cinemaInfo.name}</span>
        <br/>
        <span>telephone: {this.state.cinemaInfo.telephone}</span>
        <br/>
        <span>address: {this.state.cinemaInfo.address}</span>
        {
          this.state.onlineInfo.map((item, index) => {
            return (
              <li key={item.movieId}>
                movieName: {item.movieName}
                <img src={item.pic_url} alt=""/>
                {item.broadcast.map((item2, index2) => {
                  return (
                    <div key={index2}>
                     <span>hall: {item2.hall}</span>
                     <br/>
                     <span>price: {item2.price}</span>
                     <br/>
                     <span>time: {item2.time}</span>
                    </div>
                  )
                })}
              </li>
            )
          })
        }
      </div>
    )
  }
  getCinemaOnline() {
    var search = this.props.location.search
    axios.get('https://www.easy-mock.com/mock/597596c7a1d30433d83b713a/film/cinemas_movies', {params: {cinemaid: getQueryParams(search, 'cinemaid'),movieid: getQueryParams(search, 'movieid')}}).then(res => {
      this.setState({
        cinemaInfo: res.data.result.cinema_info,
        onlineInfo: res.data.result.lists
      })
    })
  }
}

export default BookTicket

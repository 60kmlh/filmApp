import React, { Component } from 'react'
import axios from 'axios'
import { getQueryParams } from '../lib/utils'
import { cinemas_movies_api } from '../lib/api'
import Back from './Back'
import Slider from 'react-slick'
import '../assets/style/bookTicket'
import 'slick-carousel/slick/slick.css'

class BookTicket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cinemaInfo: {city:''},
      onlineInfo: [{
        broadcast:[],
        movieName:''
      }],
      indexFilm:0
    }
  }
  componentDidMount() {
    this.getCinemaOnline()
  }
  render() {
    var settings = {
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      infinite: false,
      arrows: false,
      afterChange: (index) => {
        this.setState({
          indexFilm: index
        })
      }
     
    }
    return (
      <div className='bookTicket'>
        <Back />
        <div className='cinemas'>
          <div className="name">{this.state.cinemaInfo.name} ({this.state.cinemaInfo.city+'店'})</div>
          <div className='address'>{this.state.cinemaInfo.address}</div>
          <span className='tel'>
            <a href={'tel:'+this.state.cinemaInfo.telephone}>电话</a>
          </span>
        </div>
        <Slider className="posterList" {...settings}>
          {this.state.onlineInfo.map((item, index) => {
            return (
              <div key={item.movieId}>
                <img src={item.pic_url} alt=""/>
              </div>
            )
          })}
        </Slider>
        <div className='film_title'>{this.state.onlineInfo[this.state.indexFilm].movieName}</div>
        <div className='broadcast'>
          {
            this.state.onlineInfo[this.state.indexFilm].broadcast.map((item, index) => {
              return (
                <div className='info' key={item.time}>
                  <div className='time'>{item.time}</div>
                  <div className='hall'>{item.hall}</div>
                  <div className='price'>{item.price+'元'}</div>
                  <div>
                    <a className='buy_btn'>购票</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  getCinemaOnline() {
    var search = this.props.location.search
    axios.get(cinemas_movies_api, {params: {cinemaid: getQueryParams(search, 'cinemaid'),movieid: getQueryParams(search, 'movieid')}}).then(res => {
      this.setState({
        cinemaInfo: res.data.result.cinema_info,
        onlineInfo: res.data.result.lists
      })
    })
  }
}

export default BookTicket

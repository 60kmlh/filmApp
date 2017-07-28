import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class FilmList extends Component {
  render() {
    return (
      <div>
        {this.props.filmList.map((film, index) => {
          return (
            <li key={film.movieId||film.movieid}>
              <Link to={{pathname:'/film/detail', search: '?movieid='+film.movieId || film.movieid}}>
                <section>
                影片名称：{film.movieName || film.title}
                </section>
              </Link>
              <section>
              <img src={film.pic_url || film.poster} alt=""/>
              </section>
            </li>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filmList: state.film
  }
}

export default connect(mapStateToProps)(FilmList)

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/style/filmList'

class FilmList extends Component {
  render() {
    return (
      <div className='filmList'>
        {this.props.filmList.map((film, index) => {
          return (
            <li key={film.movieId||film.movieid}>
              <section>
                <img src={film.pic_url || film.poster} alt=""/>
              </section>
              <section className='info'>
                <Link to={{pathname:'/film/detail', search: '?movieid='+film.movieId || film.movieid}}>
                  {film.movieName || film.title}
                </Link>
              </section>
              <section className='book'>
                <Link className='buy_btn' to={{pathname:'/film/detail', search: '?movieid='+film.movieId || film.movieid}}>购票</Link>
              </section>
            </li>
            // <MediaBox key={film.movieId||film.movieid} type="appmsg">
            //     <MediaBoxHeader>
            //       <img src={film.pic_url || film.poster} alt=""/>
            //     </MediaBoxHeader>
            //     <MediaBoxBody>
            //         <MediaBoxTitle>
            //           <Link to={{pathname:'/film/detail', search: '?movieid='+film.movieId || film.movieid}}>
            //             <section>
            //             影片名称：{film.movieName || film.title}
            //             </section>
            //           </Link>
            //         </MediaBoxTitle>
            //         <MediaBoxDescription>
            //             Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            //         </MediaBoxDescription>
            //     </MediaBoxBody>
            // </MediaBox>
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

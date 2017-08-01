import * as types from '../constants/ActionTypes'
import axios from 'axios'

export function getCinemasList(cinemasList) {
  return {
    type: types.GET_CINEMAS,
    cinemasList: cinemasList
  }
}

export function queryNearbyCinemas() {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/597596c7a1d30433d83b713a/film/cinemas_local').then(res => {
      if(res.data.reason === 'success'){
        dispatch(getCinemasList(res.data.result))
      }
    })
  }
}
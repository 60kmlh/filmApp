import * as types from '../constants/ActionTypes'
import axios from 'axios'
import { cinemas_local_api } from '../lib/api'

export function getCinemasList(cinemasList) {
  return {
    type: types.GET_CINEMAS,
    cinemasList: cinemasList
  }
}

export function queryNearbyCinemas() {
  return (dispatch) => {
    axios.get(cinemas_local_api).then(res => {
      if(res.data.reason === 'success'){
        dispatch(getCinemasList(res.data.result))
      }
    })
  }
}
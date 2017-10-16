import * as types from '../constants/ActionTypes'
import axios from 'axios'
import { film_today_api } from '../lib/api'

export function queryTodayFilm(params) {
  return (dispatch, getState) => {
    axios.get(film_today_api, {params:{cityid: getState().city.cur.id}}).then(res => {
      if(res.data.reason === 'success'){
        dispatch(getFilm(res.data.result))
      }
    })
  }
}

export function getFilm(film) {
  return {
    type: types.GET_FILM,
    film: film
  }
}
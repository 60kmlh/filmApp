import * as types from '../constants/ActionTypes'
import axios from 'axios'

export function queryTodayFilm(params) {
  return (dispatch, getState) => {
    axios.get('https://www.easy-mock.com/mock/597596c7a1d30433d83b713a/film/film_today',{params:{cityid: getState().city.cur.id}}).then(res => {
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
import * as types from '../constants/ActionTypes'
import { queryTodayFilm } from './film'
import { queryNearbyCinemas } from './cinemas'
import axios from 'axios'

export function queryCityList() {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/597596c7a1d30433d83b713a/film/cities').then(res => {
      if(res.data.reason === 'success'){
        dispatch(getCityList(res.data.result))
        dispatch(toggleCity(res.data.result[0]))
      }
    })
  }
}

export function getCityList(cityList) {
  return {
    type: types.GET_CITY_LIST,
    cityList: cityList
  }
}

export function setCity(city) {
  return {
    type: types.TOGGLE_CITY,
    city: city
  }
}

export function setCityPanel(showPanel) {
  return {
    type: types.SET_CITY_PANEL,
    showPanel: showPanel
  }
}

export function toggleCity(city) {
  return dispatch=> {
    dispatch(setCity(city))
    dispatch(queryTodayFilm())
    dispatch(queryNearbyCinemas())
  }
}
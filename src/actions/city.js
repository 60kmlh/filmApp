import * as types from '../constants/ActionTypes'
import { queryTodayFilm } from './film'
import { queryNearbyCinemas } from './cinemas'
import axios from 'axios'
import { cities_api } from '../lib/api'
import { sortCity } from '../lib/utils'

export function queryCityList() {
  return (dispatch) => {
    axios.get(cities_api).then(res => {
      if(res.data.reason === 'success'){
        dispatch(getCityList(sortCity(res.data.result)))
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
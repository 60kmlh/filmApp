import * as types from '../constants/ActionTypes'
import { queryTodayFilm } from './film'

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
  }
}
import *　as types from '../constants/ActionTypes'

function city(state = {cur: {name: '', id: ''}, cityList: [], showPanel: false}, action) {
  switch(action.type) {
    case(types.GET_CITY_LIST):
      return Object.assign({}, state, {cityList: action.cityList})
    case(types.TOGGLE_CITY):
      return Object.assign({}, state, {cur: action.city, showPanel: false})
    case(types.SET_CITY_PANEL):
      return Object.assign({}, state, {showPanel: action.showPanel})
    default: 
      return state
  }
}

export default city

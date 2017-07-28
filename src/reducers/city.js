import *　as types from '../constants/ActionTypes'

function city(state = {value: '',showPanel: false}, action) {
  switch(action.type) {
    case(types.TOGGLE_CITY):
      return {
        value: action.city,
        showPanel: false  
      }
    case(types.SET_CITY_PANEL):
      return Object.assign({}, state, {showPanel: action.showPanel})
    default: 
      return state
  }
}

export default city

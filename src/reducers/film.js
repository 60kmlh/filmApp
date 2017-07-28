import * as types from '../constants/ActionTypes'

function film(state=[], action){
  switch(action.type) {
    case(types.GET_FILM):
      return action.film
    default:
      return state
  }
}

export default film
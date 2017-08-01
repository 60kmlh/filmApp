import * as types from '../constants/ActionTypes'

function cinemas(state={ cur:{}, cinemasList:[] }, action) {
  switch(action.type) {
    case(types.GET_CINEMAS):
      return Object.assign({}, state, { cinemasList: action.cinemasList })
    case(types.SET_CUR_CINEMAS):
      return Object({}, state, { cur: action.cienmas })
    default:
      return state
  }
}

export default cinemas

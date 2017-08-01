import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import city from './city'
import film from './film'
import cinemas from './cinemas'

export default combineReducers({
  city,
  film,
  cinemas,
  routing: routerReducer
})

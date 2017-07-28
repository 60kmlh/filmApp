import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import city from './city'
import film from './film'

export default combineReducers({
  city,
  film,
  routing: routerReducer
})

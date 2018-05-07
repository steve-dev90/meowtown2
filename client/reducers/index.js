import {combineReducers} from 'redux'

import greetings from './greetings' 
import cats from './cats' 

export default combineReducers({
  greetings,
  cats
})

import {combineReducers} from 'redux'

import greetings from './greetings' 
import cats from './cats' 
import waiting from './waiting'
import editing from './editing'

export default combineReducers({
  greetings,
  cats,
  waiting,
  editing
})

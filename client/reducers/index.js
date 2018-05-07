import {combineReducers} from 'redux'

import greetings from './greetings' 
import cats from './cats' 
import waiting from './waiting'

export default combineReducers({
  greetings,
  cats,
  waiting
})

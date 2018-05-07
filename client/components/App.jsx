import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Meowtown from './Meowtown'

const App = () => (
  <Router>
      <Route exact path="/" component={Meowtown} />
  </Router>
)

export default App

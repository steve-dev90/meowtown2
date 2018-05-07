import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Meowtown from './Meowtown'
import EditCat from './EditCat'

const App = () => (
  <Router>
      <React.Fragment>
        <Route exact path="/" component={Meowtown} />
        <Route exact path="/cats/:id" component={EditCat} />
      </React.Fragment>
  </Router>
)

export default App

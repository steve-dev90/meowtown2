import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getCats} from '../actions/cats'

class Meowtown extends React.Component {

  componentDidMount () {
    this.props.dispatch(getCats())
  }

  render() {
    return (
    <React.Fragment>

      <div id="container">

        <div className="title"><h1>Meowtown</h1></div>

        <nav>
          <ul>
            <li><a href="/cats/new">generate cat</a></li>
            <li><a href="/cats/help">wuuut?</a></li>
          </ul>
        </nav>

        <div id="catnames">
          <div className="cats">
            <ul>
              {this.props.cats.map(cat => {
                return <React.Fragment key={cat.id}>                
                  <li ><Link to={`./cats/${cat.id}`}>{cat.name}</Link></li>
                </React.Fragment>
              })}
            </ul>
          </div>
        </div>

      </div>

      <div id="meow"></div>
    </React.Fragment>
   
    )}

}

const mapStateToProps = (state) => {
  
  return {cats: state.cats}
}

export default connect(mapStateToProps)(Meowtown)
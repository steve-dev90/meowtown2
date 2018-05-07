import React from 'react'
import {connect} from 'react-redux'

import {getCats} from '../actions/cats'

// const renderGreeting = (greeting, key) => (
//   <h1 key={key}>{greeting.text}</h1>
// )

// export const Greetings = ({greetings, dispatch}) => (
//   <div>
//     <button onClick={() => dispatch(getGreetings())}>Show Greetings</button>
//     {greetings.map(renderGreeting)}
//   </div>
// )

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
              {console.log(this.props.cats)}
              {this.props.cats.map(cat => {
                return <li>{cat.name}</li>
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
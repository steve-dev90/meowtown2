import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getCatById} from '../actions/cats'

// Number(this.props.match.params)

class EditCat extends React.Component {

  constructor(props) {
    super(props)
    this.state ={}
  }

  componentDidMount (props) {
    this.props.dispatch(getCatById(this.props.match.params.id))
  }

  render() {
    return (
    <React.Fragment>

      <div id="container">

        <div className="title"><h1>Your cat!</h1></div>

        {this.props.cats[0] && console.log(this.props.cats[0])}

        {/* <form >

          <div class="catcreate"><input placeholder="{name}"type="text" name="name" value = "{{name}}" /></div>
          <div class="catcreate"><input placeholder="{{image}}"type="text" name="image" value = "{{image}}"/></div>
          <div class="catcreate"><textarea placeholder="{{'life-story'}}" name="life-story" >{{'life-story'}}</textarea></div>
          <div class="catcreate"><input id="submit" type="submit" name="commit" value="Edit Cat" /></div>

        </form> */}

        {/* <div id="back"> <a href="/cats">nevermind</a></div> */}

      </div>

      <div id="meow"></div>
    </React.Fragment>
   
    )}

}

const mapStateToProps = (state) => {
  
  return {
    waiting: state.waiting,
    cats: state.cats}
}

export default connect(mapStateToProps)(EditCat)
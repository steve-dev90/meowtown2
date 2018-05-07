import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getCatById, putCatById} from '../actions/cats'

class EditCat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cat : {
        name: '',
        image: '',
        life_story: ''
      }
    }
    this.editCat = this.editCat.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount (props) {
    this.props.dispatch(getCatById(this.props.match.params.id))
  }

  editCat(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e) {
    e.preventDefault()
    
    let {name, image, life_story} = this.state
    console.log(name)
    this.props.dispatchput(putCatById(this.props.match.params.id, name, image, life_story))
  }

  render() {

    return (
    <React.Fragment>

      <div id="container">

        <div className="title"><h1>Your cat!</h1></div>

        <form onSubmit={this.submit}>
      
          <div className="catcreate">
            <input placeholder={`${this.props.cats[0] && this.props.cats[0].name}`} type="text" 
              name="name" onChange={this.editCat} />
          </div>
          <div className="catcreate">
            <input placeholder={`${this.props.cats[0] && this.props.cats[0].image}`} type="text" 
              name="image" onChange={this.editCat} />
          </div>
          <div className="catcreate">
            <input placeholder={`${this.props.cats[0] && this.props.cats[0].life_story}`} type="text" 
              name="life_story" onChange={this.editCat} />
          </div>
          <div className="catcreate">
            <input id="submit" type="submit" name="commit" value="Edit Cat" onSubmit={this.submit} />
          </div>

        </form>

        <div id="back"> <Link to="/cats">nevermind</Link></div>

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
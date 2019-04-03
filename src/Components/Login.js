import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import store, { UPDATE_PASSWORD, UPDATE_USERNAME } from './../store'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleDatChange = this.handleDatChange.bind(this);
    this.handleDatLogin = this.handleDatLogin.bind(this);
    // bind dem joints cuz them methods be referin' to the window
  }


  handleDatChange(e){
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleDatLogin(){
    store.dispatch({
      type: UPDATE_USERNAME,
      payload: this.state.username
    })
    store.dispatch({
      type: UPDATE_PASSWORD,
      payload: this.state.password
    });
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    const username = 'Spencer'
    return (
      <div>
        <input 
          placeholder='username'
          onChange={(e)=>{this.handleDatChange(e)}}
          value={this.state.username}
          name="username" />
        <input 
          placeholder='password'
          onChange={(e)=>{this.handleDatChange(e)}}
          value={this.state.password}
          name="password" />
        <Link to={`/profile/${username}`}>
          <button onSubmit={()=>{this.handleDatLogin()}} >Login</button>
        </Link>
      </div>
    );
  }
}

export default Login;

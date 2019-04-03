import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    const username = 'Spencer'
    return (
      <div>
        <input placeholder='username'></input>
        <input placeholder='password'></input>
        <Link to={`/profile/${username}`}>
          <button>Login</button>
        </Link>
      </div>
    );
  }
}

export default Login;

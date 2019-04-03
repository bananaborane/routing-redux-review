import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile';

export default (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/profile/:username' component={Profile} />
  </Switch>
)
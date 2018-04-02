import React from 'react';
import { render } from 'react-dom';
import { App, SignIn, SignUp } from './components';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { firebaseApp } from './firebase';
import './index.css';

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or up', user);
    history.push('/app');
  } else {
    console.log('user has signed out or still needs to sign in');
    history.replace('/signin');
  }
});

render(
  <Router history={history}>
    <div>
      <Route exact path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { firebaseApp } from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App, SignIn, SignUp } from './components';
import reducer from './reducers';
import { logUser } from './actions';
import './index.css';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/app');
  } else {
    console.log('user has signed out or still needs to sign in');
    history.replace('/signin');
  }
});

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

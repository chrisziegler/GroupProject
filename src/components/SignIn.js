import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: {
      message: ''
    }
  };

  signIn = () => {
    const { email, password } = this.state;
    console.log('this.state', this.state);
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="form-inline">
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            style={{ margin: '0 7px 7px 0' }}
            type="text"
            placeholder="email"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
          />

          <input
            className="form-control"
            style={{ margin: '0 7px 7px 0' }}
            type="password"
            placeholder="password"
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
          />

          <button
            className="btn btn-primary"
            style={{ margin: '0 7px 7px 0' }}
            type="button"
            onClick={this.signIn}
          >
            Sign In
          </button>
        </div>
        <div>{error.message}</div>
        <div>
          <Link to={'/signup'}>Sign up instead</Link>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    error: {
      message: ''
    }
  };

  signUp = () => {
    const { email, password } = this.state;
    console.log('this.state', this.state);
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({ error });
      });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="form-inline">
        <h2>Sign Up</h2>
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
            onClick={this.signUp}
          >
            Sign Up
          </button>
        </div>
        <div>{error.message}</div>
        <div>
          <Link to={'/signin'}>Already a user? Sign-in instead</Link>
        </div>
      </div>
    );
  }
}

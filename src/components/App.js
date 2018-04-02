import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

export default class App extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  };

  render() {
    return (
      <div className="App">
        <h2>The App Component</h2>
        <button className="btn btn-danger" onClick={this.signOut}>
          Sign Out
        </button>
      </div>
    );
  }
}

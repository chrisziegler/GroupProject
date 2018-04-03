import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';

class App extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  };

  render() {
    return (
      <div className="App">
        <h2>Project Goals</h2>
        <h4 className="fontscale">
          User:{' '}
          <span style={{ fontFamily: 'monotype', color: 'rebeccapurple' }}>
            {this.props.user}
          </span>{' '}
          is logged-in
        </h4>

        <div className="fontscale">Add Milestone</div>
        <AddGoal />
        <div>Milestones List</div>
        <ul className="list-group">
          {this.props.title.map(num => (
            <li
              className="list-group-item fontscale"
              key={Math.floor(Math.random() * 10000)}
            >
              {num}
            </li>
          ))}
        </ul>
        <button className="btn btn-danger" onClick={this.signOut}>
          Sign Out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('mapStateToProps', state);
  // > { email: 'harry@harrypotter.com' }
  // return {};
  return { user: state.email, title: state.title };
}

export default connect(mapStateToProps, null)(App);

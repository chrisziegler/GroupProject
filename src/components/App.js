import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import { AddGoal, GoalList, CompleteGoalsList } from './';
import { Button } from './Button';
import { activeTeam } from '../helpers/activeTeam';

class App extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  };

  render() {
    const { goals } = this.props;
    const { user: { email } } = this.props;

    return (
      <div className="App">
        <div className="dashboard">
          <div className="dash-contents">
            <h2 style={{ fontSize: '3.6rem' }}>
              Team<span className="project-font-outline">Project</span>
            </h2>
            <h4 className="fontscale">
              User:
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '1.5rem',
                  margin: '0 5px 0 5px',
                  color: '#A9B2A2'
                }}
              >
                {email}
              </span>
              is logged-in
            </h4>

            <AddGoal />
          </div>
        </div>
        {goals.length > 0 && activeTeam(goals, email)}
        <hr />
        <div className="list-group">
          <GoalList />
        </div>
        <Button onClick={this.signOut}>Sign Out</Button>
        <CompleteGoalsList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, goals } = state;
  return { user, goals };
}

export default connect(mapStateToProps, null)(App);

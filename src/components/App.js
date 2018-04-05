import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import { Button } from './Button';

class App extends Component {
  activeUser = () => {
    const { goals } = this.props;
    const { user: { email } } = this.props;
    const emailArr = goals.reduce((arr, goal) => {
      const email = goal.email;
      arr.push(email);
      return arr;
    }, []);
    // Just grab unique emails
    const emailSet = new Set(emailArr);
    const size = emailSet.size;
    return (
      <ul style={{ listStyle: 'none' }}>
        <span style={{ marginRight: 4, fontWeight: 700 }}>
          Active Team Members:
        </span>
        {[...emailSet].map((item, i) => (
          <li
            style={{ display: 'inline' }}
            key={item + Math.floor(Math.random() * 10000)}
          >
            {item === email && (
              <span
                style={{
                  marginRight: 3,
                  marginBottom: 5,
                  color: '#FF4100',
                  border: '1px solid #FF4100',
                  padding: '0 3px 0 3px',
                  textTransform: 'uppercase'
                }}
              >
                {i + 1 < size ? item.split('@')[0] + ',' : item.split('@')[0]}
              </span>
            )}
            {item &&
              item !== email && (
                <span
                  style={{
                    marginRight: 3,
                    marginBottom: 5,
                    color: '#001272',
                    textTransform: 'uppercase'
                  }}
                >
                  {i + 1 < size ? item.split('@')[0] + ',' : item.split('@')[0]}
                </span>
              )}
          </li>
        ))}
      </ul>
    );
  };

  signOut = () => {
    firebaseApp.auth().signOut();
  };

  render() {
    const { goals } = this.props;
    // if (goals.length > 0) {
    //   console.log('email array', this.uniqueGoals(goals));
    // }

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
                {this.props.user.email}
              </span>
              is logged-in
            </h4>

            <AddGoal />
          </div>
        </div>
        {goals.length > 0 && this.activeUser()}
        <hr />
        <div className="list-group">
          <GoalList />
        </div>
        <Button onClick={this.signOut}>Sign Out</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, goals } = state;
  // console.log('goals', goals);
  return { user, goals };
}

export default connect(mapStateToProps, null)(App);

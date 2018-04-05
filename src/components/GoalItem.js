import React, { Component } from 'react';
import { connect } from 'react-redux';

class GoalItem extends Component {
  render() {
    const { goals, user } = this.props;

    return (
      <ul className="list-group">
        {goals.map(goal => (
          <li
            className="list-group-item fontscale"
            key={Math.floor(Math.random() * 100000)}
          >
            {goal.title}
            {goal.uid === user.uid && (
              <span
                style={{
                  color: '#FF4100',
                  cursor: 'pointer',
                  border: '1px solid #FF4100',
                  padding: '0 5px 0 5px',
                  float: 'right',
                  fontSize: '1.1rem',
                  marginTop: '4px'
                }}
              >
                Your Goals
              </span>
            )}
            {goal.uid !== user.uid && (
              <span
                style={{
                  color: '#001272',
                  cursor: 'pointer',
                  border: '1px solid #001272',
                  padding: '0 3px 0 3px',
                  float: 'right',
                  fontSize: '1.1rem',
                  marginTop: '4px'
                }}
              >
                Team Goals
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const { goals, user } = state;
  return {
    goals,
    user
  };
}

export default connect(mapStateToProps, null)(GoalItem);

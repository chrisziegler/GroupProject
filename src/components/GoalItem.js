import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonComplete } from './Button';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal = () => {
    const { email } = this.props.user;
    const completeTimeStamp = Date.now();
    const { title, serverKey, timeStamp } = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({ email, title, timeStamp, completeTimeStamp });
  };

  formatTime = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  render() {
    const { user } = this.props;
    const { email, title, timeStamp } = this.props.goal;

    return (
      <li className="list-group-item fontscale">
        {title}
        <span
          style={{
            color: '#ff4100',
            padding: '1px 3px 1px 3px',
            marginLeft: 5,
            fontSize: '1.1rem',
            fontFamily: 'lato'
          }}
        >
          {email}:
        </span>
        <span
          style={{
            color: 'white',
            background: '#3A3A3A',
            borderRadius: 3,
            fontSize: '1.1rem',
            fontFamily: 'lato',
            margin: '0 3px 0 3px',
            paddingLeft: 5,
            paddingRight: 5
          }}
        >
          {this.formatTime(timeStamp)}
        </span>
        {email === user.email && (
          <ButtonComplete logged onClick={() => this.completeGoal()}>
            Complete Your Goal
          </ButtonComplete>
        )}
        {email !== user.email && (
          <ButtonComplete onClick={() => this.completeGoal()}>
            Complete Team Goal
          </ButtonComplete>
        )}
        <br style={{ clear: 'both' }} />
      </li>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps, null)(GoalItem);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonComplete } from './Button';
import { completeGoalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal = () => {
    // add to complete goals on the database - export new ref from firebase.js
    // remove this goal from the goals reference
    // const { email } = this.props.user;
    // const title = this.props.goals[0].title;
    // console.log('email', email, 'title', title);
  };

  render() {
    const { goals, user } = this.props;
    console.log('this.props', this.props);
    return (
      <ul className="list-group">
        {goals.map(goal => (
          <li
            className="list-group-item fontscale"
            key={Math.floor(Math.random() * 100000)}
          >
            {goal.title}
            {goal.uid === user.uid && (
              <ButtonComplete logged onClick={this.completeGoal()}>
                Complete Your Goal
              </ButtonComplete>
            )}
            {goal.uid !== user.uid && (
              <ButtonComplete onClick={this.completeGoal()}>
                Complete Team Goal
              </ButtonComplete>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const { goals, user } = state;
  console.log('goals in map', goals);
  return {
    goals,
    user
  };
}

export default connect(mapStateToProps, null)(GoalItem);

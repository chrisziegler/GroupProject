import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import { connect } from 'react-redux';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email, title, timeStamp } = goal.val();
        const serverKey = goal.key;
        goals.push({ email, title, serverKey, timeStamp });
      });
      this.props.setGoals(goals);
    });
  }

  // formatTime = timestamp => {
  //   return new Date(timestamp).toLocaleDateString;
  // };

  render() {
    const { goals } = this.props;

    return (
      <div>
        <h3>Goals</h3>

        <ul className="list-group">
          {goals.map(goal => <GoalItem goal={goal} key={goal.timeStamp} />)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  };
}

export default connect(mapStateToProps, { setGoals })(GoalList);

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
        const { email, title, uid } = goal.val();
        goals.push({ email, title, uid });
      });
      this.props.setGoals(goals);
    });
  }

  render() {
    return (
      <div>
        <h4
          style={{
            textAlign: 'center',
            fontWeight: 700,
            color: 'darkslategray'
          }}
        >
          Milestones
        </h4>
        <div>
          <GoalItem />
        </div>
      </div>
    );
  }
}

export default connect(null, { setGoals })(GoalList);

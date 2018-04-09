import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { CompleteGoalsItem } from './';

class CompleteGoalsList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const {
          email,
          title,
          timeStamp,
          completeTimeStamp
        } = completeGoal.val();
        completeGoals.push({ email, title, timeStamp, completeTimeStamp });
      });
      this.props.setCompleted(completeGoals);
    });
  }

  render() {
    const { completeGoals } = this.props;
    return (
      <div>
        {completeGoals.length > 0 && <h3>Completed Goals</h3>}
        <ul className="list-group">
          {completeGoals.map(completeGoal => (
            <CompleteGoalsItem
              key={completeGoal.completeTimeStamp}
              completeGoal={completeGoal}
            />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  };
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalsList);

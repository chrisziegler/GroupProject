import React, { Component } from 'react';
import moment from 'moment';

class CompleteGoalsItem extends Component {
  formatAssignedDate = timeStamp => {
    const stampToMoment = moment(timeStamp);
    const formatted = stampToMoment.format('MMM, Do h:mm a');
    return formatted;
  };

  calculateDuration = (timeStamp, completeTimeStamp) => {
    const assignedDate = moment(timeStamp);
    const completedDate = moment(completeTimeStamp);
    return assignedDate.from(completedDate, true);
  };

  render() {
    const {
      email,
      title,
      timeStamp,
      completeTimeStamp
    } = this.props.completeGoal;

    return (
      <div>
        <li className="list-group-item">
          {title}
          <span
            style={{
              color: 'white',
              background: '#3A3A3A',
              borderRadius: 3,
              fontSize: '1.1rem',
              fontFamily: 'lato',
              margin: '0 5px 0 5px',
              paddingLeft: 5,
              paddingRight: 5
            }}
          >
            Assigned: &emsp;
            {this.formatAssignedDate(timeStamp)}
          </span>
          <span
            style={{
              color: 'white',
              background: 'tomato',
              borderRadius: 3,
              fontSize: '1.1rem',
              fontFamily: 'lato',
              margin: '0 5px 0 5px',
              paddingLeft: 5,
              paddingRight: 5
            }}
          >
            Completed &nbsp;
            <em>{this.calculateDuration(timeStamp, completeTimeStamp)}</em>
            &nbsp; later
          </span>
        </li>
      </div>
    );
  }
}
export default CompleteGoalsItem;

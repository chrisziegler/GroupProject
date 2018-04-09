import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  state = {
    title: ''
  };

  handleInput = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleAddGoal = () => {
    const { title } = this.state;
    const { email } = this.props.user;
    const timeStamp = Date.now();
    goalRef.push({ email, title, timeStamp });
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <label>Add Milestone</label>
        <div
          className="input-group with-button"
          style={{ marginRight: '15px' }}
        >
          <input
            type="text"
            placeholder="Add Milestone"
            value={title}
            className="form-control"
            style={{ marginRight: 5 }}
            onChange={this.handleInput}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="button"
              onClick={this.handleAddGoal}
            >
              Submit
            </button>
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default connect(mapStateToProps, null)(AddGoal);

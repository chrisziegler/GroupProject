import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGoal } from '../actions';

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
    console.log('this.state', this.state);
  };

  render() {
    const { title } = this.state;
    return (
      <div className="input-group with-button">
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
            className="btn btn-success"
            type="button"
            onClick={this.handleAddGoal}
          >
            Submit
          </button>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { title: state.title };
}

export default connect(mapStateToProps, { addGoal })(AddGoal);

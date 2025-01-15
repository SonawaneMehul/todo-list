import React, { Component } from "react";
import "./TaskItem.css";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = { task: this.props.taskItem.name, isEditing: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  setIsEditing(editing) {
    this.setState({ isEditing: editing });
  }
  deleteTask() {
    this.props.deleteTask(this.props.id);
  }
  toggleTask() {
    this.props.toggleTask(this.props.id);
  }
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setIsEditing(false);
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <tr>
          <td colSpan="2">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.task}
                onChange={this.handleChange}
              ></input>
              <span style={{ float: "right" }}>
                <button>Save</button>
                <button onClick={() => this.setIsEditing(false)}>Back</button>
              </span>
            </form>
          </td>
        </tr>
      );
    } else {
      result = (
        <tr>
          <td onClick={this.toggleTask} className="task">
            <input
              type="checkbox"
              readonly
              checked={this.props.taskItem.isCompleted}
            />
            <span
              className={
                this.props.taskItem.isCompleted ? "completed" : "not-completed"
              }
            >
              {this.props.taskItem.name}
            </span>
          </td>
          <td>
            <button onClick={() => this.setIsEditing(true)}>Edit</button>
            <button onClick={this.deleteTask}>Delete</button>
          </td>
        </tr>
      );
    }
    return result;
  }
}

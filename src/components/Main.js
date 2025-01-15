import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  createTask(task) {
    if (task.trim() === "") {
      alert("Empty task cannot be added");
      return;
    }
    let newTask = { name: task.trim(), isCompleted: false };
    let allTasks = [...this.state.tasks, newTask];
    this.setState({ tasks: allTasks });
  }

  deleteTask(idx) {
    let arr = this.state.tasks.filter((t, index) => index !== idx);
    this.setState({ tasks: arr });
  }

  editTask(index, newTask) {
    let arr = [...this.state.tasks];
    arr[index].name = newTask;
    this.setState({ tasks: arr });
  }
  toggleTask(index) {
    let arr = [...this.state.tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    this.setState({ tasks: arr });
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <div>
          <CreateTask createTask={this.createTask} />
        </div>
        <br />
        <div>
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}

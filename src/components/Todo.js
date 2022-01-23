import React, { Component } from 'react';
import './Todo.css';
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { task: 'Go for a walk', id: '1' },
        { task: 'Buy Groceries', id: '2' },
        { task: 'Do Yoga', id: '3' },
      ],
      currentTask: '',
    };
  }
  onInputChange = (e) => {
    this.setState({ currentTask: e.target.value });
  };

  addTask = () => {
    if (!this.state.currentTask) return;
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.currentTask, id: this.state.tasks.length + 1 },
      ],
      currentTask: '',
    });
  };
  deleteTask = (id) => {
    let x = this.state.tasks.filter((t) => t.id !== id);
    console.log(x);
    this.setState({ tasks: this.state.tasks.filter((t) => t.id !== id) });
  };
  render() {
    return (
      <div className='container'>
        <h3 className='title'>To Do App</h3>
        <div className='input-field'>
          <input
            type='text'
            className='input'
            placeholder='Enter task...'
            value={this.state.currentTask}
            onChange={this.onInputChange}
          />
          <button onClick={this.addTask} className='inputSubmit'>
            Submit
          </button>
        </div>
        <ul className='task-list'>
          {this.state.tasks.map((t) => (
            <li key={t.id} className='list'>
              {t.task}{' '}
              <i
                onClick={() => this.deleteTask(t.id)}
                className='icon far fa-trash-alt'
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

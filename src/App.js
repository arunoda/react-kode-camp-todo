import React, { Component } from 'react';
import TodoItem from './TodoItem';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Todo App</h1>
        <ul>
          <TodoItem name="Learn React"/>
          <TodoItem name="Learn Redux"/>
          <TodoItem name="Create Sample App"/>
        </ul>
      </div>
    );
  }
}

export default App;

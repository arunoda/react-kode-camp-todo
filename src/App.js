import React, { Component } from 'react';
import TodoItem from './TodoItem';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      items: [
        'Learn React',
        'Learn Redux',
        'Create Sample App',
      ]
    };
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>My Todo App</h1>
        <ul>
          { items.map((item) => (
            <TodoItem key={item} name={item} />
          )) }
        </ul>
      </div>
    );
  }
}

export default App;

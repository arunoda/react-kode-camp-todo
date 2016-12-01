import React, { Component } from 'react';
import TodoList from './containers/TodoList';

class App extends Component {
  addItem() {

  }

  removeItem(item) {

  }

  render() {
    return (
      <div>
        <h1>My Todo App</h1>
        <TodoList onDone={(i) => this.removeItem(i)} />
        <div>
          <input type="text" ref="newItem" />
          <button onClick={() => this.addItem()}>Add Item</button>
        </div>
      </div>
    );
  }
}

export default App;

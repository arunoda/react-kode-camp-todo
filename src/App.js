import React, { Component } from 'react';
import TodoList from './containers/TodoList';

const baseUrl = 'https://mytodo-server.now.sh';

class App extends Component {
  addItem() {
    const newItem = this.refs.newItem.value;
    this.refs.newItem.value = 'adding...';

    fetch(`${baseUrl}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newItem }),
    })
      .then((res) => res.json())
      .then(() => {
        this.refs.newItem.value = '';
        location.reload();
      })
      .catch((err) => alert(err.message));
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

import React, { Component } from 'react';
import TodoList from './components/TodoList';

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

  addItem() {
    const { items } = this.state;
    const newItem = this.refs.newItem.value;

    this.setState({
      items: [
        ...items,
        newItem
      ]
    });

    this.refs.newItem.value = '';
  }

  removeItem(item) {
    const { items } = this.state;
    const itemId = items.indexOf(item);
    items.splice(itemId, 1);

    this.setState({ items });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>My Todo App</h1>
        <TodoList items={items} onDone={(i) => this.removeItem(i)} />
        <div>
          <input type="text" ref="newItem" />
          <button onClick={() => this.addItem()}>Add Item</button>
        </div>
      </div>
    );
  }
}

export default App;

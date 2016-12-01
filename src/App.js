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
        <ul>
          { items.map((item) => (
            <TodoItem
              key={item}
              name={item}
              onDone={() => this.removeItem(item)}
            />
          )) }
        </ul>
        <div>
          <input type="text" ref="newItem" />
          <button onClick={() => this.addItem()}>Add Item</button>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    const { items, onDone } = this.props;

    return (
      <ul>
        { items.map((item) => (
          <TodoItem
            key={item}
            name={item}
            onDone={() => onDone(item)}
          />
        )) }
      </ul>
    );
  }
}

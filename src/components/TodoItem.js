import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    const { name, onDone } = this.props;

    return (
      <li>
        {name} - <button onClick={onDone}>Done</button>
      </li>
    );
  }
}

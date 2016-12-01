import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <li>{name}</li>
    );
  }
}

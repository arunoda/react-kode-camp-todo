import { compose } from 'react-komposer';
import TodoList from '../components/TodoList';

function dataLoader(props, onData) {
  const data = {
    items: [
      'Learn ES6',
      'Learn React'
    ]
  };

  onData(null, data);
}

export default compose(dataLoader)(TodoList)

import { compose } from 'react-komposer';
import TodoList from '../components/TodoList';

function dataLoader(props, onData) {
  const url = 'https://mytodo-server.now.sh/';
  fetch(url)
    .then((res) => res.json())
    .then((items) => onData(null, { items }));
}

export default compose(dataLoader)(TodoList)

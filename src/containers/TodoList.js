import { compose } from 'react-komposer';
import TodoList from '../components/TodoList';
import { client } from '../core';

function dataLoader(props, onData) {
  function loadData() {
    const url = 'https://mytodo-server.now.sh/';
    fetch(url)
      .then((res) => res.json())
      .then((items) => onData(null, { items }));
  }

  loadData();

  const stop = client.watch('reload-app', loadData);
  return stop;
}

export default compose(dataLoader)(TodoList)

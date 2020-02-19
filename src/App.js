import React from 'react';
import AddForm from './components/AddForm';
import Filter from './components/Filter';
import TasksList from './components/TasksList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <AddForm />
      <Filter />
      <TasksList />
    </Provider>
  );
}

export default App;

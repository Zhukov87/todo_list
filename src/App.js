import React from 'react';
import AddForm from './components/AddForm';
import Filter from './components/Filter';
import TaskList from './components/TasksList';

function App() {
  return (
    <div>
      <AddForm />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;

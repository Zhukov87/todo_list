import React from 'react';
import AddForm from './components/AddForm/';
import TasksList from './components/TasksList/';
import Filter from './components/Filter/';
import { Provider } from 'react-redux';
import storeConfig from './store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const { store, persistor } = storeConfig();
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AddForm />
        <Filter />
        <TasksList />
      </PersistGate>
    </Provider>
  );
}

export default App;

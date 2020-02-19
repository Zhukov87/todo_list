import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../ducks';
import middleware from '../middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
};
  
const persistedReducer = persistReducer(persistConfig, reducer);
  
export default () => {
    let store = createStore(persistedReducer, composeEnhancer(applyMiddleware(middleware)));
    let persistor = persistStore(store);
    return { store, persistor };
};
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {routerMiddleware} from 'react-router-redux';
import { browserHistory } from 'react-router';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



function configureStore(initialState) {
  const middlewares = [
    routerMiddleware(browserHistory),
    thunk,
  ];

  const persistConfig = {
    key: 'root',
    storage,
    blacklist:  ['routing']
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  let store = createStore(persistedReducer, initialState, compose(
    applyMiddleware(...middlewares)
    ));
  
  let persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
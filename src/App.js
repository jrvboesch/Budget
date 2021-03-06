import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4000/api"; 

const store = configureStore({});

const history = syncHistoryWithStore(browserHistory, store.store);

const App = () => {
  return (
  	<Provider store={store.store}>
  		<PersistGate loading={null} persistor={store.persistor}>
			<Router history={history} routes={routes} />
		</PersistGate>
	</Provider>
  );
};
export default App;
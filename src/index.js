import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import manageActivity from './reducers/manageActivity';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(manageActivity, composeEnhancers( applyMiddleware(thunk) ))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
 
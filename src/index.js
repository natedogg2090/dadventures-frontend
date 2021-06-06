import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import manageActivity from './reducers/manageActivity';
import manageJokes from './reducers/manageJokes';
import { combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ manageActivity, manageJokes })

const store = createStore(reducers, composeEnhancers( applyMiddleware(thunk) ))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
 
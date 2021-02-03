import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import rootReducers from './redux/rootReducers'
import { createStore ,compose,applyMiddleware} from 'redux';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <Router>
    <App />      
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


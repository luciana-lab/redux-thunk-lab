import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

// to implement Thunk, we need to import applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import catsReducer from './reducers/catsReducer';
import thunk from 'redux-thunk';

// use createStore() function to initialize the store
// pass thunk into applyMidleware() and pass that in as the 2nd argumento for createStore
const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

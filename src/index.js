import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Redux middleware
import logger from 'redux-logger'

// Reducers
import reducer from './reducers';

import App from './App';
import './index.css';

// Initialising Redux
const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
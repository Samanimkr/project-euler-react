import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Redux middleware
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';

// Reducers
import reducer from './reducers';

// Sagas
import rootSaga from './sagas';


import App from './App';
import './index.css';

// Initialising Redux
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
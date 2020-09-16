import React from 'react';
import ReactDOM from 'react-dom';
import App from './blog/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './blog/reducers';

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root'));
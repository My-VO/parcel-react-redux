import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from './store/store';

import App from './app'

const store = configureStore()

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>, MOUNT_NODE
)
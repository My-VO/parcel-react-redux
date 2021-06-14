import { createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import rootReducer from './root'

const loggerMiddleWare = createLogger();

export default preloadedState => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            loggerMiddleWare,
        )
    )
}
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import todos from './todos';

const mainReducer = combineReducers({
    todos
});

const middlewares = applyMiddleware(thunk);


const store = createStore(
    mainReducer,
    compose(
        middlewares,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;

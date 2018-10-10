import {createAction, handleActions} from 'redux-actions';

// Setup
const ADD_TODO = 'ADD_TODO';
const ADD_TODOS = 'ADD_TODOS';
const FETCHING_TODOS = 'FETCHING_TODOS';

const defaultState = {
    list: [{id: 1, title: 'test', completed: false}],
    fetching: false
};


//Actions - interfejs na świat
export const addTodo = createAction(ADD_TODO);
export const addTodos = createAction(ADD_TODOS);
export const fetchingTodos = createAction(FETCHING_TODOS);


//Reducer
export default handleActions({
    [ADD_TODO]: (state, action) => {
        return {...state, list: [...state.list, action.payload]};
    },

    [ADD_TODOS]: (state, action) => {
        return {...state, list: [...state.list, ...action.payload], fetching: false};
    },

    [FETCHING_TODOS]: (state, action) => {
        return {...state, fetching: action.payload};
    }
}, defaultState);




import {addTodos, fetchingTodos} from './store/todos';

export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchingTodos(true));
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const todos = await response.json();
            dispatch(addTodos(todos));
        } catch(err) {
            console.warn(err);
            dispatch(fetchingTodos(false));
        }
    }
};


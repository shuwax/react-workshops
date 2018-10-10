import {connect} from 'react-redux';

import {fetchTodos} from '../todoService';
import {addTodo} from '../store/todos';

import App from './App';

//Połącznenie
const mapStateToProps = (state) => {
    return {
        todos: state.todos.list,
        fetching: state.todos.fetching
    }
};

const mapDispatchToProps = {
    fetchTodos,
    addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
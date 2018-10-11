import {connect} from 'react-redux';

import {fetchTodos} from '../todoService';
import {addTodo} from '../store/todos';

import {fetchUsers} from '../usersService';
import {addUsers} from '../store/users';

import App from './App';

//Połącznenie
const mapStateToProps = (state) => {
    return {
        todos           : state.todos.list,
        fetching        : state.todos.fetching,
        users           : state.users.usersList,
        fetchingUsers   : state.users.fetchingUsers
    }
};

const mapDispatchToProps = {
    fetchTodos,
    addTodo,
    fetchUsers,
    addUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
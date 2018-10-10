import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchTodos} from './todoService';
import {addTodo} from './store/todos';

import Todo from './Todo';
class App extends Component {

    async componentDidMount() {
        this.props.addTodo({id: 0, title: 'My To Do'});
        this.props.fetchTodos();
    }

    render() {
        const {todos, fetching} = this.props;

        const todoList = todos.map(todo => {
           return <Todo key={todo.id} {...todo} onChange={() => {}}/>
        });

        return (
            <div className="App">
                {fetching ? <div>Loading...</div> : todoList}
            </div>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);

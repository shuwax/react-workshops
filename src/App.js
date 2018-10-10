import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo, addTodos, fetchingTodos} from './store/todos';
import Todo from './Todo';
class App extends Component {

    async componentDidMount() {
        const {addTodos, fetchingTodos} = this.props;
        try {
            fetchingTodos(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const todos = await response.json();
            addTodos(todos);
            fetchingTodos(false);
        } catch(err) {
            console.warn(err);
            fetchingTodos(false);
        }
    }

    handleClick = () => {
        const todo = {id: 2, title: 'My new todo', completed: false};
        this.props.addTodo(todo);
    };

    render() {
        const {todos, fetching} = this.props;

        const todoList = todos.map(todo => {
           return <Todo key={todo.id} {...todo} onChange={() => {}}/>
        });

        return (
            <div className="App">
                <button onClick={this.handleClick}>Add new ToDo</button>
                {fetching ? <div>Loading...</div> : todoList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.list,
        fetching: state.todos.fetching
    }
};

const mapDispatchToProps = {
    addTodo,
    addTodos,
    fetchingTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

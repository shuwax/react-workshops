import React, {Component} from 'react';

import Todo from './Todo';

class App extends Component {

    constructor() {
        super();

        this.state = {
            todos: []
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const todos = await response.json();
            this.setState({todos})
        } catch(err) {
            console.warn(err);
        }
    }

    handleChange = (params) => {
        const todos = this.state.todos.map(todo => {
           if (todo.id === params.id) {
               return {...todo, completed: !todo.completed};
           }
           return {...todo}
        });

        this.setState({todos});
    };

    render() {
        const {todos} = this.state;

        const todoList = todos.map(todo => {
           return <Todo key={todo.id} {...todo} onChange={this.handleChange}/>
        });

        return (
            <div className="App">
                {todoList}
            </div>
        );
    }
}

export default App;

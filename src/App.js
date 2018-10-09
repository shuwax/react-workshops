import React, {Component} from 'react';

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

    render() {
        const {todos} = this.state;

        const todoList = todos.map(todo => {
           return <div key={todo.id}>{todo.title}</div>
        });

        return (
            <div className="App">
                {todoList}
            </div>
        );
    }
}

export default App;

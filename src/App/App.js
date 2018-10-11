import React, {Component} from 'react';
import Todo from '../Todo';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedUser : -1,
            listUserTask : []
        }
    }
    async componentDidMount() {
        await this.props.fetchUsers();
        await this.props.fetchTodos();
        this.setState({
            listUserTask: this.props.todos
        });
    }

    render() {
        const {fetching, users, fetchingUsers} = this.props;
        // create todolist by state
        const todoList = this.state.listUserTask.map(todo => {
            return <Todo key={todo.id} {...todo} onChange={() => {}}/>
        });
        //create option with all users
        const usersList = users.map(item => {
            return (
                <option
                    value={item.id}
                    key={item.id}>
                    {item.name}
                </option>
            );
        });

        return (
            <div className="App">
                <select className="form-control" value={this.state.selectedUser} onChange={this.handleOnChangeSelect}>
                    <option value="-1">Wybierz użytkownika</option>
                    {fetchingUsers ? '' : usersList}
                </select>
                <div>
                    {fetching ? <div>Loading...</div> : todoList}
                </div>
            </div>
        );
    }

    handleOnChangeSelect = (event) => {
        // get selected value
        const selectedUser = parseInt(event.target.value);
        // if select value is change
        if(selectedUser !== this.state.selectedUser){
            this.setState({selectedUser});
            //if -1 get all task for all users
            if(selectedUser === -1){
                this.setState({
                    listUserTask: this.props.todos
                });
            }else{
                //if selected value != -1 filter todos by userId
                const filterToDos = this.props.todos.filter((item) => {
                    return item.userId === selectedUser
                });
                //pass filter todos to state
                this.setState({
                    listUserTask: filterToDos
                });
            }
        }

    }

}

export default App;

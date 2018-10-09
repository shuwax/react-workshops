import React, {Component} from 'react';

import Title from './Title';
import ButtonWithCounter from './ButtonWithCounter'

class App extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        const {counter} = this.state;
        this.setState({counter: counter+1});
    };

    render() {
        const {counter} = this.state;
        return (
            <div className="App">
                <Title type="TEST2" content="Welcome message"/>
                <ButtonWithCounter onClick={this.handleClick} counter={counter}/>
            </div>
        );
    }
}

export default App;

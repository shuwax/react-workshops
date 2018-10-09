import React, {Component} from 'react';

import Title from './Title';
import ButtonWithCounter from './ButtonWithCounter'

class App extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            iterations: []
        }
    }

    handleClick = () => {
        const {counter, iterations} = this.state;

        this.setState({
            counter: counter + 1,
            iterations: [...iterations, {
                id: counter + 1,
                time: new Date()
            }]
        });
    };

    render() {
        const {counter, iterations} = this.state;

        const list = iterations.map(item => {
            return <div key={item.id}>{item.id} - {item.time.toString()}</div>;
        });


        return (
            <div className="App">
                <Title type="TEST2" content="Welcome message"/>
                <ButtonWithCounter onClick={this.handleClick} counter={counter}/>
                {list}
            </div>
        );
    }
}

export default App;

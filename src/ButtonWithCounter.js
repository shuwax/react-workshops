import React from 'react';

const ButtonWithCounter = (props) => {
    return (
        <div>
            <div>Counter: {props.counter}</div>
            <button onClick={props.onClick}>Hit me!</button>
        </div>
    );
};


export default ButtonWithCounter;

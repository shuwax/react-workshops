import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <input value={props.completed} onChange={() => props.onChange(props)} type="checkbox"/>
            <span>{props.title}</span>
            <hr/>
        </div>
    );
};

export default Todo;

import React from 'react';
import '../css/style.css';

function TodoList(props){
    return(
        <div className='todo-item'>
            <input type='checkbox' checked = {props.todoObject.completed}/>
            <p>{props.todoObject.text}</p>
        </div>
    )
}

export default TodoList
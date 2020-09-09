import React from 'react';
import '../css/style.css';

function TodoList(props){
    const completedStyle = {
        fontStyle : 'italic',
        color : 'red',
        textDecoration : 'line-through'    
    }
    return(
        
        <div className='todo-item'>
            <input 
                type='checkbox' 
                checked = {props.todoObject.completed}
                onChange = {() => props.handleChange(props.todoObject.id)}
            />
            <p style = {props.todoObject.completed ? completedStyle : null}>{props.todoObject.text}</p>
        </div>
    )
}

export default TodoList
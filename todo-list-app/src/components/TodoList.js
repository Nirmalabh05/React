import React from 'react';
import '../css/style.css';

function TodoList(props){
    return(
        <div className='todo-item'>
            <input type='checkbox' />
            <p>Place holder </p>
        </div>
    )
}

export default TodoList
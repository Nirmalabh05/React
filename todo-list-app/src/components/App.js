import React from 'react';
import '../css/style.css';
import todoData from '../todoData';

import TodoList from './TodoList';

function App(){
    const todoComponent = todoData.map(todoItem => <TodoList todoObject = {todoItem}/>)
    return(
        <div className='todo-list'>
            {todoComponent}
        </div>
    )
}

export default App;
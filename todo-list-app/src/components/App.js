import React from 'react';
import '../css/style.css';

import TodoList from './TodoList';

function App(){
    return(
        <div className='todo-list'>
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
        </div>
    )
}

export default App;
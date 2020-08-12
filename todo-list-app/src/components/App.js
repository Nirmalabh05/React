import React from 'react';
import '../css/style.css';
import todoData from '../todoData';

import TodoList from './TodoList';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: todoData
        }
    }
    render(){
        const todoComponent = this.state.todos.map(todoItem => <TodoList todoObject = {todoItem}/>)
        return(
            <div className='todo-list'>
                {todoComponent}
            </div>
        )
    }
}


export default App;
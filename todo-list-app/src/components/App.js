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
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState( prevState => {
            const updatedTodos = prevState.todos.map(item => {
                if(item.id === id){
                    item.completed = !item.completed
                }
                return item
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render(){
        const todoComponent = this.state.todos.map(todoItem => <TodoList todoObject = {todoItem} handleChange = {this.handleChange}/>)
        return(
            <div className='todo-list'>
                {todoComponent}
            </div>
        )
    }
}


export default App;
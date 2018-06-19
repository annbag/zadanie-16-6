import React from 'react';
import Todo from './Todo.js';
import App from '../containers/App.js';


const TodoList = ({todos, remove}) => {
    const task = todos.map(element => {
    	return (
    		<Todo 
    			key= {element.id}
    			task= {element}
    			remove={remove} 
    		/>
    	);
    })
    return (<ul> {task} </ul> );
}

export default TodoList;
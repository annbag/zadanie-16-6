import React from 'react';
import Todo from './Todo.js';
import App from '../containers/App.js';


const TodoList = ({todos, remove}) => {
    const tasks = todos.map(element => {
    	return (
    		<Todo 
    			key= {element.id}
    			tasks= {element}
    			remove={remove} 
    		/>
    	);
    })
    return (<ul> {tasks} </ul> );
}

export default TodoList;
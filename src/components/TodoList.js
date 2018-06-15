import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
	const todoListElements = todos.map(todo => (
		<Todo text={todo.text} id={todo.id} remove={props.remove} />)	
	)
	return <ul className={style.TodoList}>{todoListElements}</ul>
}

export default TodoList;
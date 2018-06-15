import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
	const todoListElements = props.list.map(element => (
		<Todo text={element.text} id={element.id} remove={props.remove} />)	
	)
	return <ul className={style.TodoList}>{todoListElements}</ul>
}
export default TodoList;
import React from 'react';

const TodoList = props => (
	const todoListElements = props.list.map(element =>
		<Option text={element.text} id={element.id} remove={props.remove} />)
	return (
		<ul className={style.TodoList}>{todoListElements}</ul>
	)	
)
export default TodoList;
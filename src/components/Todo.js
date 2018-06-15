import React from 'react';

const Todo = (props) => (
	<li>
		{props.text}
		<button onClick={() => props.remove(props.id)}> X </button>
	</li> 
)
export default Todo;
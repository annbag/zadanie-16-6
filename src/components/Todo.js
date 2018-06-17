import React from 'react';

const Todo = ({task, remove}) => {
	return (
		<li>
			{task.text}
			<button onClick={() => remove(task.id)}> X </button>
		</li> 
	);
}
export default Todo;
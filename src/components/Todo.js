import React from 'react';

const Todo = ({task, remove}) => (
	<li> 
		{task}
		<button onClick={() => remove(task.id)}> X </button>
	</li> 
);

export default Todo;
import React from 'react';

const AddTodo = ({onSubmit, todoText, onChange }) => (
	<form>
		<input type="text" value={todoText}></input>
		<button type="submit">Add</button>
	</form>
)

export default AddTodo;
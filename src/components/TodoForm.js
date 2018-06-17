import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
	    super(props);
	    this.state = {text: ''};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({text: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Add task:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<button type="submit">Add</button>				
			</form>
		)
	}
}


export default TodoForm;
import React from 'react';
import React from 'react-dom';

class Form extends React.Component {
    constructor(props){
	    super(props);
	    this.state = {value: ''};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
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
			</form>
		);
	}
}


export default AddTodo;
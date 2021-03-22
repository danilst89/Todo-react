import React, {Component} from 'react';
import './post-add-form.css';


export default class PostAddForm extends Component {

	state = {
		text: '',
	};

	onValueChange = (e) => {
		this.setState({
			text: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.text !== '') {
			this.props.onAdd(this.state.text);
			this.setState({
				text: ''
			});
		}
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} className='bottom-panel d-flex'
				  >
				<input value={this.state.text} onChange={this.onValueChange} type="text" placeholder='О чём вы думаете сейчас?' className='form-control new-post-label'/>
				<button type='submit' className='btn btn-outline-secondary'>Добавить</button>
			</form>
		)
	}
}
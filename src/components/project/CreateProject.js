import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../js/actions/projectActions';

class CreateProject extends Component{
	state = {
		title:'',
		content:'', 
	}

	handleChange = (e) =>{ 
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log('input changed');
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.createProject(this.state);
		console.log(this.state);
		console.log('input submitted');
	}

	render(){
		const { auth } = this.props;
		if(!auth.uid) return <Redirect to="/login" />
		return(
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">New Project</h5>
					<div className="input-field"> 
						<label htmlFor="title">Title</label>
						<input type="text" id="title"   onChange={this.handleChange} />
					</div>
					<div className="input-field"> 
						<label htmlFor="content">Content</label>
						<textarea className="material-textarea" id="content" cols="30" rows="10" onChange={this.handleChange}></textarea>
					</div> 
					<div className="input-field"> 
						<button className="btn pink lighten-1 z-depth-0">Post Project</button>
					</div>
				</form>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		createProject: (project) => dispatch(createProject(project))
	}
}
export default connect (mapStateToProps, mapDispatchToProps) (CreateProject);
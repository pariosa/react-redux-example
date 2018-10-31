import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../js/actions/authActions'
class SignUp extends Component{
	state = {
		email:'',
		password:'',
		firstName:'',
		lastName:''
	}

	handleChange = (e) =>{ 
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log('input changed');
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.signUp(this.state);
		console.log(this.state);
		console.log('input submitted');
	}

	render(){
		const { auth, authError } = this.props;
		if (auth.uid) return <Redirect to="/"/>
		return(
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Register</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>

						<input type="email" id="email" placeholder="example@gmail.com" onChange={this.handleChange} />
					</div>
					<div className="input-field"> 
						<label htmlFor="firstName">First Name</label>

						<input type="text" id="firstName" placeholder="Alex" onChange={this.handleChange} />
					</div>
					<div className="input-field"> 
						<label htmlFor="lastName">Last Name</label>

						<input type="text" id="lastName" placeholder="Jones" onChange={this.handleChange} />
					</div>
					<div className="input-field"> 
						<label htmlFor="password">Password</label>
						<input type="password" id="password" placeholder="********" onChange={this.handleChange} />
					</div>
					<div className="input-field"> 
						<button className="btn pink lighten-1 z-depth-0">Sign Up</button>
					</div>
					<div className="red-text error">
						{authError ? <p>{authError}</p> : null}
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		authError: state.auth.authError,
		auth: state.firebase.auth
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
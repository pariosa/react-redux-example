import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../js/actions/authActions';
 
const SignedInLinks = (props) => {
	console.log(props.profile)
	return(
		 <ul className="right">
		 	<li><NavLink to="/newproject">New Project</NavLink></li>
		 	<li><a onClick={props.signOut}>Log Out</a></li>
		 	<li><NavLink to="/profile" className="btn btn-floating blue accent-1">
		 		{props.profile.initials}
		 	</NavLink></li>

		 </ul>
	)
}
const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () => dispatch(signOut())
	}
} 
export default connect( null, mapDispatchToProps ) ( SignedInLinks );
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../js/actions/authActions';
 
const SignedInLinks = (props) => {

	return(
		 <ul className="right">
		 	<li><NavLink to="/newproject">New Project</NavLink></li>
		 	<li><a onClick={props.signOut}>Log Out</a></li>
		 	<li><NavLink to="/profile" className="btn btn-floating blue accent-1">PA</NavLink></li>

		 </ul>
	)
}
const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () => dispatch(signOut())
	}
}
export default connect( null, mapDispatchToProps ) ( SignedInLinks );
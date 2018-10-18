import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return(
		 <ul classname="right">
		 	<li><NavLink to="/signup">Register</NavLink></li>
		 	<li><NavLink to="/login">Login</NavLink></li> 
		 </ul>
	)
}

export default SignedOutLinks;
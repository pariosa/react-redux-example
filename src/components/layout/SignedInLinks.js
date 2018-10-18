import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
	return(
		 <ul classname="right">
		 	<li><NavLink to="/newproject">New Project</NavLink></li>
		 	<li><NavLink to="/logout">Log Out</NavLink></li>
		 	<li><NavLink to="/profile" className="btn btn-floating pink lighten-1">PA</NavLink></li>

		 </ul>
	)
}

export default SignedInLinks;
import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
	return(
		<nav className="nav-wrapper indigo lighten-2">
			<div className="container">
				<Link to="/" className="brand-logo"> App name </Link>
				<SignedOutLinks/>
				<SignedInLinks/>
			</div>
		</nav>
	)
}

export default Navbar;
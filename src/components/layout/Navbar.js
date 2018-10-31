import React, { Component } from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

const Navbar = (props) =>{
		const { auth, profile } = props;
		const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks/>;
		return(
			<nav className="nav-wrapper indigo lighten-2">
				<div className="container">
					<Link to="/" className="brand-logo"> App name </Link>
					{links}
				</div>
			</nav>
		)
	
}
 

const mapStateToProps = ( state ) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}
export default connect(mapStateToProps)(Navbar); 
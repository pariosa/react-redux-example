import { compose } from 'redux';
import { connect } from  'react-redux'; 
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
import { firestoreConnect } from 'react-redux-firebase';
class Dashboard extends Component {
	render(){
		console.log(this.props)
		const { projects, auth } = this.props;
		if(!auth.uid) return <Redirect to="/login" />
		return(
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'projects'}
	])
)(Dashboard)



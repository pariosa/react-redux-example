import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import moment from 'moment';

const ProjectDetails = (props) => {
  const { project } = props;
  	if(project){
  		   console.log()

		return ( 
			<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text text-darken-3">
					<div className="card-title">{project.title}</div>
					<div className="card-content">{project.content}</div>
					<p>posted by {project.authorFirstName} {project.authorLastName}</p>
					<div>&nbsp;</div>
					<div className="card-action lighten-4">
						<p className="grey-text"> created on {moment.unix(project.createdAt.seconds).format('LLL')}</p> 
						<p className="small-text grey-text"> retrieved from 🔥<span className="orange-text">base</span> on {moment(project.TIMESTAMP).format('LLL')}</p>
					</div>
				</div>
			</div> 
		)
	}else{
	    return (
	      <div className="container center">
	        <p>Loading project...</p>
	      </div>
	    )
	}
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
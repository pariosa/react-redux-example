import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
	return ( 
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<div className="card-title">{project.title}</div>
				<div className="card-content">{project.content}</div>
				<p>posted by {project.authorFirstName} {project.authorLastName}</p>
				<div>&nbsp;</div>
				<div className="card-action lighten-4">
					<p className="grey-text"> created {moment.unix(project.createdAt.seconds).calendar()}</p> 
					<p className="small-text grey-text"> retrieved from 🔥<span className="orange-text">base</span> on {moment(project.TIMESTAMP).format('LLL')}</p>
				</div>
			</div>
		</div> 
	)
}

export default ProjectSummary;
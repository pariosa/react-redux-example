import React from 'react';

const ProjectSummary = ({project}) => {
	return ( 
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<div className="card-title">{project.title}</div>
				<div className="card-content">{project.content}</div>
				<p>posted by ariosa</p>
				<p className="grey-text">3rd September, 2am</p> 
			</div>
		</div> 
	)
}

export default ProjectSummary;
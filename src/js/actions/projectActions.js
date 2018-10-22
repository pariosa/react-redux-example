export const createProject = (project) => {
	return (dispatch, getState) => {
		//make asynch call to db
		dispatch({
			type: 'CREATE_PROJECT', 
			project
		})
	}
}
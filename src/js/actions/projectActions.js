export const createProject = (project) => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		//make asynch call to db
		const fireStore = getFirestore();
		fireStore.collection('projects').add({
			...project,
			authorFirstName: 'Peter',
			authorLastName: 'A.',
			authorId: 1,
			createdAt: new Date(),
		}).then(()=>{
			dispatch({type: 'CREATE_PROJECT', project })
		}).catch((e)=>{
			dispatch({type: 'CREATE_PROJECT_ERROR',	e})
		})
	}
}
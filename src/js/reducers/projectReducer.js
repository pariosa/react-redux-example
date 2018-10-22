const initState = {
	projects: [
	{id: '1', title:'first project demo', content:'blah blah blah'},
	{id: '2', title:'second project demo', content:'yaddah yaddah'},
	{id: '3', title:'third project demo', content:'blah blah blah yaddah yaddah'}
	],
}

const projectReducer = ( state = initState, action) => {
	switch (action.type){
		case 'CREATE_PROJECT':
			{
				console.log('you just created a new project!');
			}
	}
	return state;
}

export default projectReducer;
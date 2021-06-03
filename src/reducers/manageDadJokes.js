export default function manageActivities(state = {
	jokes: [], loading: false
}, action) {
	switch (action.type) {
		case 'LOADING_JOKES':
			return {
				...state,
				jokes: [...state.jokes],
				loading: true
			}
		case 'ADD_JOKES':
            return { 
                ...state,
                jokes: [...state, action.payload],
                loading: false
            }
		default:
			return state;
	}
}
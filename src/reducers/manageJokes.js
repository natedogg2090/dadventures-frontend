export default function manageJokes(state = {
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
			const joke = action.payload
            return { 
                ...state,
                jokes: [...state.jokes , joke],
                loading: false
            }
		default:
			return state;
	}
}
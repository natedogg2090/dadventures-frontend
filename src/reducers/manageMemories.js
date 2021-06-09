export default function manageMemories(state = {memories: [], loading: false}, action) {
	switch (action.type) {
		case 'LOADING_MEMORIES':
		return {
			...state,
			memories: [...state.memories],
			loading: true
		}
		case 'ADD_MEMORIES':
			const memories = action.payload
			return { 
				...state,
				memories: [...state.memories, memories],
				loading: false
			}

		// case 'DELETE_REVIEW':
		// 	return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

		default:
			return state;
	}
}
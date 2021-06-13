export default function manageMemories(state = {
	memories: [], loading: false
}, action) {
	switch (action.type) {
		case 'LOADING_MEMORIES':
		return {
			...state,
			memories: [...state.memories],
			loading: true
		}
		case 'ADD_MEMORIES':
			return { 
				...state,
				memories: action.payload,
				loading: false
			}

		case 'ADD_MEMORY':
			return {
				...state,
				memories: [...state.memories, action.payload],
				loading: false
			}

		default:
			return state;
	}
}
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

		default:
			return state;
	}
}
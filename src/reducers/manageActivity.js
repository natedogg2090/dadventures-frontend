export default function manageActivities(state = {
	activities: [], memories: [], loading: false
}, action) {
	switch (action.type) {
		case 'LOADING_ACTIVITIES':
			return {
				...state,
				activities: [...state.activities],
				loading: true
			}
		case 'ADD_ACTIVITY':
			if (!(Array.isArray(action.payload))) {
				return {
					...state,
					activities: [...state.activities, action.payload],
					loading: false
				}
			}
			else {
				return { 
					...state,
					activities: action.payload,
					loading: false
				}
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
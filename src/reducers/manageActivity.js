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
				
		// case 'DELETE_RESTAURANT':
		// 	return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }

		case 'ADD_MEMORY':
			debugger;
			const memory = { 
				text: action.memory.text, 
				activityId: action.review.activityId, 
				id: action.memory.id
			}
			
		// 	return { ...state, memories: [...state.memories, memory] }

		// case 'DELETE_REVIEW':
		// 	return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

		default:
			return state;
	}
}
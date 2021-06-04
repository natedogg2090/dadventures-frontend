export default function manageMemories(state = [], action) {
	switch (action.type) {
		// case 'LOADING_ACTIVITIES':
		// 	return {
		// 		...state,
		// 		activities: [...state.activities],
		// 		loading: true
		// 	}
		// case 'ADD_ACTIVITY':
		// 	if (!(Array.isArray(action.payload))) {
		// 		return {
		// 			...state,
		// 			activities: [...state.activities, action.payload],
		// 			loading: false
		// 		}
		// 	}
		// 	else {
		// 		return { 
		// 			...state,
		// 			activities: action.payload,
		// 			loading: false
		// 		}
		// 	}
				
		// case 'DELETE_RESTAURANT':
		// 	return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }

		// case 'ADD_REVIEW':
		// 	const review = { 
		// 		text: action.review.text, 
		// 		restaurantId: action.review.restaurantId, 
		// 		id: cuidFn() 
		// 	}
			
		// 	return { ...state, reviews: [...state.reviews, review] }

		// case 'DELETE_REVIEW':
		// 	return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

		default:
			return state;
	}
}
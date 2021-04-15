export default function manageActivities(state = {
	activities: []
}, action) {
	switch (action.type) {
		case 'ADD_ACTIVITY':
            console.log('activity is being added')
            console.log(action.text) 
            // {activityName: "tom", activityDescription: "go out", activityDuration: "20", activityWhatToBring: "shirt, shoes", activityWhatToDo: "1. walk. 2. run"}
            debugger
			const activity = {
				text: action.text
                
			}
			
			return { ...state, activities: [...state.activities, activity] }

		// case 'DELETE_RESTAURANT':
		// 	return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }

		// case 'ADD_REVIEW':
		// 	debugger
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
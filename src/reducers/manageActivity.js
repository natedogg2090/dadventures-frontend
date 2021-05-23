import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageActivities(state = {
	activities: [], loading: false
}, action) {
	switch (action.type) {
		case 'LOADING_ACTIVITIES':
			return {
				...state,
				activities: [...state.activities],
				loading: true
			}
		case 'ADD_ACTIVITY':
			// when calling the api i will get back an array of objects
			// attributes: {name: "Roasting Marshmallows by the Campfire", description: "Roasting marshmallows by the campfire is a time ho…radition that has been passed on for generations.", duration: 60, what_you_need: "Marshmallows, Chocolate Bars, Graham Crackers, Long skewers", what_to_do: "Assuming the campfire already exits, 1. Attach the…ot marshmallow and pull out the skewer. 5. Enjoy!"}
			// id: "1"
			// relationships: {users: {…}, memories: {…}}
			// type: "activity"

			// when submitting an activity from the form I will have an object
			// {name: "tom", description: "go out", duration: 20, what_to_bring: "shirt, shoes", what_to_do: "1. walk. 2. run"}

			// I want my state to equal an object with key activities and value is an array of activity objects

			if (!(Array.isArray(action.activities))) {
				const activity = {
					id: cuidFn(),
					attributes: action.activities
				}
				return {
					...state,
					activities: [...state.activities, activity],
					loading: false
				}
			}
			else {
				const activities = action.activities
				return { 
					...state,
					activities: activities,
					loading: false
				}
			}
				
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
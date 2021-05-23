const baseURL = 'http://localhost:3000/api/v1/activities'

export const fetchActivities = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ACTIVITIES' })
        fetch(`${baseURL}`)
        .then(
            response => response.json()
        )
        .then(
            // data => console.log(data)
            activities => dispatch({ type: "ADD_ACTIVITY", payload: activities.data })
        )
    }
}
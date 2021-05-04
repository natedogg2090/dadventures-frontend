export const fetchActivities = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ACTIVITIES' })
        fetch('http://localhost:3000/api/v1/activities')
        .then(
            response => response.json()
        )
        .then(
            data => console.log(data)
            // data => dispatch({ type: "ADD_ACTIVITY", data})
        )
    }
}
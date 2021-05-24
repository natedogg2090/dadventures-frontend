const baseURL = 'http://localhost:3000/api/v1/activities'

export const addActivity = (data) => {
    return (dispatch) => {
        fetch(`${baseURL}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(activity => dispatch({type: 'ADD_ACTIVITY', payload: activity.data}))
    }
}
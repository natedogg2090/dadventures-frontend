const baseURL = 'http://localhost:3000/api/v1/activities'

export const addActivity = (data) => {
    return (dispatch) => {
        // dispatch({ type: 'LOADING_ACTIVITIES' })
        fetch(`${baseURL}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}
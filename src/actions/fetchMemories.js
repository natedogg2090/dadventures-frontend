const baseURL = 'http://localhost:3000/api/v1/activities/0/memories'

export const fetchMemories = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MEMORIES' })
        fetch(`${baseURL}`)
        .then(
            response => response.json()
        )
        .then(
            data => dispatch({ type: "ADD_MEMORIES", payload: data })
        )
    }
}
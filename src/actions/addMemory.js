const baseURL = 'http://localhost:3000/api/v1/activities/'

export const addMemory = (data) => {
    return (dispatch) => {
        fetch(`${baseURL}/${data.activity_id}/memories`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(memory => dispatch({ type: 'ADD_MEMORY', payload: memory.data }))
    }
}
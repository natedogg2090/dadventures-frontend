export const fetchDadJokes = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_JOKES' })
        fetch(`https://icanhazdadjoke.com/`, {
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'Dadventures App (https://github.com/natedogg2090/dadventures-frontend)'
        }, 
        method: 'GET'
    })
    .then(
        response => response.json()
    )
    .then(
        data => dispatch({type: "ADD_JOKES", payload: data})
    )
    }
}
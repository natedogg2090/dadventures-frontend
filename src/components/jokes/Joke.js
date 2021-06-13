import React from 'react';

const Joke = (props) => {
    return(
        <div class="joke">
            <h1>Dad Joke? Glad you asked...</h1>
            <p>{props.joke}</p>
        </div>        
    )
}

export default Joke;
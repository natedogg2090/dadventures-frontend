import React from 'react';
import Joke from './Joke';

const Jokes = (props) => {

    return (
        <p>
            {props.jokes.map(joke => < Joke key={joke.id} joke={joke.joke} /> )}
        </p>
    )
}

export default Jokes;
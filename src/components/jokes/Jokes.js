import React, { Component } from 'react';
import Joke from './Joke';

class Jokes extends Component {

    renderJokes = () => this.props.jokes.map(
        joke => < Joke key={joke.id} joke={joke.joke} />
    )
    
    render() {
        return (
            <ul>
                {this.renderJokes()}
            </ul>
        )
    }
}

export default Jokes;
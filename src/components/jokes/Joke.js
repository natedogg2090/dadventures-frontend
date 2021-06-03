import React, { Component } from 'react';

class Joke extends Component {

    render() {
        // const { jokes } = this.props;

        return(
            <div class="joke">
                <h1>Dad Joke? Glad you asked...</h1>
                <p>{this.props.joke}</p>
            </div>
        )
    }
}

export default Joke;
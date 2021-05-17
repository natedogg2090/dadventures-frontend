import React, { Component } from 'react';

class Activity extends Component {

    render() {
        const { activity } = this.props;

        return(
            <div>
                <h1>{activity.name}</h1>
                <p>{activity.duration}</p>
                <p>{activity.description}</p>
                <p>{activity.what_to_bring}</p>
                <p>{activity.what_to_do}</p>

            </div>
        )
    }
}

export default Activity;
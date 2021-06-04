import React, { Component } from 'react';
import MemoriesContainer from '../../containers/MemoriesContainer';

class Activity extends Component {

    render() {
        const { activity } = this.props;

        return(
            <div class="activity">
                <h1>{activity.name}</h1>
                <p>{activity.duration}</p>
                <p>{activity.description}</p>
                <p>{activity.what_to_bring}</p>
                <p>{activity.what_to_do}</p>
                < MemoriesContainer activity={activity}/>
            </div>
        )
    }
}

export default Activity;
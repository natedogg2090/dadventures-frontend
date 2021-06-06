import React, { Component } from 'react';
import MemoriesContainer from '../../containers/MemoriesContainer';

class Activity extends Component {

    render() {
        const { activity } = this.props;

        return(
            <div class="activity" id={this.props.activityId}>
                <h1>{activity.name}</h1>
                <p>{activity.duration}</p>
                <p>{activity.description}</p>
                <p>{activity.what_to_bring}</p>
                <p>{activity.what_to_do}</p>
                < MemoriesContainer activity={activity} activityId={this.props.activityId} />                
            </div>
        )
    }
}

export default Activity;
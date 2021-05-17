import React, { Component } from 'react';
import Activity from './Activity';

class Activities extends Component {

    renderActivities = () => this.props.activities.map(
        activity => < Activity key={activity.id} activity={activity.attributes} />
    )
    
    render() {
        return (
            <ul>
                {this.renderActivities()}
            </ul>
        )
    }
}

export default Activities
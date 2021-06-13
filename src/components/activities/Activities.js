import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Activities extends Component {

    renderActivities = () => this.props.activities.map(
        activity => <li key={activity.id}>< Link to={`/activities/${activity.id}`}>{activity.attributes.name}</Link></li>
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
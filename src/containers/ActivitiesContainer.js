import React, { Component } from 'react';
import ActivityInput from '../components/activities/ActivityInput';
import Activities from '../components/activities/Activities';

class ActivityContainer extends Component {
    render () {
        return (
            <div>
                <ActivityInput />
                <Activities />
            </div>
        )
    }
}

export default ActivityContainer
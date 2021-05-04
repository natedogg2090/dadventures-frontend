import React, { Component } from 'react';
import ActivityInput from '../components/activities/ActivityInput';
import Activities from '../components/activities/Activities';
import { connect } from 'react-redux';
import { fetchActivities } from '../actions/activityActions';

class ActivityContainer extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchActivities()
    }

    render () {
        return (
            <div>
                <ActivityInput addActivity={this.props.addActivity} />
                <Activities />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchActivities: () => dispatch(fetchActivities()),
        addActivity: (text) => dispatch({ type: "ADD_ACTIVITY", text})
    }
}

export default connect(null, mapDispatchToProps) (ActivityContainer);
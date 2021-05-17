import React, { Component } from 'react';
import ActivityInput from '../components/activities/ActivityInput';
import Activities from '../components/activities/Activities';
import { connect } from 'react-redux';
import { fetchActivities } from '../actions/activityActions';

class ActivityContainer extends Component {

    componentDidMount() {
        this.props.fetchActivities()
    }

    render () {
        return (
            <div>
                <ActivityInput addActivity={this.props.addActivity} />
                <Activities activities={this.props.activities} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        activities: state.activities,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchActivities: () => dispatch(fetchActivities()),
        addActivity: (activities) => dispatch({ type: "ADD_ACTIVITY", activities})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ActivityContainer);
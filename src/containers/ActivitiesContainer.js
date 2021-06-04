import React, { Component } from 'react';
import ActivityInput from '../components/activities/ActivityInput';
import Activities from '../components/activities/Activities';
import { connect } from 'react-redux';
import { fetchActivities } from '../actions/fetchActivities';
import { addActivity } from '../actions/addActivity';

class ActivitiesContainer extends Component {

    componentDidMount() {
        this.props.fetchActivities()
    }

    render () {
        return (
            <div class="activitiesContainer">
                <ActivityInput addActivity={this.props.addActivity} />
                <Activities activities={this.props.activities} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        activities: state.manageActivity.activities,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchActivities: () => dispatch(fetchActivities()),
        addActivity: (data) => dispatch(addActivity(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ActivitiesContainer);
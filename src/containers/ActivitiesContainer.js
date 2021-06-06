import React, { Component } from 'react';
import ActivityInput from '../components/activities/ActivityInput';
import Activities from '../components/activities/Activities';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchActivities } from '../actions/fetchActivities';
import { addActivity } from '../actions/addActivity';

class ActivitiesContainer extends Component {

    componentDidMount() {
        this.props.fetchActivities()
    }

    render () {
        return (
            <div class="activitiesContainer">
                <Route path='/activities/new' render={ () => <ActivityInput addActivity={this.props.addActivity} /> } />
                <Route exact path='/activities' render={ () => <Activities activities={this.props.activities} /> } />
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
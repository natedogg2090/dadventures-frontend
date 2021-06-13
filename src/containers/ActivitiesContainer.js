import React, { Component } from 'react';
import ActivityInput from '../components/activities/ActivityInput';
import Activities from '../components/activities/Activities';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchActivities } from '../actions/fetchActivities';
import { addActivity } from '../actions/addActivity';
import Activity from '../components/activities/Activity';

class ActivitiesContainer extends Component {

    componentDidMount() {
        this.props.fetchActivities()
    }

    render () {
        return (
            <div class="activitiesContainer">
                <Switch>
                    <Route path='/activities/new' render={ () => <ActivityInput addActivity={this.props.addActivity} /> } />
                    <Route path='/activities/:id' render={ (routerProps) => <Activity { ...routerProps } activities={this.props.activities} /> } />
                    <Route exact path='/activities' render={ (routerProps) => <Activities { ...routerProps } activities={this.props.activities} /> } />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activities: state.manageActivity.activities,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchActivities: () => dispatch(fetchActivities()),
        addActivity: (data) => dispatch(addActivity(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ActivitiesContainer);
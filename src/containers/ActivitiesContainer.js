import React, { Component } from 'react';
import ActivityInput from '../components/activities/ActivityInput';
import Activities from '../components/activities/Activities';
import { connect } from 'react-redux';
import { fetchActivities } from '../actions/fetchActivities';
import { addActivity } from '../actions/addActivity';
import { fetchDadJokes } from '../actions/fetchDadJokes';

class ActivityContainer extends Component {

    componentDidMount() {
        this.props.fetchActivities()
        fetch(`https://icanhazdadjoke.com/`, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Dadventures App (https://github.com/natedogg2090/dadventures-frontend)'
            }, 
            method: 'GET'
        })
        .then(
            response => response.json()
        )
        .then(
            data => console.log(data)
        )
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
        addActivity: (data) => dispatch(addActivity(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ActivityContainer);
import React, { Component } from 'react';
import ActivityInput from '../components/activities/ActivityInput';
import Activities from '../components/activities/Activities';
import { connect } from 'react-redux';

class ActivityContainer extends Component {
    render () {
        return (
            <div>
                <ActivityInput addActivity={this.props.addActivity} />
                <Activities />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addActivity: text => dispatch({ type: "ADD_ACTIVITY", text})
})

export default connect(null, mapDispatchToProps) (ActivityContainer);
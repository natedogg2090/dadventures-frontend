import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemoryInput from '../components/memories/MemoryInput';
// import Memories from '../components/memories/Memories';
// import { connect } from 'react-redux';
// import { fetchActivities } from '../actions/fetchActivities';
import { addMemory } from '../actions/addMemory';

class MemoriesContainer extends Component {

    // componentDidMount() {
    //     this.props.fetchActivities()
    // }

    render () {
        return (
            <div class="memoriesContainer">
                <MemoryInput addMemory={this.props.addMemory} activityId={this.props.activity.id} />
                {/* <Memories memories={this.props.memories} activityId={this.props.activity.id} /> */}
                Memories Container Loaded
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return{
//         activities: state.manageActivity.activities,
//         loading: state.loading
//     }
// }

const mapDispatchToProps = dispatch => {
    return{
        addMemory: (data) => dispatch(addMemory(data))
    }
}

export default connect(null, mapDispatchToProps) (MemoriesContainer);
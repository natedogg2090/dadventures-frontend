import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import MemoryInput from '../components/memories/MemoryInput';
import Memories from '../components/memories/Memories';
import { fetchMemories } from '../actions/fetchMemories';
import { addMemory } from '../actions/addMemory';

class MemoriesContainer extends Component {

    componentDidMount() {
        this.props.fetchMemories()
    }

    render () {
        return (
            <div class="memoriesContainer">
                <MemoryInput addMemory={this.props.addMemory} activity={this.props.activity} />
                <Route path='/activities/:id/' render={ (routerProps) => <Memories {...routerProps } memories={this.props.memories} activity={this.props.activity} /> } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        memories: state.manageMemories.memories,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMemories: () => dispatch(fetchMemories()),
        addMemory: (data) => dispatch(addMemory(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MemoriesContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import MemoryInput from '../components/memories/MemoryInput';
import Memories from '../components/memories/Memories';
import Memory from '../components/memories/Memory';
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
                <Memories memories={this.props.memories} activity={this.props.activity} />
                <Route path='/activities/:id/memories/:id' render={ (routerProps) => <Memory { ...routerProps } memories={this.props.memories} /> } />
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
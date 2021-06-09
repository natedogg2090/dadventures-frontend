import React, { Component } from 'react';
import Memory from './Memory';

class Memories extends Component {

    renderMemories = () => this.props.memories.map(
        memory => < Memory key={memory.id} memory={memory.attributes} />
    )
    
    render() {
        return (
            <ul>
                {this.renderMemories()}
            </ul>
        )
    }
}

export default Memories;
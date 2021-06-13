import React from 'react';
import Memory from './Memory';

const Memories = (props) => {

    return (
        <ul>{props.memories.map( memory => memory.relationships.activity.data.id === props.match.params.id ? <Memory key={memory.id} memory={memory.attributes} /> : null )}</ul>
    )
}

export default Memories;
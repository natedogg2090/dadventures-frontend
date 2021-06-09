import React from 'react';

const Memory = (props) => {
    // let activity = props.activities[props.match.params.id - 1]
    // let memory = props.memories

    return (
        // <p>{memory ? memory.attributes.description : null}</p>
        <div>{props.memory.description}</div>
    )
}

export default Memory;
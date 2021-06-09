import React from 'react';
import MemoriesContainer from '../../containers/MemoriesContainer';

const Activity = (props) => {
    let activity = props.activities[props.match.params.id - 1]

    return (
        <div>
            <h1>{ activity ? activity.attributes.name : null }</h1>
            <p>{ activity ? activity.attributes.duration : null}</p>
            <p>{activity ? activity.attributes.description : null}</p>
            <p>{activity ? activity.attributes.what_to_bring : null}</p>
            <p>{activity ? activity.attributes.what_to_do : null}</p>
            < MemoriesContainer activity={activity} />
        </div>
    )
}

export default Activity;
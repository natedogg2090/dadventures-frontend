// import React, { Component } from 'react';
import React from 'react';
import MemoriesContainer from '../../containers/MemoriesContainer';

// class Activity extends Component {

//     render() {
//         console.log(this.props);
//         const { activity } = this.props;

//         console.log(activity);

//         return(
//             <div class="activity">
//                 <h1>{activity.name}</h1>
//                 <p>{activity.duration}</p>
//                 <p>{activity.description}</p>
//                 <p>{activity.what_to_bring}</p>
//                 <p>{activity.what_to_do}</p>
//                 < MemoriesContainer activity={activity} activityId={this.props.activityId} />                
//             </div>
//         )
//     }
// }

const Activity = (props) => {
    let activity = props.activities[props.match.params.id - 1]
    console.log(props)

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
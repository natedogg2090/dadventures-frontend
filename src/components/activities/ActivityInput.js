import React, { Component } from 'react';

class ActivityInput extends Component {
    state = {
        activityName: '',
        activityDescription: '',
        activityDuration: '',
        activityWhatToBring: '',
        activityWhatToDo: ''
    }

    render() {
        return(
            <div>
                <h1>Add New Activity</h1>
                <form>
                    <span>Name: <input type="text" name="activityName" id="text" /></span>
                    <span>Description: <input type="text" name="activityDescription" id="text" /></span>
                    <span>Duration: <input type="text" name="activityDuration" id="text" /></span>
                    <span>What to bring: <input type="text" name="activityWhatToBring" id="text" /></span>
                    <span>What to do: <input type="text" name="activityWhatToDo" id="text" /></span>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ActivityInput
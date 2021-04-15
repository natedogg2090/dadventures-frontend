import React, { Component } from 'react';

class ActivityInput extends Component {
    state = {
        activityName: " ",
        activityDescription: " ",
        activityDuration: " ",
        activityWhatToBring: " ",
        activityWhatToDo: " "
    }

    handleOnChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addActivity(this.state)
        this.setState({
            activityName: " ",
            activityDescription: " ",
            activityDuration: " ",
            activityWhatToBring: " ",
            activityWhatToDo: " "
        })
    }

    render() {
        return(
            <div>
                <h1>Add New Activity</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <span>Name: <input type="text" name="activityName" id="text" onChange={this.handleOnChange}  value={this.state.activityName} /></span>
                    <span>Description: <input type="text" name="activityDescription" id="text" onChange={this.handleOnChange} value={this.state.activityDescription} /></span>
                    <span>Duration: <input type="text" name="activityDuration" id="text" onChange={this.handleOnChange} value={this.state.activityDuration} /></span>
                    <span>What to bring: <input type="text" name="activityWhatToBring" id="text" onChange={this.handleOnChange} value={this.state.activityWhatToBring} /></span>
                    <span>What to do: <input type="text" name="activityWhatToDo" id="text" onChange={this.handleOnChange} value={this.state.activityWhatToDo} /></span>
                    <input type="submit" value="Submit" />
                </form>
                {[this.state.activityName,
                this.state.activityDescription,
                this.state.activityDuration,
                this.state.activityWhatToBring,
                this.state.activityWhatToDo]}
            </div>
        )
    }
}

export default ActivityInput
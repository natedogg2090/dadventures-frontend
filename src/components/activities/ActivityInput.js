import React, { Component } from 'react';

class ActivityInput extends Component {
    state = {
        name: "",
        description: "",
        duration: "",
        what_you_need: "",
        what_to_do: ""
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
            name: "",
            description: "",
            duration: "",
            what_you_need: "",
            what_to_do: ""
        })
    }

    render() {
        return(
            <div>
                <h1>Add New Activity</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <span>Activity Name: <input type="text" name="name" id="text" onChange={this.handleOnChange}  value={this.state.name} /></span>
                    <span>Description: <input type="text" name="description" id="text" onChange={this.handleOnChange} value={this.state.description} /></span>
                    <span>Duration: <input type="text" name="duration" id="text" onChange={this.handleOnChange} value={this.state.duration} /></span>
                    <span>What to bring: <input type="text" name="what_you_need" id="text" onChange={this.handleOnChange} value={this.state.what_you_need} /></span>
                    <span>What to do: <input type="text" name="what_to_do" id="text" onChange={this.handleOnChange} value={this.state.what_to_do} /></span>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ActivityInput;
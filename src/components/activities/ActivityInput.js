import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addActivity } from '.../actions/addActivity';

class ActivityInput extends Component {
    state = {
        name: " ",
        description: " ",
        duration: " ",
        what_to_bring: " ",
        what_to_do: " "
    }

    // hiking
    // go walking in the woods
    // 30
    // shoes, water, walking stick
    // 1. put on your shoes. 2. pack your water. 3. start walking.

    handleOnChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addActivity(this.state)
        this.setState({
            name: " ",
            description: " ",
            duration: " ",
            what_to_bring: " ",
            what_to_do: " "
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
                    <span>What to bring: <input type="text" name="what_to_bring" id="text" onChange={this.handleOnChange} value={this.state.what_to_bring} /></span>
                    <span>What to do: <input type="text" name="what_to_do" id="text" onChange={this.handleOnChange} value={this.state.what_to_do} /></span>
                    <input type="submit" value="Submit" />
                </form>
                {[this.state.name,
                this.state.description,
                this.state.duration,
                this.state.what_to_bring,
                this.state.what_to_do]}
            </div>
        )
    }
}

export default connect(null, { addActivity })(ActivityInput)
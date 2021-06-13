import React, { Component } from 'react';

class MemoryInput extends Component {
    state = {
        description: "",
        activity_id: ""
    }

    handleOnChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
                activity_id: e.target.id
            })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addMemory(this.state)
        this.setState({
            description: "",
            id: ""
        })
    }

    render() {
        return(
            <div>
                <h1>Any Memories from this latest Dadventure?</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <span>Description: <input type="text" name="description" id={this.props.activity ? this.props.activity.id : null} onChange={this.handleOnChange} value={this.state.description} /></span>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default MemoryInput;
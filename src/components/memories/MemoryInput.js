import React, { Component } from 'react';

class MemoryInput extends Component {
    state = {
        description: ""
    }

    handleOnChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addMemory(this.state)
        this.setState({
            description: ""
        })
    }

    render() {
        return(
            <div>
                <h1>Any Memories from this latest Dadventure?</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <span>Description: <input type="text" name="description" id="text" onChange={this.handleOnChange} value={this.state.description} /></span>
                    <input type="submit" value="Submit" />
                </form>
                {this.state.description}
            </div>
        )
    }
}

export default MemoryInput;
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        text: ''
    }

    handleOnChange = (e) => {
            this.setState({
                [e.target.type]: e.target.value
            })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.setState((state) => {
            return {count: state.count + this.state.text.length}
        })
    }

    render() {
        return(
            <div>
                <h3>Incrementer</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <span><input type="text" text="text" id="text" placeholder="Enter Text" onChange={this.handleOnChange}  value={this.state.text} /></span>
                    <button type="submit" value="Click Me!">Click Me!</button>
                </form>
                <span>{this.state.count}</span>
            </div>
        )
    }
}

export default Counter;
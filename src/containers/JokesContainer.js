import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchDadJokes } from '../actions/fetchDadJokes';
import Jokes from '../components/jokes/Jokes';

class JokesContainer extends Component {

    componentDidMount() {
        this.props.fetchDadJokes()
    }

    render () {
        return (
            <div class="jokesContainer">
                <Route path='/activities/new' render={ () => <Jokes jokes={this.props.jokes} /> } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        jokes: state.manageJokes.jokes,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchDadJokes: () => dispatch(fetchDadJokes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps ) (JokesContainer);
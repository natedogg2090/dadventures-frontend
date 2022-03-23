import React, { Component } from 'react';
import ActivityContainer from './containers/ActivitiesContainer';
import JokesContainer from './containers/JokesContainer';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
            <Link to="/activities/new">New Activity</Link> | 
            <Link to="/activities/">Activities</Link>
        </nav>
        <ActivityContainer />
        <JokesContainer />
      </div>
    );
  }
}

export default App;

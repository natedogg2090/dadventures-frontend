import React, { Component } from 'react';
import ActivityContainer from './containers/ActivitiesContainer';
import JokesContainer from './containers/JokesContainer';

class App extends Component {
  render() {
    return (
      <div>
        <ActivityContainer />
        <JokesContainer />
      </div>
    );
  }
}

export default App;

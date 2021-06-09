import React, { Component } from 'react';
import ActivityContainer from './containers/ActivitiesContainer';
import JokesContainer from './containers/JokesContainer';
import MemoriesContainer from './containers/MemoriesContainer';

class App extends Component {
  render() {
    return (
      <div>
        <ActivityContainer />
        <JokesContainer />
        <MemoriesContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import albums from './data';
import Navbar from './components/Navbar';
import Album from './components/Album';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        {albums.map(albumData => <Album key={albumData.id} {...albumData} />)}
      </div>
    );
  }
}

export default App;

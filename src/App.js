import React, { Component } from 'react';
import albums from './data';
import CoverSection from './components/CoverSection';
import Navbar from './components/Navbar';
import Album from './components/Album';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <CoverSection albums={[...albums, ...albums]} />
        {albums.map(albumData => <Album key={albumData.id} {...albumData} />)}
      </div>
    );
  }
}

export default App;

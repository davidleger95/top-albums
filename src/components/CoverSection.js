import React, { Component } from 'react';

export default class CoverSection extends Component {
  state = {
    flipped: []
  }

  getRandomNumbers = (n, min, max, arr = []) => {
    return n ? this.getRandomNumbers(n-1, min, max, [...arr, Math.floor((Math.random() * max) + min)]) : arr;
  }

  componentDidMount() {
    setInterval(() => this.setState({
      flipped: this.getRandomNumbers(4, 0, this.props.albums.length)
    }), 5000);
  }
  render() {
    console.log(this.state.flipped);
    const tiles = this.props.albums.map(({ coverUrl, colors }, i) => (
      <div key={i} className={`tile ${this.state.flipped.includes(i) ? 'flipped' : null}`} style={{ backgroundColor: colors.primary }}>
        <img src={coverUrl} alt="" />
        <div className="backside" />
      </div>
    ));

    return (
      <header className="CoverSection">
        {/*<h1 className="title">Music I Listen To</h1>
        <h2 className="subtitle">David Leger</h2>*/}
        <div className="mosaic">
          {tiles}
        </div>
      </header>
    )
  }
}

import React, { Component } from 'react';
import albums from '../data';

const renderItem = () => albums.map(({ id, coverUrl, title, artist }) => (
  <li className="menuItem" key={id}>
    <a className="link" href={`#${id}`}>
      <img className="albumArt" src={coverUrl} alt={title} />
      <span className="label">{title} by {artist}</span>
    </a>
  </li>
));

export default class Navbar extends Component {
  state = { scrollY: window.pageYOffset }

  recordScrollPosition = () => {
    this.setState({ scrollY: window.pageYOffset / window.innerHeight })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.recordScrollPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.recordScrollPosition);
  }

  render() {
    const { scrollY } = this.state;
    let offset
    if (scrollY <= 0) {
      offset = -100;
    } else if (scrollY >= 1) {
      offset = 0;
    } else {
      offset = 100 - scrollY * 100;
    }

    console.log(offset);



    return (
      <nav className="Navbar" style={{ transform: `translateX(-${offset}%)` }}>
        <ul className="menu">
          {renderItem()}
        </ul>
      </nav>
    );
  }
}

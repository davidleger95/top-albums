import React, { Component } from 'react';
import albums from '../data';

export default class Navbar extends Component {
  state = {}

  show = (id) => this.setState({ [id]: true })
  hide = (id) => this.setState({ [id]: false })

  renderItem = () => albums.map(({ id, coverUrl, title, artist }) => (
    <li className="menuItem" key={id}>
      <a className="link" href={`#${id}`}>
        <img className="albumArt" src={coverUrl} alt={title} />
        <span className="label">{title} by {artist}</span>
      </a>
    </li>
  ));

  render() {
    return (
      <nav className="Navbar">
        <ul className="menu">
          {this.renderItem()}
        </ul>
      </nav>
    )
  }
}

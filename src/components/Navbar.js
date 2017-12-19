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

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="menu">
        {renderItem()}
      </ul>
    </nav>
  );
}

import React from 'react';

export default function SpotifyPlayer({ albumUrl, coverUrl }) {
  return (
    <div className="SpotifyPlayer">
      <img className="albumArt" src={coverUrl} alt="albumArt" />
      <iframe
        title="Spotify Player"
        className="player"
        src={albumUrl}
        frameBorder="0"
        allowtransparency="true"
      ></iframe>
    </div>
  );
}

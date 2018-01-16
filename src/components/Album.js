import React from 'react';
import Title from './Title';
import SpotifyPlayer from './SpotifyPlayer';
import Header from './Header';

const hexToRGB = hex => hex.substring(1).match(/.{1,2}/g).map(x => parseInt(x, 16)).toString();

export default function Album({ id, title, lyrics, artist, bgUrl, imgCaption, coverUrl, albumUrl, colors, thoughts }) {
  return (
    <section id={id} className="Album" style={{ backgroundColor: colors.secondary }}>
      <Title albumTitle={title} artist={artist} colors={colors} />
      <div className="imageWrapper">
        <img className="backgroundImage" src={bgUrl} alt="" />
        <figcaption className="caption">{imgCaption}</figcaption>
        <div
          className="imageOverlay"
          style={{ backgroundImage: `radial-gradient(rgba(${hexToRGB(colors.secondary)}, 0) 60%, rgba(${hexToRGB(colors.secondary)}, 1) 70%, rgba(${hexToRGB(colors.secondary)}, 1) 100%)` }}
        />
      </div>
      <div className="container">
        <SpotifyPlayer
          coverUrl={coverUrl}
          albumUrl={albumUrl}
        />
        <main className="body" style={{ color: colors.text }}>
          <Header colors={colors} lyrics={lyrics} />
          <div dangerouslySetInnerHTML={{ __html: thoughts }}></div>
        </main>
      </div>
    </section>
  )
}

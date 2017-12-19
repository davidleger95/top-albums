import React from 'react';
import Title from './Title';
import SpotifyPlayer from './SpotifyPlayer';
import Header from './Header';

const hexToRGB = hex => hex.substring(1).match(/.{1,2}/g).map(x => parseInt(x, 16)).toString();

export default function Album({ id, title, lyrics, artist, bgUrl, coverUrl, albumUrl, colors }) {
  return (
    <section id={id} className="Album" style={{ backgroundColor: colors.secondary }}>
      <Title albumTitle={title} artist={artist} colors={colors} />
      <div className="imageWrapper">
        <img className="backgroundImage" src={bgUrl} alt="" />
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
          <p>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis
            risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta
            felis euismod semper. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          </p>
          <p>
            Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id
            nibh ultricies vehicula ut id elit. Sed posuere consectetur est at
            lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
        </main>
      </div>
    </section>
  )
}

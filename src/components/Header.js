import React from 'react';

export default function Header({ lyrics = {}, colors }) {
  return (
    <header className="Header">
      <div className="headerWrapper">
        <div className="block" style={{ backgroundColor: colors.primary }} />
        <p
          className="content"
          style={{ backgroundColor: colors.secondary, borderColor: colors.primary }}
          dangerouslySetInnerHTML={{ __html: lyrics.content }}></p>
        <div className="arrow" style={{ backgroundColor: colors.primary, color: colors.secondary }}>
          {lyrics.song}
        </div>
      </div>
    </header>
  )
}

import React from 'react';
import Icon from './Icon';
export default function Title({ albumTitle, artist, colors }) {
  return (
    <div className="Title">
      <h1 className="albumTitle" style={{ color: colors.secondary, backgroundColor: colors.primary }}>{albumTitle}</h1>
      <h2 className="artist" style={{ color: colors.primary, borderColor: colors.primary, backgroundColor: colors.secondary }}>
        <Icon className="Icon" color={colors.primary} />
        {artist}
      </h2>
    </div>
  )
}

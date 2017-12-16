import React from 'react';

export default function Header({ colors }) {
  return (
    <header className="Header">
      <div className="headerWrapper">
        <div className="block" style={{ backgroundColor: colors.primary }} />
        <p className="content" style={{ backgroundColor: colors.secondary, borderColor: colors.primary }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus.
        </p>
        <button className="arrow" style={{ backgroundColor: colors.primary, color: colors.secondary }}>V</button>
      </div>
    </header>
  )
}

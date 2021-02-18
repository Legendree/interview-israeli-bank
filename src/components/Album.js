import React from 'react';

import '../styles/components/Album.css';

export default function Album({ img, title = 'album_title' }) {
  return (
    <div className='album_container'>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("${img}")`,
          backgroundPosition: 'center',
          borderRadius: 5,
        }}
      />
      <span>{title}</span>
    </div>
  );
}

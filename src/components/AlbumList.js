import React from 'react';

import '../styles/components/AlbumList.css';
import Album from './Album';

export default function AlbumList({ data = [] }) {
  return (
    <div className='albumlist_container'>
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
    </div>
  );
}

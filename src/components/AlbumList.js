import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/components/AlbumList.css';
import Album from './Album';

export default function AlbumList() {
  const state = useSelector((state) => state);

  return (
    <div className='albumlist_container'>
      {state.albums.isFetching ? (
        <>
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
        </>
      ) : (
        state.albums.data.map((album) => (
          <Album
            key={album.id}
            img={album.images[0].url}
            title={album.name}
            artist={album.artists[0].name}
          />
        ))
      )}
    </div>
  );
}

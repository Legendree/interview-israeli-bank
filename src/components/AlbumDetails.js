import React from 'react';

import '../styles/components/AlbumDetails.css';

export default function AlbumDetails({
  albumImageUrl,
  albumName,
  artistName,
  isFetching = false,
}) {
  return (
    <div className='album_details_conatiner'>
      {isFetching ? (
        <div className='album_details_img_placeholder shimmer' />
      ) : (
        <img className='album_img' src={albumImageUrl} alt={albumName} />
      )}
      <div className='album_details'>
        {isFetching ? (
          <div className='album_details_title_placeholder shimmer' />
        ) : (
          <h2 className='album_details_artist_name'>{artistName}</h2>
        )}
        {isFetching ? (
          <div className='album_details_album_placeholder shimmer' />
        ) : (
          <h1 className='album_details_album_name'>{albumName}</h1>
        )}
      </div>
    </div>
  );
}

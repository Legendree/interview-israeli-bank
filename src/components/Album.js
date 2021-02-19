import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsFetching } from '../store/actions/albumsActions';

import '../styles/components/Album.css';

export default function Album({ id, img, title = '', artist = '' }) {
  const dispatch = useDispatch();

  return (
    <div className='album_container'>
      <Link to={`/albums/${id}`} onClick={() => dispatch(setIsFetching(true))}>
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
        <span className='album_title'>{title}</span>
        <span className='artist_title'>{artist}</span>
      </Link>
    </div>
  );
}

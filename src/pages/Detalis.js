import React, { useEffect, useState } from 'react';
import AlbumDetails from '../components/AlbumDetails';

import Layout from '../components/Layout';
import Grid from '../components/Grid';
import { GetAlbumsTracks } from '../api/Tracks';
import { GetAlbumData } from '../api/Albums';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setAlbumData } from '../store/actions/tracksActions';

export default function Details(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [isFetching, setIsFetching] = useState(true);

  const getTracks = async (page = 0) => {
    const data = await GetAlbumsTracks(
      props.match.params.id,
      page,
      window.localStorage.getItem('token')
    );

    dispatch(setData(data.items));
  };

  const getAlbum = async () => {
    const data = await GetAlbumData(
      props.match.params.id,
      window.localStorage.getItem('token')
    );

    dispatch(
      setAlbumData({
        albumImage: data.images[0].url,
        albumName: data.label,
        artistName: data.name,
      })
    );
    setIsFetching(false);
  };

  useEffect(() => {
    getTracks();
    getAlbum();
  }, []);

  return (
    <Layout>
      <AlbumDetails
        isFetching={isFetching}
        albumName={state.tracks.albumsInfo.albumName}
        artistName={state.tracks.albumsInfo.artistName}
        albumImageUrl={state.tracks.albumsInfo.albumImage}
      />
      <Grid></Grid>
    </Layout>
  );
}

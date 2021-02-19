import React, { useEffect, useState } from 'react';
import AlbumDetails from '../components/AlbumDetails';

import Layout from '../components/Layout';
import Grid from '../components/Grid';
import { GetAlbumsTracks } from '../api/Tracks';
import { GetAlbumData } from '../api/Albums';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setAlbumData } from '../store/actions/tracksActions';
import Track from '../components/Track';
import Pagination from '../components/Pagination';

export default function Details(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const getTracks = async (page = 0) => {
    const data = await GetAlbumsTracks(
      props.match.params.id,
      page,
      window.localStorage.getItem('token')
    );

    console.log(data);
    setIsEnd(data.total - page * 15 < 15);
    dispatch(setData(data.items));
    window.scrollTo(0, 0);
  };

  const getAlbum = async () => {
    const data = await GetAlbumData(
      props.match.params.id,
      window.localStorage.getItem('token')
    );

    dispatch(
      setAlbumData({
        albumImage: data.images[0].url,
        albumName: data.name,
        artistName: data.artists[0].name,
      })
    );
    setIsFetching(false);
  };

  useEffect(() => {
    getTracks();
    getAlbum();
  }, []);

  useEffect(() => {
    getTracks(page);
  }, [page]);

  return (
    <Layout>
      <AlbumDetails
        isFetching={isFetching}
        albumName={state.tracks.albumsInfo.albumName}
        artistName={state.tracks.albumsInfo.artistName}
        albumImageUrl={state.tracks.albumsInfo.albumImage}
      />
      <Grid>
        {isFetching ? (
          <>
            <Track isFetching={isFetching} />
            <Track isFetching={isFetching} />
            <Track isFetching={isFetching} />
            <Track isFetching={isFetching} />
            <Track isFetching={isFetching} />
          </>
        ) : (
          state.tracks.data.map((track, index) => (
            <Track
              key={track.id}
              trackDuration={track.duration_ms / 1000}
              trackNumber={index + 1 + page * 15}
              trackName={track.name}
            />
          ))
        )}
      </Grid>
      <Pagination
        currentPage={page + 1}
        onClickBack={() => setPage((currPage) => currPage - 1)}
        onClickForward={() => setPage((currPage) => currPage + 1)}
        isEnd={isEnd}
      />
    </Layout>
  );
}

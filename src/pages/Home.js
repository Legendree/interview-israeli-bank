import React, { useEffect } from 'react';

import AlbumList from '../components/AlbumList';
import Layout from '../components/Layout';
import Search from '../components/Search';

import { getAllNewReleases } from '../api/Albums';
import { useDispatch } from 'react-redux';
import { setDoneFetching } from '../store/actions/albumsActions';

export default function Home() {
  const dispatch = useDispatch();

  const getAlbums = async () => {
    const data = await getAllNewReleases(
      0,
      window.localStorage.getItem('token')
    );
    console.log(data);
    dispatch(setDoneFetching({ isFetching: false, data: data.albums.items }));
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <Layout>
      <Search />
      <AlbumList />
    </Layout>
  );
}

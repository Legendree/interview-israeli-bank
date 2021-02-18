import React, { useEffect, useRef, useState } from 'react';

import AlbumList from '../components/AlbumList';
import Layout from '../components/Layout';
import Search from '../components/Search';

import { getAllNewReleases } from '../api/Albums';
import { useDispatch } from 'react-redux';
import { setDoneFetching } from '../store/actions/albumsActions';

export default function Home() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const loader = useRef(null);

  const getAlbums = async (page = 0) => {
    const data = await getAllNewReleases(
      page,
      window.localStorage.getItem('token')
    );
    console.log(data);
    dispatch(setDoneFetching({ isFetching: false, data: data.albums.items }));
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    getAlbums();
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <Layout>
      <Search />
      <AlbumList />
    </Layout>
  );
}

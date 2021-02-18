import React, { useEffect, useRef, useState } from 'react';

import AlbumList from '../components/AlbumList';
import Layout from '../components/Layout';
import Search from '../components/Search';

import { getAllNewReleases } from '../api/Albums';
import { useDispatch, useSelector } from 'react-redux';
import { setDoneFetching } from '../store/actions/albumsActions';
import { canUseApp } from '../utils/Helpers';
import Pagination from '../components/Pagination';

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [page, setPage] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const getAlbums = async (page = 0) => {
    const data = await getAllNewReleases(
      page,
      window.localStorage.getItem('token')
    );

    setIsEnd(data.albums.total - page * 15 < 15);
    console.log(data);

    dispatch(setDoneFetching({ isFetching: false, data: data.albums.items }));
  };

  useEffect(() => {
    //if (canUseApp) {
    //  window.location.replace('/login');
    //}
    window.scrollTo(0, 0);
    getAlbums(page);
  }, [page]);

  return (
    <Layout>
      <Search />
      <AlbumList />
      <Pagination
        currentPage={page}
        onClickBack={() => setPage((currPage) => currPage - 1)}
        onClickForward={() => setPage((currPage) => currPage + 1)}
        isEnd={isEnd}
      />
    </Layout>
  );
}

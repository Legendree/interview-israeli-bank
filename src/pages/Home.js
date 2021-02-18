import React, { useEffect, useState } from 'react';

import AlbumList from '../components/AlbumList';
import Layout from '../components/Layout';
import Search from '../components/Search';

import { getAllNewReleases } from '../api/Albums';
import { useDispatch } from 'react-redux';
import { setDoneFetching } from '../store/actions/albumsActions';
import { canUseApp } from '../utils/Helpers';
import Pagination from '../components/Pagination';
import { getItemsBySearch } from '../api/Search';

export default function Home() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const getData = async (page = 0, query) => {
    const data =
      searchValue.length > 0
        ? await getItemsBySearch(
            query,
            window.localStorage.getItem('token'),
            page
          )
        : await getAllNewReleases(page, window.localStorage.getItem('token'));

    console.log(data);

    setIsEnd(data.albums.total - page * 15 < 15);
    dispatch(setDoneFetching({ isFetching: false, data: data.albums.items }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (canUseApp) {
      window.location.replace('/login');
    }
    getData(page, searchValue);
  }, [page, searchValue]);

  return (
    <Layout>
      <Search
        onClick={() => {
          setPage(0);
          if (searchValue.length > 0) getData(page, searchValue);
        }}
        value={searchValue}
        onChange={(e) => {
          setPage(0);
          setSearchValue(e.target.value);
        }}
      />
      <AlbumList />
      <Pagination
        currentPage={page + 1}
        onClickBack={() => setPage((currPage) => currPage - 1)}
        onClickForward={() => setPage((currPage) => currPage + 1)}
        isEnd={isEnd}
      />
    </Layout>
  );
}

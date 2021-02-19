import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';

import { getAllNewReleases } from '../api/Albums';
import { useDispatch, useSelector } from 'react-redux';
import { setDoneFetching } from '../store/actions/albumsActions';
import { needAuthorize } from '../utils/Helpers';
import Pagination from '../components/Pagination';
import { getItemsBySearch } from '../api/Search';
import Grid from '../components/Grid';
import Album from '../components/Album';

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

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

    setIsEnd(data.albums.total - page * 15 < 15);
    dispatch(setDoneFetching({ isFetching: false, data: data.albums.items }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (needAuthorize) {
      window.location.replace('/login');
    }

    getData(page, searchValue);
  }, [page, searchValue]); // eslint-disable-line

  const handleSearchChange = (e) => {
    setPage(0);
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    setPage(0);
    if (searchValue.length > 0) getData(page, searchValue);
  };

  return (
    <Layout>
      <Search
        onClick={handleSearchClick}
        value={searchValue}
        onChange={handleSearchChange}
      />
      <Grid>
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
              id={album.id}
              img={album.images[0].url}
              title={album.name}
              artist={album.artists[0].name}
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

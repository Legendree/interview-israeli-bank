import React from 'react';
import AlbumList from '../components/AlbumList';
import Layout from '../components/Layout';
import Search from '../components/Search';

export default function Home() {
  return (
    <Layout>
      <Search />
      <AlbumList />
    </Layout>
  );
}
